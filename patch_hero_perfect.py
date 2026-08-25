import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

start_comment = "{/* Top Important Info Cards Row */}"
end_comment = "</motion.section>"

start_idx = content.find(start_comment)
end_idx = content.find(end_comment)

if start_idx != -1 and end_idx != -1:
    new_cards = """{/* Top Important Info Cards Row */}
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
              <div className="w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3">
                Walk-ins welcome from 8:00 AM until sold out.
              </div>
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
              <div className="w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3">
                Limited quantity available at 10:15 AM today.
              </div>
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
              <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Open daily 7 AM - 6 PM. Come see our open kitchen.
              </div>
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
              <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Viennoiserie at 8:00 AM, Breads at 10:15 AM.
              </div>
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
              <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Slow-fermented for rich, complex flavors.
              </div>
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
              <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3">
                Sourced from local regenerative farms.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>"""
    
    content = content[:start_idx] + new_cards + "\n  );\n};\n"
    with open('src/components/Hero.tsx', 'w') as f:
        f.write(content)
    print("Perfect shape and smooth animation rewrite complete")

