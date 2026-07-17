'use client';
import { useState } from 'react';

export default function PhoneInput() {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ''); // get all digits
    
    // If empty or user is trying to delete the prefix
    if (input.length === 0) {
      setValue('');
      return;
    }

    // Always start with 7 for Russian region
    if (input.startsWith('8')) {
        input = '7' + input.substring(1);
    }
    if (!input.startsWith('7')) {
        input = '7' + input;
    }

    // We only care about digits after the '7'
    const core = input.substring(1);

    let formatted = '+7 (';
    if (core.length > 0) {
      formatted += core.substring(0, 3);
    }
    if (core.length >= 4) {
      formatted += ') ' + core.substring(3, 6);
    }
    if (core.length >= 7) {
      formatted += '-' + core.substring(6, 8);
    }
    if (core.length >= 9) {
      formatted += '-' + core.substring(8, 10);
    }

    setValue(formatted);
  };

  const handleFocus = () => {
    if (value === '') {
        setValue('+7 (');
    }
  }

  return (
    <input 
      type="tel" 
      placeholder="+7 (___) ___-__-__" 
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none', width: '100%' }} 
    />
  );
}
