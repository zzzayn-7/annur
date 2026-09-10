function NetworkGraphic() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--silver-dark)" strokeWidth="1" opacity="0.5">
        <line x1="120" y1="120" x2="320" y2="90" />
        <line x1="320" y1="90" x2="540" y2="160" />
        <line x1="540" y1="160" x2="700" y2="80" />
        <line x1="320" y1="90" x2="260" y2="280" />
        <line x1="260" y1="280" x2="120" y2="120" />
        <line x1="260" y1="280" x2="460" y2="340" />
        <line x1="540" y1="160" x2="460" y2="340" />
        <line x1="460" y1="340" x2="650" y2="420" />
        <line x1="650" y1="420" x2="740" y2="280" />
        <line x1="540" y1="160" x2="740" y2="280" />
        <line x1="120" y1="120" x2="80" y2="340" />
        <line x1="80" y1="340" x2="260" y2="280" />
        <line x1="80" y1="340" x2="220" y2="500" />
        <line x1="220" y1="500" x2="460" y2="340" />
        <line x1="220" y1="500" x2="440" y2="560" />
      </g>
      <g>
        <circle cx="120" cy="120" r="5" fill="var(--silver-dark)" />
        <circle cx="320" cy="90" r="4" fill="var(--silver-dark)" />
        <circle cx="540" cy="160" r="6" fill="var(--brand-orange)" opacity="0.7" />
        <circle cx="700" cy="80" r="4" fill="var(--silver-dark)" />
        <circle cx="260" cy="280" r="5" fill="var(--silver-dark)" />
        <circle cx="460" cy="340" r="6" fill="var(--brand-red)" opacity="0.7" />
        <circle cx="650" cy="420" r="4" fill="var(--silver-dark)" />
        <circle cx="740" cy="280" r="4" fill="var(--silver-dark)" />
        <circle cx="80" cy="340" r="4" fill="var(--silver-dark)" />
        <circle cx="220" cy="500" r="5" fill="var(--brand-orange)" opacity="0.6" />
        <circle cx="440" cy="560" r="4" fill="var(--silver-dark)" />
      </g>
    </svg>
  );
}

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <NetworkGraphic />
      <div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
    </div>
  );
}
