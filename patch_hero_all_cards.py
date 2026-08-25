import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Update the containers to add items-start so they don't stretch each other
c1 = 'className="flex flex-row justify-center gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 z-10 shrink-0 -mt-8 sm:-mt-10 scale-[1.08] lg:scale-[1.1]"'
r1 = 'className="flex flex-row justify-center items-start gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 z-10 shrink-0 -mt-8 sm:-mt-10 scale-[1.08] lg:scale-[1.1]"'
content = content.replace(c1, r1)

c2 = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"'
r2 = 'className="grid grid-cols-2 items-start lg:flex lg:flex-row lg:justify-center lg:items-start gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"'
content = content.replace(c2, r2)

# 2. Update the 4 bottom cards to be expandable
# Card 1: The Fournil
card1_old = """        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">The Fournil</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">42 Bd Saint-Hono...</p>
          </div>
        </div>"""
card1_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'fournil' ? null : 'fournil')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-col items-start gap-3 lg:w-56 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left flex-1">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">The Fournil</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">42 Bd Saint-Hono...</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'fournil' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-[#5E5244] leading-relaxed w-full"
              >
                Located at 42 Boulevard Saint-Honoré, Paris. Open daily from 7 AM to 6 PM. Come visit our open kitchen and see the bakers at work!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card1_old, card1_new)

# Card 2: Daily Drops
card2_old = """        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Daily Drops</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">8:00 AM & 10:15 A...</p>
          </div>
        </div>"""
card2_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'drops' ? null : 'drops')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-col items-start gap-3 lg:w-56 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left flex-1">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Daily Drops</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">8:00 AM & 10:15 A...</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'drops' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-[#5E5244] leading-relaxed w-full"
              >
                Viennoiserie drops fresh at 8:00 AM. Country Batards and specialty sourdoughs drop at 10:15 AM.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card2_old, card2_new)

# Card 3: Living Levain
card3_old = """        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <Wheat className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Living Levain</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">36h Cold Proof</p>
          </div>
        </div>"""
card3_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'levain' ? null : 'levain')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-col items-start gap-3 lg:w-56 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <Wheat className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left flex-1">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Living Levain</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">36h Cold Proof</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'levain' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-[#5E5244] leading-relaxed w-full"
              >
                Our signature sourdough is naturally leavened and slow-fermented for 36 hours to develop complex flavors and improve digestibility.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card3_old, card3_new)

# Card 4: Heritage Guild
card4_old = """        <div className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex items-center gap-3 lg:w-56">
          <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Heritage Guild</p>
            <p className="text-[11px] font-bold text-[#341C02] truncate">100% Bio Organic</p>
          </div>
        </div>"""
card4_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'guild' ? null : 'guild')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-col items-start gap-3 lg:w-56 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left flex-1">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Heritage Guild</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">100% Bio Organic</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'guild' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-[#5E5244] leading-relaxed w-full"
              >
                We use only 100% organic, stoneground flours sourced directly from local regenerative farms to ensure the highest quality.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card4_old, card4_new)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("All hero cards expand patched")
