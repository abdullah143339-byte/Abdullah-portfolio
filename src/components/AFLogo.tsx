import "./styles/AFLogo.css";

const AFLogo = ({ size = 32 }: { size?: number }) => {
  return (
    <span className="af-logo" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="url(#afGrad)" />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="white"
          fontSize="42"
          fontWeight="800"
          fontFamily="'Geist', sans-serif"
          letterSpacing="-2"
        >
          AF
        </text>
        <defs>
          <linearGradient id="afGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#c481ff" />
            <stop offset="100%" stopColor="#7b5ea7" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export default AFLogo;
