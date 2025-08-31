export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      fill="none"
      className="w-40 h-12"
    >
      {/* Gradient Play Button */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9C6CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF4D97" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polygon points="10,10 10,50 45,30" fill="url(#grad1)" />

      {/* Text with light/dark mode */}
      <text
        x="60"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        className="fill-black dark:fill-white macondo-bold"
      >
        Clipfy
      </text>
    </svg>
  );
}
