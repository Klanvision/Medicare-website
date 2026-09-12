import React from 'react';

export interface PillarItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const BrandPillars: React.FC<{ variant?: 'light' | 'dark'; className?: string }> = ({
  variant = 'dark',
  className = '',
}) => {
  const pillars = [
    {
      id: 'compassion',
      name: 'COMPASSION',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <path
            d="M20 32C20 32 6 22 6 13C6 8.5 9.5 5 14 5C16.8 5 19 6.5 20 8.5C21 6.5 23.2 5 26 5C30.5 5 34 8.5 34 13C34 22 20 32 20 32Z"
            stroke="url(#pillarTeal)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="14" r="2.5" fill="#D4AF37" />
          <path d="M16 22C16 19.5 17.8 17.5 20 17.5C22.2 17.5 24 19.5 24 22" stroke="url(#pillarTeal)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'trust',
      name: 'TRUST',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <path
            d="M20 5L32 10V20C32 27.5 26.8 33.7 20 36C13.2 33.7 8 27.5 8 20V10L20 5Z"
            stroke="url(#pillarTeal)"
            strokeWidth="2"
            fill="none"
          />
          <path d="M20 12V24M14 18H26" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'care',
      name: 'CARE',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="10" r="2.5" fill="#D4AF37" />
          <path
            d="M20 16C16 20 10 21 7 28C14 28 17 25 20 20C23 25 26 28 33 28C30 21 24 20 20 16Z"
            stroke="url(#pillarTeal)"
            strokeWidth="2"
            fill="none"
          />
          <path d="M20 20V32" stroke="url(#pillarTeal)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'innovation',
      name: 'INNOVATION',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="20" r="14" stroke="url(#pillarTeal)" strokeWidth="1.5" strokeDasharray="4 2" />
          <ellipse cx="20" cy="20" rx="14" ry="6" stroke="url(#pillarTeal)" strokeWidth="1.5" transform="rotate(-30 20 20)" />
          <ellipse cx="20" cy="20" rx="14" ry="6" stroke="url(#pillarTeal)" strokeWidth="1.5" transform="rotate(30 20 20)" />
          <circle cx="20" cy="20" r="3.5" fill="#D4AF37" />
        </svg>
      ),
    },
    {
      id: 'commitment',
      name: 'COMMITMENT',
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <path d="M8 18L20 8L32 18V32H8V18Z" stroke="url(#pillarTeal)" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path
            d="M20 27C20 27 15 23 15 20C15 18.5 16.2 17.5 17.5 17.5C18.8 17.5 19.6 18.2 20 19C20.4 18.2 21.2 17.5 22.5 17.5C23.8 17.5 25 18.5 25 20C25 23 20 27 20 27Z"
            fill="#D4AF37"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="pillarTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/20">
        {pillars.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center p-3 text-center group">
            <div className="p-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:border-gold-500/50">
              {item.icon}
            </div>
            <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${variant === 'dark' ? 'text-navy-900' : 'text-gray-200'}`}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
