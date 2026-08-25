import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# We'll just replace the entire return statement
return_start = content.find('return (')
if return_start == -1:
    print("Could not find return")
    sys.exit(1)

new_return = """return (
    <section id="hero-section" className="relative min-h-[calc(100vh-120px)] w-full bg-transparent flex flex-col justify-between pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      
      {/* Central Stack */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-10 w-full max-w-[900px] mx-auto text-center shrink-0">
        
        {/* Top Pill Status - Now dynamically updates with real time */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[#C25835] shadow-[0_0_8px_rgba(194,88,53,0.5)] animate-pulse"></div>
          <Flame className="w-4 h-4 text-[#C25835]" />
          <span className="text-[11px] sm:text-xs font-semibold text-[#8D4B26]">
            {timeText}
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group cursor-pointer"
          onClick={onOrderNow}
        >
          <BakeryLogo size="hero" className="relative z-10" />
        </motion.div>

        {/* Main Title, Subheader, & Description */}
        <motion.div 
          className="space-y-6 max-w-2xl mx-auto px-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight mt-4">
            Maison Levain
          </h1>
          
          {/* Subheader lines */}
          <div className="flex items-center justify-center w-full max-w-xl mx-auto gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D0C5B8]"></div>
            <span className="text-[9px] text-center uppercase tracking-[0.25em] font-semibold text-[#8C7A68]">
              Paris &bull; Fournil Artisanal &bull; Depuis 1912
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D0C5B8]"></div>
          </div>

          <p className="text-[15px] leading-[25px] text-[#5E5244] max-w-[620px] mx-auto">
            Handcrafting slow wild-fermented sourdoughs, French viennoiserie, and 
            bespoke pastries with ancient stoneground bio flours, unhurried 36-hour 
            fermentation, and mountain spring water.
          </p>
        </motion.div>
      </div>

      {/* Info Cards Row */}
      <motion.div 
        className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">The Fournil</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">42 Bd Saint-Hono...</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Daily Drops</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">8:00 AM & 10:15 A...</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <Wheat className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Living Levain</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">36h Cold Proof</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Heritage Guild</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">100% Bio Organic</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
"""

new_content = content[:return_start] + new_return

with open('src/components/Hero.tsx', 'w') as f:
    f.write(new_content)

print("Hero return statement replaced.")
