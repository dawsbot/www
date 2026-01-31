import React from 'react';
import { useTheme } from './ThemeContext';
import { themes, themeKeys } from './themes';

const ThemeSwitcher = () => {
  const { themeKey, switchTheme, theme } = useTheme();

  return (
    <div
      style={{
        position: 'fixed',
        top: '14px',
        right: '18px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <span
        style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 700,
          color: theme.navText,
          opacity: 0.6,
          fontFamily: theme.bodyFont,
          userSelect: 'none',
        }}
      >
        Style
      </span>
      <select
        value={themeKey}
        onChange={e => switchTheme(e.target.value)}
        aria-label="Choose page style"
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: theme.navText,
          border: `1px solid rgba(255,255,255,0.15)`,
          borderRadius:
            themeKey === 'swiss-modernist'
              ? '0px'
              : themeKey === 'retro-arcade'
              ? '0px'
              : '8px',
          padding: '9px 36px 9px 14px',
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: theme.bodyFont,
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.25s ease',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
        }}
      >
        {themeKeys.map(key => (
          <option
            key={key}
            value={key}
            style={{
              backgroundColor: '#1a1a2e',
              color: '#ffffff',
              padding: '8px',
            }}
          >
            {themes[key].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
