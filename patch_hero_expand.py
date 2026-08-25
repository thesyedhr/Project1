import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Update imports
if 'AnimatePresence' not in content:
    content = content.replace("import { motion } from 'motion/react';", "import { motion, AnimatePresence } from 'motion/react';")

# 2. Add state
state_code = """  const [timeText, setTimeText] = useState('Checking ovens...');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);"""
content = content.replace("  const [timeText, setTimeText] = useState('Checking ovens...');", state_code)

# 3. Replace the Top Important Info Cards Row
target_cards = """      {/* Top Important Info Cards Row */}
      <motion.div 
        className="flex flex-row justify-center gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 z-10 shrink-0 -mt-8 sm:-mt-10 scale-[1.08] lg:scale-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <div className="bg-[#341C02] backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 shadow-md flex items-center gap-3 lg:w-64">
          <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Important Notice</p>
            <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Pre-orders for tomorrow close at 3PM</p>
          </div>
        </div>

        <div className="bg-[#341C02] backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 shadow-md flex items-center gap-3 lg:w-64">
          <div className="w-8 h-8 rounded-[12px] bg-[#4a2e0a] flex items-center justify-center text-[#F4EBE1] shrink-0">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[9px] uppercase font-bold text-[#D0C5B8] tracking-wider truncate">Today's Special</p>
            <p className="text-[11px] font-bold text-[#F4EBE1] truncate">Wild Garlic & Comté Batard</p>
          </div>
        </div>
      </motion.div>"""

replacement_cards = """      {/* Top Important Info Cards Row */}
      <motion.div 
        layout
        className="flex flex-row justify-center gap-3 sm:gap-4 w-full pt-2 pb-1 px-2 z-10 shrink-0 -mt-8 sm:-mt-10 scale-[1.08] lg:scale-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <motion.div 
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
        </motion.div>

        <motion.div 
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
        </motion.div>
      </motion.div>"""

content = content.replace(target_cards, replacement_cards)

# Need to add layout to Info Cards Row and section to prevent overlapping/colliding
content = content.replace('<section id="hero-section"', '<motion.section layout id="hero-section"')
content = content.replace('</section>', '</motion.section>')
content = content.replace("""{/* Info Cards Row */}
      <motion.div 
        className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >""", """{/* Info Cards Row */}
      <motion.div 
        layout
        className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >""")

content = content.replace("""{/* Central Stack */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-10 w-full max-w-[900px] mx-auto text-center shrink-0 mt-0">""", """{/* Central Stack */}
      <motion.div layout className="flex-1 flex flex-col items-center justify-center space-y-8 py-10 w-full max-w-[900px] mx-auto text-center shrink-0 mt-0">""")
content = content.replace("""</p>
        </motion.div>
      </div>""", """</p>
        </motion.div>
      </motion.div>""")

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Hero cards expand patched")
