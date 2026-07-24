"use client";

import React from 'react';

interface CopyAddressButtonProps {
  address: string;
}

export default function CopyAddressButton({ address }: CopyAddressButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(address);
    e.currentTarget.textContent = 'Адрес скопирован';
    setTimeout(() => { 
      if (e.currentTarget) e.currentTarget.textContent = 'Скопировать адрес'; 
    }, 2000);
  };

  return (
    <button 
      onClick={handleClick}
      className="btn btn-outline" 
      style={{ padding: '12px 24px', fontSize: '14px', background: 'transparent', color: 'var(--color-text-secondary)', cursor: 'pointer' }}
    >
      Скопировать адрес
    </button>
  );
}
