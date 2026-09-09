import React, { useState, useEffect } from 'react';
import { Flame, MapPin, Clock, Wheat, Award, AlertCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BakeryLogo } from './BakeryLogo';

interface HeroProps {
  onOrderNow: () => void;
  onOpenBoxBuilder: () => void;
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  const [timeText, setTimeText] = useState('Checking ovens...');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes();
      
      let status = '';
      if (hours < 8) status = "Preheating stone deck ovens for morning batch...";
      else if (hours === 8 && mins < 30) status = "Morning Viennoiserie fresh out of the oven!";
      else if (hours < 10) status = "Proofing Country Batards in the retarder...";
      else if (hours === 10 && mins < 30) status = "Country Batards baking on the stone hearth...";
      else if (hours < 11 || (hours === 11 && mins < 30)) status = "Country Batards cooling on oak racks.";
      else if (hours === 11 && mins >= 30) status = "Cannelés & Kouign-Amann baking now in copper molds!";
      else if (hours === 12 && mins < 15) status = "Prepping savory galettes for lunch hearth...";
      else if (hours === 12 && mins >= 15) status = "Lunch hearth: Savory focaccia fresh from the oven!";
      else if (hours < 16) status = "Afternoon bakes: Pastries and brioche available.";
      else status = "Kitchen is resting. Wild yeast levain fermenting for tomorrow.";
      
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTimeText(`Live (${timeStr}) — ${status}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section layout id="hero-section" className="relative min-h-[calc(100vh-120px)] w-full bg-transparent flex flex-col justify-between pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      
      {/* Central Stack */}
      <motion.div layout className="flex-1 flex flex-col items-center py-10 w-full max-w-[900px] mx-auto text-center shrink-0 mt-0">
        
        {/* Top Spacer containing Pill */}
        <div className="flex-1 flex items-center justify-center w-full">
          {/* Top Pill Status - Now dynamically updates with real time */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-sm scale-[1.15] mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#C25835] shadow-[0_0_8px_rgba(194,88,53,0.5)] animate-pulse"></div>
            <Flame className="w-4 h-4 text-[#C25835]" />
            <span className="text-[11px] sm:text-xs font-semibold text-[#8D4B26]">
              {timeText}
            </span>
          </motion.div>
        </div>

        {/* Center Logo & Title Block */}
        <div className="flex flex-col items-center shrink-0">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group cursor-pointer mb-8"
            onClick={onOrderNow}
          >
            <BakeryLogo size="hero" className="relative z-10" />
          </motion.div>

          {/* Main Title, Subheader, & Description */}
          <motion.div 
            className="flex flex-col items-center max-w-2xl mx-auto px-4 w-full -mt-[20px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-[70px] font-serif font-bold text-[#341c02] leading-[60px] tracking-tight -mt-[6px]">
              Maison Levain
            </h1>
            
            {/* Subheader lines */}
            <div className="flex items-center justify-center w-full max-w-xl mx-auto gap-4 mt-[11px] mb-[25px]">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D0C5B8]"></div>
              <span className="text-[9px] text-center uppercase tracking-[0.25em] font-semibold text-[#8C7A68]">
                Paris &bull; Fournil Artisanal &bull; Depuis 1912
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D0C5B8]"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer to maintain vertical center balance */}
        <div className="flex-1 w-full"></div>
      </motion.div>

      {/* Top Important Info Cards Row */}
      <div className="w-full z-20 relative -mt-8 sm:-mt-10 mb-2">
        <motion.div 
          layout
          transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
          className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 mx-auto max-w-5xl"
        >
          <motion.div 
            layout
            style={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'notice' ? null : 'notice')}
            className={`h-[60px] bg-[#341C02] backdrop-blur-md px-3 border flex flex-row items-center cursor-pointer overflow-hidden transition-all duration-500 relative ${
              expandedCard === 'notice' 
                ? 'border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] z-50' 
                : 'border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] z-10 hover:border-white/10 hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)]'
            }`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="w-[110px] text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Important Notice</p>
                <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Pre-orders close 3PM</p>
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                width: expandedCard === 'notice' ? 140 : 0, 
                opacity: expandedCard === 'notice' ? 1 : 0,
                marginLeft: expandedCard === 'notice' ? 12 : 0 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              className="shrink-0 overflow-hidden z-10 flex items-center"
            >
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: expandedCard === 'notice' ? 1 : 0, x: expandedCard === 'notice' ? 0 : -10 }} transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }} className="w-[140px] min-w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3">
                Walk-ins welcome from 8:00 AM until sold out.
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            layout
            style={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'special' ? null : 'special')}
            className={`h-[60px] bg-[#341C02] backdrop-blur-md px-3 border flex flex-row items-center cursor-pointer overflow-hidden transition-all duration-500 relative ${
              expandedCard === 'special' 
                ? 'border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)] z-50' 
                : 'border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.12)] z-10 hover:border-white/10 hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)]'
            }`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="w-[110px] text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Today's Special</p>
                <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Garlic & Comté Batard</p>
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                width: expandedCard === 'special' ? 140 : 0, 
                opacity: expandedCard === 'special' ? 1 : 0,
                marginLeft: expandedCard === 'special' ? 12 : 0 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              className="shrink-0 overflow-hidden z-10 flex items-center"
            >
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: expandedCard === 'special' ? 1 : 0, x: expandedCard === 'special' ? 0 : -10 }} transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }} className="w-[140px] min-w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3">
                Limited quantity available at 10:15 AM today.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Info Cards Row */}
      <div className="w-full z-10 relative">
        <motion.div 
          layout
          transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
          className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full pt-1 pb-4 px-2 mx-auto max-w-5xl"
        >
          <motion.div 
            layout
            style={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'fournil' ? null : 'fournil')}
            className={`h-[60px] bg-white/95 backdrop-blur-md px-3 border flex flex-row items-center cursor-pointer overflow-hidden transition-all duration-500 relative ${
              expandedCard === 'fournil' 
                ? 'border-[#D4C5B3] shadow-[0_8px_30px_rgba(141,75,38,0.12)] z-50' 
                : 'border-[#E8DFD5] shadow-[0_4px_20px_rgba(141,75,38,0.04)] z-10 hover:border-[#D4C5B3] hover:shadow-[0_8px_25px_rgba(141,75,38,0.08)]'
            }`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="w-[105px] text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">The Fournil</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">42 Bd Saint-Hono...</p>
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                width: expandedCard === 'fournil' ? 140 : 0, 
                opacity: expandedCard === 'fournil' ? 1 : 0,
                marginLeft: expandedCard === 'fournil' ? 12 : 0 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              className="shrink-0 overflow-hidden z-10 flex items-center"
            >
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: expandedCard === 'fournil' ? 1 : 0, x: expandedCard === 'fournil' ? 0 : -10 }} transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }} className="w-[140px] min-w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Open daily 7 AM - 6 PM. Come see our open kitchen.
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            layout
            style={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'drops' ? null : 'drops')}
            className={`h-[60px] bg-white/95 backdrop-blur-md px-3 border flex flex-row items-center cursor-pointer overflow-hidden transition-all duration-500 relative ${
              expandedCard === 'drops' 
                ? 'border-[#D4C5B3] shadow-[0_8px_30px_rgba(141,75,38,0.12)] z-50' 
                : 'border-[#E8DFD5] shadow-[0_4px_20px_rgba(141,75,38,0.04)] z-10 hover:border-[#D4C5B3] hover:shadow-[0_8px_25px_rgba(141,75,38,0.08)]'
            }`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="w-[105px] text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Daily Drops</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">8:00 & 10:15 AM</p>
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                width: expandedCard === 'drops' ? 140 : 0, 
                opacity: expandedCard === 'drops' ? 1 : 0,
                marginLeft: expandedCard === 'drops' ? 12 : 0 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              className="shrink-0 overflow-hidden z-10 flex items-center"
            >
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: expandedCard === 'drops' ? 1 : 0, x: expandedCard === 'drops' ? 0 : -10 }} transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }} className="w-[140px] min-w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Viennoiserie at 8:00 AM, Breads at 10:15 AM.
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            layout
            style={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'levain' ? null : 'levain')}
            className={`h-[60px] bg-white/95 backdrop-blur-md px-3 border flex flex-row items-center cursor-pointer overflow-hidden transition-all duration-500 relative ${
              expandedCard === 'levain' 
                ? 'border-[#D4C5B3] shadow-[0_8px_30px_rgba(141,75,38,0.12)] z-50' 
                : 'border-[#E8DFD5] shadow-[0_4px_20px_rgba(141,75,38,0.04)] z-10 hover:border-[#D4C5B3] hover:shadow-[0_8px_25px_rgba(141,75,38,0.08)]'
            }`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Wheat className="w-4 h-4" />
              </div>
              <div className="w-[105px] text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Living Levain</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">36h Cold Proof</p>
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                width: expandedCard === 'levain' ? 140 : 0, 
                opacity: expandedCard === 'levain' ? 1 : 0,
                marginLeft: expandedCard === 'levain' ? 12 : 0 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              className="shrink-0 overflow-hidden z-10 flex items-center"
            >
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: expandedCard === 'levain' ? 1 : 0, x: expandedCard === 'levain' ? 0 : -10 }} transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }} className="w-[140px] min-w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Slow-fermented for rich, complex flavors.
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            layout
            style={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'guild' ? null : 'guild')}
            className={`h-[60px] bg-white/95 backdrop-blur-md px-3 border flex flex-row items-center cursor-pointer overflow-hidden transition-all duration-500 relative ${
              expandedCard === 'guild' 
                ? 'border-[#D4C5B3] shadow-[0_8px_30px_rgba(141,75,38,0.12)] z-50' 
                : 'border-[#E8DFD5] shadow-[0_4px_20px_rgba(141,75,38,0.04)] z-10 hover:border-[#D4C5B3] hover:shadow-[0_8px_25px_rgba(141,75,38,0.08)]'
            }`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="w-[105px] text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Heritage Guild</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">100% Bio Organic</p>
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ 
                width: expandedCard === 'guild' ? 140 : 0, 
                opacity: expandedCard === 'guild' ? 1 : 0,
                marginLeft: expandedCard === 'guild' ? 12 : 0 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
              className="shrink-0 overflow-hidden z-10 flex items-center"
            >
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: expandedCard === 'guild' ? 1 : 0, x: expandedCard === 'guild' ? 0 : -10 }} transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }} className="w-[140px] min-w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Sourced from local regenerative farms.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
