import React from 'react';
import { Sparkles, Flame, Clock, ArrowRight, Wheat, ShieldCheck, HeartHandshake, MapPin, Award } from 'lucide-react';
import { BakeryLogo } from './BakeryLogo';
import { motion } from 'motion/react';

interface HeroProps {
  onOrderNow: () => void;
  onOpenBoxBuilder: () => void;
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderNow,
  onOpenBoxBuilder,
  onOpenSchedule,
}) => {
  return (
    <section id="hero-section" className="relative pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient lighting orbs with blur effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[44rem] h-[28rem] bg-[#E8C5A0]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-10 w-80 h-80 bg-[#E27D60]/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-80 h-80 bg-[#C89666]/12 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================
            TOP CENTERED "ML" LUXURY EMBLEM & BRAND DETAILS
            ======================================================== */}
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* 1. Focal Centered "ML" Luxury Emblem */}
          <div className="flex justify-center items-center">
            <div className="relative group cursor-pointer" onClick={onOrderNow} title="Maison Levain Paris">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#E5BE7E]/40 via-[#C59A58]/30 to-[#E27D60]/20 rounded-full blur-2xl group-hover:opacity-100 opacity-65 transition-opacity" />
              <BakeryLogo 
                variant="crest" 
                size="hero" 
                className="relative z-10" 
              />
            </div>
          </div>

          {/* 2. Live Oven Batch Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#8D4B26] shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E27D60] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C15C3D]"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#C15C3D]" />
              Deck Hearth #02: Fresh Country Batards cooling now (10:15 AM Batch)
            </span>
          </div>

          {/* 3. Name & Heritage Sub-descriptor */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C59A58]" />
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-[#8C7A68] font-bold font-sans">
                Paris • Fournil Artisanal • Depuis 1912
              </p>
              <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C59A58]" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#241911] tracking-tight leading-[1.08]">
              Maison Levain
            </h1>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-[#5E5244] max-w-2xl mx-auto font-normal leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Handcrafting slow wild-fermented sourdoughs, French viennoiserie, and bespoke pastries with ancient stoneground bio flours, unhurried 36-hour fermentation, and mountain spring water.
            </motion.p>
          </div>

          {/* 4. Bakery Details Badges & Quick Info in Perfect Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-1 text-left">
            <div className="p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider">The Fournil</p>
                <p className="text-xs font-bold text-[#341C02] truncate">42 Bd Saint-Honoré</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider">Daily Drops</p>
                <p className="text-xs font-bold text-[#341C02] truncate">8:00 AM & 10:15 AM</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Wheat className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider">Living Levain</p>
                <p className="text-xs font-bold text-[#341C02] truncate">36h Cold Proof</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl glass-card border border-[#E5DACD] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#8C7A68] tracking-wider">Heritage Guild</p>
                <p className="text-xs font-bold text-[#341C02] truncate">100% Bio Organic</p>
              </div>
            </div>
          </div>

          {/* 5. Action CTAs Centered */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              id="hero-order-online-btn"
              onClick={onOrderNow}
              className="bg-[#241911] hover:bg-[#3D2C1F] text-[#FAF7F2] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95"
            >
              <span>Order for Pickup or Courier</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-box-builder-btn"
              onClick={onOpenBoxBuilder}
              className="glass-card hover:bg-white text-[#341C02] px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border border-[#DFD3C3] flex items-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#C17D44]" />
              <span>Curate Pastry Box</span>
            </button>

            <button
              id="hero-schedule-btn"
              onClick={onOpenSchedule}
              className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-[#786C5E] hover:text-[#341C02] hover:bg-[#F2ECE1] transition-colors flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4 text-[#A8794E]" />
              <span>Today's Oven Schedule</span>
            </button>
          </div>

        </motion.div>

        {/* ========================================================
            HERO VISUAL SHOWCASE: FRESH FROM THE OVEN HERO BANNER
            ======================================================== */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5DACD] group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Belgium_2013_%2811620905224%29.jpg/1280px-Belgium_2013_%2811620905224%29.jpg"
              alt="Artisanal French sourdough loaves and croissants in rustic bakery"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Rich gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/90 via-[#1C140E]/30 to-transparent" />
          </div>

          {/* Floating Hero Content Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-[#F4D19B] border border-white/10">
                <Wheat className="w-3.5 h-3.5" />
                <span>Stoneground Heritage Grain Collection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                Slow-Fermented at 12°C for Deep Umami & Golden Blistered Crusts
              </h2>
              <motion.p 
                className="text-xs sm:text-sm text-[#E2D5C5] leading-relaxed hidden sm:block"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Each loaf undergoes a gentle 36-hour wild levain fermentation, yielding an open custard-like crumb and digestible, mineral-rich nourishment.
              </motion.p>
            </div>

            {/* Micro Badge for Proofing */}
            <div className="glass-panel rounded-2xl p-4 border border-white/20 text-white shrink-0 self-stretch md:self-auto flex items-center justify-between md:flex-col md:items-start gap-4" style={{ backgroundColor: '#000000' }}>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#F4D19B]">Starter Strain</p>
                <p className="text-sm font-bold font-serif">112-Year Mother Culture</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#E2D5C5]">
                <ShieldCheck className="w-4 h-4 text-[#82AA57]" />
                <span>Zero Commercial Yeast</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Artisanal Pillars */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="glass-card p-6 rounded-3xl border border-[#E5DACD] space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26]">
              <Wheat className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#341C02]">100% Ancient Stoneground Flour</h3>
            <p className="text-xs text-[#786C5E] leading-relaxed">
              We source unbleached ancient grains (Rouge de Bordeaux, Einkorn, Spelt) milled gently on stone burrs to retain natural wheat germ and antioxidants.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-[#E5DACD] space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26]">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#341C02]">Direct Stone Hearth Baking</h3>
            <p className="text-xs text-[#786C5E] leading-relaxed">
              Baked directly on heavy volcanic refractory stone decks injected with dense steam for dramatic oven spring and caramelised blistered blisters.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-[#E5DACD] space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#341C02]">Pure Wild Fermentation</h3>
            <p className="text-xs text-[#786C5E] leading-relaxed">
              Never rushed. Never altered with synthetic enzymes or additives. Just natural wild airborne yeasts and beneficial lactic acid cultures.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
