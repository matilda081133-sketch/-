import React from 'react';

interface LogoProps {
  color?: string;
  width?: string;
  className?: string;
}

export default function Logo({ color = 'var(--color-primary)', width = '220px', className = '' }: LogoProps) {
  return (
    <svg 
      width={width} 
      viewBox="0 0 200 65" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block' }}
    >
      <path 
        d="M85,12 L50,12 Q20,12 10,25 V45 Q20,60 50,62" 
        stroke={color} 
        strokeWidth="3.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <text 
        x="42" 
        y="45" 
        fontFamily="var(--font-serif)" 
        fontSize="34" 
        fontWeight="bold" 
        fill={color}
      >
        Де-Юре
      </text>
      <text 
        x="44" 
        y="58" 
        fontFamily="var(--font-sans)" 
        fontSize="9" 
        fill={color} 
        opacity="0.8" 
        letterSpacing="0.08em" 
        style={{ textTransform: 'uppercase' }}
      >
        Юридическая компания
      </text>
    </svg>
  );
}
