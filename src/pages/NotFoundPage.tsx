import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] bg-gradient-to-b from-[#F4F9FD] via-white to-[#F4F9FD] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Sky Blue Icon Badge */}
        <div className="inline-flex items-center justify-center p-4 bg-sky-100/70 text-[#00529B] rounded-full ring-8 ring-sky-50/50 mb-2">
          <AlertCircle className="w-12 h-12 stroke-[1.75]" />
        </div>

        <div>
          <span className="inline-block px-3.5 py-1 text-xs font-semibold text-[#00529B] bg-white border border-sky-200 rounded-full shadow-xs mb-3">
            404 Page Not Found
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#00529B] tracking-tight">
            Page Under Construction
          </h1>
        </div>

        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The route you requested is either unavailable or part of upcoming Phase 2 business modules.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#00529B] bg-white border border-sky-200 rounded-xl shadow-xs hover:bg-sky-50 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </Link>

          <Link
            to="/showcase"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00529B] hover:bg-[#00407a] rounded-xl shadow-md transition-all duration-200"
          >
            <Compass className="w-4 h-4" />
            View Component Showcase
          </Link>
        </div>
      </div>
    </div>
  );
};

