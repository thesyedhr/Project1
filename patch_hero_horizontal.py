import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Update the containers to be flex-row flex-wrap items-center
c1 = 'className="flex flex-row justify-center items-start gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 z-10 shrink-0 -mt-8 sm:-mt-10 scale-[1.08] lg:scale-[1.1]"'
r1 = 'className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 z-10 shrink-0 -mt-8 sm:-mt-10 scale-[1.08] lg:scale-[1.1]"'
content = content.replace(c1, r1)

c2 = 'className="grid grid-cols-2 items-start lg:flex lg:flex-row lg:justify-center lg:items-start gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"'
r2 = 'className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"'
content = content.replace(c2, r2)

# Notice Card
card_notice_old = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'notice' ? null : 'notice')}
          className="bg-[#341C02] backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 shadow-md flex flex-col items-start gap-3 w-64 cursor-pointer overflow-hidden transition-colors hover:bg-[#4a2e0a]"
        >
          <motion.div layout className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left flex-1">
              <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Important Notice</p>
              <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Pre-orders for tomorrow close at 3PM</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'notice' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-[#D0C5B8] leading-relaxed w-full"
              >
                Due to high demand, we are closing our pre-orders for tomorrow early. Walk-ins are still welcome from 8:00 AM until sold out. Thank you for your continued support of our artisanal bakes!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
card_notice_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'notice' ? null : 'notice')}
          className="bg-[#341C02] backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 shadow-md flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-[#4a2e0a]"
        >
          <motion.div layout className="flex items-center gap-3 shrink-0 pr-1">
            <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left shrink-0">
              <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Important Notice</p>
              <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Pre-orders close 3PM</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'notice' && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                animate={{ width: 130, opacity: 1, paddingLeft: 12, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal shrink-0 border-l border-[#4a2e0a]"
              >
                Walk-ins welcome from 8:00 AM until sold out.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card_notice_old, card_notice_new)

# Special Card
card_special_old = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'special' ? null : 'special')}
          className="bg-[#341C02] backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 shadow-md flex flex-col items-start gap-3 w-64 cursor-pointer overflow-hidden transition-colors hover:bg-[#4a2e0a]"
        >
          <motion.div layout className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div className="min-w-0 text-left flex-1">
              <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Today's Special</p>
              <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Wild Garlic & Comté Batard</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'special' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-[#D0C5B8] leading-relaxed w-full"
              >
                Our signature sourdough folded with foraged wild garlic and 18-month aged Comté cheese. Available in limited quantities today starting at 10:15 AM. Perfect paired with cultured butter.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
card_special_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'special' ? null : 'special')}
          className="bg-[#341C02] backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 shadow-md flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-[#4a2e0a]"
        >
          <motion.div layout className="flex items-center gap-3 shrink-0 pr-1">
            <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div className="min-w-0 text-left shrink-0">
              <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Today's Special</p>
              <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Garlic & Comté Batard</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'special' && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                animate={{ width: 130, opacity: 1, paddingLeft: 12, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal shrink-0 border-l border-[#4a2e0a]"
              >
                Limited quantity available at 10:15 AM today.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card_special_old, card_special_new)

# The Fournil
card_fournil_old = """        <motion.div 
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
card_fournil_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'fournil' ? null : 'fournil')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 shrink-0 pr-1">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left shrink-0">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">The Fournil</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">42 Bd Saint-Hono...</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'fournil' && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                animate={{ width: 130, opacity: 1, paddingLeft: 12, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal shrink-0 border-l border-[#E8DFD5]"
              >
                Open daily 7 AM - 6 PM. Come see our open kitchen.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card_fournil_old, card_fournil_new)

# Daily Drops
card_drops_old = """        <motion.div 
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
card_drops_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'drops' ? null : 'drops')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 shrink-0 pr-1">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left shrink-0">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Daily Drops</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">8:00 & 10:15 AM</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'drops' && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                animate={{ width: 130, opacity: 1, paddingLeft: 12, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal shrink-0 border-l border-[#E8DFD5]"
              >
                Viennoiserie at 8:00 AM, Breads at 10:15 AM.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card_drops_old, card_drops_new)

# Living Levain
card_levain_old = """        <motion.div 
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
card_levain_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'levain' ? null : 'levain')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 shrink-0 pr-1">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <Wheat className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left shrink-0">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Living Levain</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">36h Cold Proof</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'levain' && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                animate={{ width: 130, opacity: 1, paddingLeft: 12, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal shrink-0 border-l border-[#E8DFD5]"
              >
                Slow-fermented for rich, complex flavors.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card_levain_old, card_levain_new)

# Heritage Guild
card_guild_old = """        <motion.div 
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
card_guild_new = """        <motion.div 
          layout
          onClick={() => setExpandedCard(expandedCard === 'guild' ? null : 'guild')}
          className="bg-white/90 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 border border-[#E8DFD5] shadow-sm flex flex-row items-center gap-0 cursor-pointer overflow-hidden transition-colors hover:bg-white"
        >
          <motion.div layout className="flex items-center gap-3 shrink-0 pr-1">
            <div className="w-8 h-8 rounded-[12px] bg-[#F4EBE1] flex items-center justify-center text-[#8D4B26] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left shrink-0">
              <p className="text-[9px] uppercase font-bold text-[#8C7A68] tracking-wider truncate">Heritage Guild</p>
              <p className="text-[11px] font-bold text-[#341C02] truncate">100% Bio Organic</p>
            </div>
          </motion.div>
          <AnimatePresence>
            {expandedCard === 'guild' && (
              <motion.div
                initial={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                animate={{ width: 130, opacity: 1, paddingLeft: 12, marginLeft: 12 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, marginLeft: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal shrink-0 border-l border-[#E8DFD5]"
              >
                Sourced from local regenerative farms.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>"""
content = content.replace(card_guild_old, card_guild_new)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Horizontal expansion patched")
