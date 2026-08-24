import React from 'react';

interface BakeryLogoProps {
  variant?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  theme?: string;
  customLogoUrl?: string;
  logoOffsetX?: number;
  logoOffsetY?: number;
  logoZoom?: number;
}

export const BakeryLogo: React.FC<BakeryLogoProps> = ({
  size = 'md',
  className = '',
  customLogoUrl = '/logo.jpeg',
  logoZoom = 1.70,
  logoOffsetX = 0,
  logoOffsetY = 4,
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
    hero: 'w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56',
  };

  const pxMap = {
    xs: 28,
    sm: 40,
    md: 56,
    lg: 96,
    xl: 144,
    hero: 224,
  };

  const dimensionClass = sizeMap[size] || sizeMap.md;
  
  // Calculate proportional offset. The aligner was used on the hero size (224px reference).
  // A 4px offset on a 224px circle needs to be proportionally smaller on a 40px circle.
  const scaleFactor = (pxMap[size] || 56) / 224;

  return (
    <div className={`rounded-full overflow-hidden shrink-0 bg-gray-100 ${dimensionClass} ${className} flex items-center justify-center relative`}>
      <img 
        referrerPolicy="no-referrer"
        src={customLogoUrl} 
        alt="Logo"
        className="w-full h-full object-cover"
        style={{
          transform: `scale(${logoZoom}) translate(${logoOffsetX * scaleFactor}px, ${logoOffsetY * scaleFactor}px)`,
          transformOrigin: 'center'
        }}
      />
    </div>
  );
};
