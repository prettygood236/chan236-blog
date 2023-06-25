'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/outline';

type Theme = 'system' | 'dark' | 'light';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <div className='inline-flex items-center'>
      <SunIcon className='w-4 h-4 mr-2' />
      <select name='themeSwitch' value={theme} onChange={onChangeTheme}>
        <option value='system'>System</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
