export function HeroFlow() {
  return (
    <div className="hero-flow" aria-hidden="true">
      <svg viewBox="0 0 1200 520" role="presentation">
        <path
          className="hero-flow-line hero-flow-line-a"
          pathLength="1"
          d="M126 260C244 84 401 84 600 260C799 436 956 436 1074 260C956 84 799 84 600 260C401 436 244 436 126 260Z"
        />
        <path
          className="hero-flow-line hero-flow-line-b"
          pathLength="1"
          d="M158 260C280 144 416 144 600 260C784 376 920 376 1042 260C920 144 784 144 600 260C416 376 280 376 158 260Z"
        />
        <path
          className="hero-flow-line hero-flow-line-c"
          pathLength="1"
          d="M110 260C226 194 362 193 600 260C838 327 974 326 1090 260"
        />
      </svg>
    </div>
  );
}
