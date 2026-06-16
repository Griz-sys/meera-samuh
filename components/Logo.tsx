interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({ size = "md", showTagline = false }: LogoProps) {
  const scales = { sm: 0.72, md: 1, lg: 1.35 };
  const s = scales[size];

  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={Math.round(44 * s)}
        height={Math.round(44 * s)}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circleGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5A623" />
            <stop offset="1" stopColor="#E07B00" />
          </linearGradient>
          <linearGradient id="innerFlame" x1="22" y1="16" x2="22" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8C00" />
            <stop offset="1" stopColor="#D45F00" />
          </linearGradient>
        </defs>
        {/* Circle */}
        <circle cx="22" cy="22" r="22" fill="url(#circleGrad)" />
        {/* Outer flame */}
        <path
          d="M22 8 C22 8 12 18 12 27 C12 32.5 16.5 37 22 37 C27.5 37 32 32.5 32 27 C32 18 22 8 22 8Z"
          fill="white"
          opacity="0.92"
        />
        {/* Inner flame */}
        <path
          d="M22 17 C22 17 17.5 24 17.5 28.5 C17.5 31 19.5 33 22 33 C24.5 33 26.5 31 26.5 28.5 C26.5 24 22 17 22 17Z"
          fill="url(#innerFlame)"
        />
      </svg>

      <div className="flex flex-col leading-none gap-[3px]">
        <span
          style={{
            color: "#1A1A1A",
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: Math.round(18 * s),
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          meera samuh
        </span>
        {showTagline && (
          <span
            style={{
              color: "#6B6B6B",
              fontFamily: "var(--font-ibm-plex-mono), 'IBM Plex Mono', monospace",
              fontSize: Math.round(8.5 * s),
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Next Level of Excellence
          </span>
        )}
      </div>
    </div>
  );
}
