import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'white' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  // Geometric abstract strength emblem: Dual interlocking geometric chevrons/pillars forming a stylized modern 'T' & delta forge
  const renderIcon = (iconSizeClass: string) => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizeClass} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-label="Titans Gym Abstract Emblem"
    >
      {/* Dark charcoal background pill/shield for solid contrast if needed */}
      <rect width="40" height="40" rx="8" fill="#101314" />
      {/* Amber Geometric Peak / Chevron */}
      <path
        d="M20 7L32 17H25.5L20 12.5L14.5 17H8L20 7Z"
        fill="#E8B84B"
      />
      {/* Primary Red Dynamic Core / Pillar */}
      <path
        d="M16 19H24V32H16V19Z"
        fill="#C4262E"
      />
      {/* Modern angled accent cuts */}
      <path
        d="M10 21L14 19V29L10 32V21Z"
        fill="#E8B84B"
        fillOpacity="0.8"
      />
      <path
        d="M30 21L26 19V29L30 32V21Z"
        fill="#E8B84B"
        fillOpacity="0.8"
      />
    </svg>
  );

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-xl tracking-wide',
    md: 'text-2xl tracking-wider',
    lg: 'text-4xl tracking-widest',
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.35em]',
  };

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderIcon(iconSizes[size])}
      </div>
    );
  }

  const isWhite = variant === 'white';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      {renderIcon(iconSizes[size])}
      <div className="flex flex-col leading-none justify-center">
        <span
          className={`font-heading font-normal ${textSizes[size]} leading-none ${
            isWhite ? 'text-white' : 'text-[#101314]'
          }`}
        >
          TITANS <span className="text-[#C4262E]">GYM</span>
        </span>
        <span
          className={`font-sans font-bold uppercase ${subTextSizes[size]} mt-0.5 ${
            isWhite ? 'text-[#E8B84B]' : 'text-[#5C6366]'
          }`}
        >
          CUTTACK
        </span>
      </div>
    </div>
  );
};
