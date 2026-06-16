"use client";
import { useEffect, useRef } from "react";

interface SoftAuroraProps {
  speed?: number;
  scale?: number;
  brightness?: number;
  color1?: string;
  color2?: string;
  noiseFrequency?: number;
  noiseAmplitude?: number;
  bandHeight?: number;
  bandSpread?: number;
  octaveDecay?: number;
  layerOffset?: number;
  colorSpeed?: number;
  enableMouseInteraction?: boolean;
  mouseInfluence?: number;
  className?: string;
}

// Simple smooth noise using sine waves layered together
function noise(x: number, y: number, t: number, freq: number, octaves: number, decay: number): number {
  let val = 0;
  let amp = 1;
  let total = 0;
  for (let i = 0; i < octaves; i++) {
    const f = freq * Math.pow(2, i);
    val += Math.sin(x * f + t * 0.7 + i * 1.3) *
           Math.cos(y * f * 0.5 + t * 0.4 + i * 0.9) *
           Math.sin((x + y) * f * 0.3 + t * 0.5 + i * 2.1) * amp;
    total += amp;
    amp *= decay;
  }
  return val / total;
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

export default function SoftAurora({
  speed = 0.6,
  scale = 1.5,
  brightness = 1,
  color1 = "#f8ff00",
  color2 = "#ff7300",
  noiseFrequency = 2.5,
  noiseAmplitude = 1,
  bandHeight = 0.5,
  bandSpread = 1,
  octaveDecay = 0.1,
  layerOffset = 0,
  colorSpeed = 1,
  enableMouseInteraction = true,
  mouseInfluence = 0.25,
  className = "",
}: SoftAuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };
    if (enableMouseInteraction) canvas.addEventListener("mousemove", onMouseMove);

    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);

    const LAYERS = 5;
    const OCTAVES = 4;
    let t = 0;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const mx = enableMouseInteraction ? mouse.current.x : 0.5;
      const my = enableMouseInteraction ? mouse.current.y : 0.5;

      for (let l = 0; l < LAYERS; l++) {
        const layerT = t + l * (layerOffset + 0.8);
        const colorMix = (Math.sin(t * colorSpeed * 0.3 + l * 1.1) * 0.5 + 0.5);

        const r = Math.round(r1 + (r2 - r1) * colorMix);
        const g = Math.round(g1 + (g2 - g1) * colorMix);
        const b = Math.round(b1 + (b2 - b1) * colorMix);

        const STEPS = Math.max(2, Math.floor(W / 3));
        ctx.beginPath();

        for (let i = 0; i <= STEPS; i++) {
          const nx = (i / STEPS) * scale;
          const mouseOffsetX = enableMouseInteraction ? (mx - 0.5) * mouseInfluence * 2 : 0;
          const mouseOffsetY = enableMouseInteraction ? (my - 0.5) * mouseInfluence : 0;

          const n = noise(
            nx + mouseOffsetX,
            l * 0.4 + layerT * 0.1 + mouseOffsetY,
            layerT,
            noiseFrequency,
            OCTAVES,
            Math.max(0.01, 1 - octaveDecay)
          );

          const bandCenter = (0.3 + l * (bandSpread * 0.12)) + mouseOffsetY * 0.3;
          const yBase = bandCenter * H;
          const yOffset = n * noiseAmplitude * H * 0.18 * bandHeight;
          const y = yBase + yOffset;

          const x = (i / STEPS) * W;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Close path downward
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();

        const spread = bandHeight * H * 0.35 * bandSpread;
        const gradY = Math.max(0, (0.3 + l * 0.1) * H - spread);

        const grad = ctx.createLinearGradient(0, gradY, 0, gradY + spread * 2.5);
        const alpha = (brightness * 0.18 * (1 - l * 0.12));
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(0.3, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(0.6, `rgba(${r},${g},${b},${alpha * 0.6})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.fillStyle = grad;
        ctx.fill();
      }

      t += speed * 0.008;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      if (enableMouseInteraction) canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, [speed, scale, brightness, color1, color2, noiseFrequency, noiseAmplitude,
      bandHeight, bandSpread, octaveDecay, layerOffset, colorSpeed,
      enableMouseInteraction, mouseInfluence]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
