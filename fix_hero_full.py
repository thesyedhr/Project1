import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# We need to replace everything from `{/* Central Stack */}` down to `{/* Top Important Info Cards Row */}`.

start_marker = "{/* Central Stack */}"
end_marker = "{/* Top Important Info Cards Row */}"

new_stack = """{/* Central Stack */}
      <motion.div layout className="flex-1 flex flex-col items-center py-10 w-full max-w-[900px] mx-auto text-center shrink-0 mt-0">
        
        {/* Top Spacer containing Pill */}
        <div className="flex-1 flex items-center justify-center w-full">
          {/* Top Pill Status - Now dynamically updates with real time */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-sm scale-[1.15]"
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
            <h1 className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight -mt-[6px]">
              Maison Levain
            </h1>
            
            {/* Subheader lines */}
            <div className="flex items-center justify-center w-full max-w-xl mx-auto gap-4 -mt-[6px] mb-[25px]">
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

      """

# regex replace
pattern = re.compile(re.escape(start_marker) + r'.*?' + re.escape(end_marker), re.DOTALL)
content = pattern.sub(new_stack + end_marker, content)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

