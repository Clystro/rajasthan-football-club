import React from "react";

interface ClubCrestProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const ClubCrest: React.FC<ClubCrestProps> = ({
  className = "",
  size = 48,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 filter drop-shadow-md"
      >
        <defs>
          <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#F2A93B" />
            <stop offset="100%" stopColor="#D48815" />
          </linearGradient>
          <linearGradient id="crestMaroon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9A2737" />
            <stop offset="100%" stopColor="#53121B" />
          </linearGradient>
          <linearGradient id="crestNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#122A54" />
            <stop offset="100%" stopColor="#061020" />
          </linearGradient>
          <radialGradient id="crestCenterGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#F2A93B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0B1E3C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Shield Border with Gold Gradient */}
        <path
          d="M60 4L108 18V68C108 94 86 116 60 126C34 116 12 94 12 68V18L60 4Z"
          fill="url(#crestNavy)"
          stroke="url(#crestGold)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Shield Accent Line */}
        <path
          d="M60 11L101 23.5V67C101 89.5 82 108.5 60 118C38 108.5 19 89.5 19 67V23.5L60 11Z"
          fill="none"
          stroke="url(#crestGold)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />

        {/* Maroon Upper Arc */}
        <path
          d="M21 25.5L60 14L99 25.5V42C99 42 79 38 60 38C41 38 21 42 21 42V25.5Z"
          fill="url(#crestMaroon)"
        />

        {/* Royal Crown Motif on Top Banner */}
        <path
          d="M48 34L53 26L60 31L67 26L72 34H48Z"
          fill="url(#crestGold)"
        />
        <circle cx="53" cy="24" r="1.5" fill="#FFE082" />
        <circle cx="60" cy="22" r="2" fill="#FFE082" />
        <circle cx="67" cy="24" r="1.5" fill="#FFE082" />

        {/* Center Radial Glow */}
        <circle cx="60" cy="72" r="32" fill="url(#crestCenterGlow)" />

        {/* Football Core Vector */}
        <circle
          cx="60"
          cy="72"
          r="23"
          fill="#FFFFFF"
          stroke="url(#crestGold)"
          strokeWidth="2"
        />
        {/* Pentagons & Football Pattern */}
        <polygon
          points="60,63 67,68 64,76 56,76 53,68"
          fill="#0B1E3C"
        />
        <line x1="60" y1="63" x2="60" y2="49" stroke="#0B1E3C" strokeWidth="1.5" />
        <line x1="67" y1="68" x2="79" y2="63" stroke="#0B1E3C" strokeWidth="1.5" />
        <line x1="64" y1="76" x2="73" y2="87" stroke="#0B1E3C" strokeWidth="1.5" />
        <line x1="56" y1="76" x2="47" y2="87" stroke="#0B1E3C" strokeWidth="1.5" />
        <line x1="53" y1="68" x2="41" y2="63" stroke="#0B1E3C" strokeWidth="1.5" />

        {/* RFC Lettering Monogram */}
        <text
          x="60"
          y="108"
          fill="url(#crestGold)"
          fontSize="14"
          fontWeight="900"
          fontFamily="var(--font-oswald), sans-serif"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          RFC
        </text>

        {/* Est. 2018 Ribbon */}
        <text
          x="60"
          y="118"
          fill="#94A3B8"
          fontSize="6"
          fontWeight="700"
          fontFamily="var(--font-inter), sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          EST. 2018
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl sm:text-2xl font-bold tracking-wider leading-none text-white uppercase">
            Rajasthan <span className="text-gold">FC</span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-royal-slate uppercase font-sans">
            The Desert Royals
          </span>
        </div>
      )}
    </div>
  );
};
