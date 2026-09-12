import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '@/assets/medicare-logo.svg';

interface LogoProps {
  variant?: 'light' | 'dark' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  clickable?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  clickable = true,
  className = '',
}) => {
  const isLightVariant = variant === 'light';

  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
    xl: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const imageElement = (
    <div className={`inline-flex items-center gap-2.5 shrink-0 select-none ${className}`}>
      {/* Clean Hospital Logo Emblem */}
      <div className={`${sizeClasses[size]} flex items-center justify-center shrink-0`}>
        <img
          src={logoSvg}
          alt="MEDICARE Emblem"
          className="w-full h-full object-contain filter drop-shadow-xs"
          loading="eager"
        />
      </div>

      {/* Crisp Brand Name Typography */}
      <div className="flex flex-col text-left justify-center leading-none">
        <div className="flex items-center gap-1">
          <span className={`text-base sm:text-lg font-black tracking-tight uppercase ${isLightVariant ? 'text-white' : 'text-slate-900'}`}>
            MEDI<span className="text-sky-600">CARE</span>
          </span>
        </div>
        {showTagline && (
          <span className={`text-[8px] sm:text-[9px] font-bold tracking-tight mt-0.5 uppercase ${isLightVariant ? 'text-sky-200' : 'text-slate-500'}`}>
            Trusted Healthcare. Advanced Care.
          </span>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="inline-flex shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl">
        {imageElement}
      </Link>
    );
  }

  return imageElement;
};
