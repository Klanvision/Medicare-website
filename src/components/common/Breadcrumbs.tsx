import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  customCrumbs?: { label: string; href?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customCrumbs }) => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const pathSegments = location.pathname.split('/').filter(Boolean);

  const formatSegment = (segment: string) => {
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const crumbs = customCrumbs || [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      return {
        label: formatSegment(segment),
        href: index === pathSegments.length - 1 ? undefined : href,
      };
    }),
  ];

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500 flex items-center gap-1.5 flex-wrap">
      {crumbs.map((crumb, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
          {idx === 0 ? (
            <Link to="/" className="hover:text-teal-600 font-medium flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          ) : crumb.href ? (
            <Link to={crumb.href} className="hover:text-teal-600 font-medium truncate max-w-[150px] sm:max-w-none">
              {crumb.label}
            </Link>
          ) : (
            <span className="font-bold text-navy-900 truncate max-w-[200px] sm:max-w-none">
              {crumb.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
