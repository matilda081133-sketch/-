export default function Logo({ width = 160, height = 48, fill = "var(--color-deep-blue)" }: { width?: number, height?: number, fill?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8L12 16V32L24 40L36 32V16L24 8Z" stroke={fill} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16V32" stroke={fill} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 20L24 16L30 20" stroke={fill} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50" y="32" fontFamily="var(--font-serif)" fontSize="26" fontWeight="bold" fill={fill} letterSpacing="-0.02em">Де-Юре</text>
      <text x="50" y="44" fontFamily="var(--font-sans)" fontSize="10" fontWeight="600" fill={fill} opacity="0.6" letterSpacing="0.1em">ЮРИДИЧЕСКАЯ КОМПАНИЯ</text>
    </svg>
  );
}
