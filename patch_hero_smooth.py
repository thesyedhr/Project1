import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Replace the Top Important Info Cards Row and Info Cards Row completely.
import re

start_comment = "{/* Top Important Info Cards Row */}"
end_comment = "</motion.section>"

start_idx = content.find(start_comment)
end_idx = content.find(end_comment)

if start_idx != -1 and end_idx != -1:
    new_cards = """{/* Top Important Info Cards Row */}
      <div className="w-full z-20 relative -mt-8 sm:-mt-10 mb-2">
        <motion.div 
          layout
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 mx-auto max-w-5xl"
        >
          <motion.div 
            layout
            initial={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'notice' ? null : 'notice')}
            className={`bg-[#341C02] backdrop-blur-md p-2.5 sm:p-3 shadow-md flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-[#4a2e0a] relative ${expandedCard === 'notice' ? 'z-50 ring-2 ring-[#D0C5B8]/30' : 'z-10'}`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 pr-1 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Important Notice</p>
                <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Pre-orders close 3PM</p>
              </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {expandedCard === 'notice' && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="shrink-0 z-10"
                >
                  <div className="w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3 ml-3">
                    Walk-ins welcome from 8:00 AM until sold out.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            layout
            initial={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'special' ? null : 'special')}
            className={`bg-[#341C02] backdrop-blur-md p-2.5 sm:p-3 shadow-md flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-[#4a2e0a] relative ${expandedCard === 'special' ? 'z-50 ring-2 ring-[#D0C5B8]/30' : 'z-10'}`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 pr-1 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="min-w-0 text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Today's Special</p>
                <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Garlic & Comté Batard</p>
              </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {expandedCard === 'special' && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="shrink-0 z-10"
                >
                  <div className="w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3 ml-3">
                    Limited quantity available at 10:15 AM today.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Info Cards Row */}
      <div className="w-full z-10 relative">
        <motion.div 
          layout
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full pt-1 pb-4 px-2 mx-auto max-w-5xl"
        >
          <motion.div 
            layout
            initial={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'fournil' ? null : 'fournil')}
            className={`bg-white/90 backdrop-blur-md p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white relative ${expandedCard === 'fournil' ? 'z-50 ring-2 ring-[#8D4B26]/20' : 'z-10'}`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 pr-1 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">The Fournil</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">42 Bd Saint-Hono...</p>
              </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {expandedCard === 'fournil' && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="shrink-0 z-10"
                >
                  <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3 ml-3">
                    Open daily 7 AM - 6 PM. Come see our open kitchen.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            layout
            initial={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'drops' ? null : 'drops')}
            className={`bg-white/90 backdrop-blur-md p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white relative ${expandedCard === 'drops' ? 'z-50 ring-2 ring-[#8D4B26]/20' : 'z-10'}`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 pr-1 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Daily Drops</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">8:00 & 10:15 AM</p>
              </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {expandedCard === 'drops' && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="shrink-0 z-10"
                >
                  <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3 ml-3">
                    Viennoiserie at 8:00 AM, Breads at 10:15 AM.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            layout
            initial={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'levain' ? null : 'levain')}
            className={`bg-white/90 backdrop-blur-md p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white relative ${expandedCard === 'levain' ? 'z-50 ring-2 ring-[#8D4B26]/20' : 'z-10'}`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 pr-1 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Wheat className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Living Levain</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">36h Cold Proof</p>
              </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {expandedCard === 'levain' && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="shrink-0 z-10"
                >
                  <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3 ml-3">
                    Slow-fermented for rich, complex flavors.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            layout
            initial={{ borderRadius: 20 }}
            onClick={() => setExpandedCard(expandedCard === 'guild' ? null : 'guild')}
            className={`bg-white/90 backdrop-blur-md p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white relative ${expandedCard === 'guild' ? 'z-50 ring-2 ring-[#8D4B26]/20' : 'z-10'}`}
          >
            <motion.div layout="position" className="flex items-center gap-3 shrink-0 pr-1 relative z-20">
              <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0 text-left shrink-0">
                <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Heritage Guild</p>
                <p className="text-[11px] font-bold text-[#341C02] truncate">100% Bio Organic</p>
              </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
              {expandedCard === 'guild' && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", x: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="shrink-0 z-10"
                >
                  <div className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3 ml-3">
                    Sourced from local regenerative farms.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>"""
    
    content = content[:start_idx] + new_cards + "\n  );\n};\n"
    with open('src/components/Hero.tsx', 'w') as f:
        f.write(content)
    print("Smooth popLayout rewrite complete")

