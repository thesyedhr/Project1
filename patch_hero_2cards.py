import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Update imports
if 'AlertCircle' not in content:
    content = content.replace(
        "import { Flame, MapPin, Clock, Wheat, Award } from 'lucide-react';",
        "import { Flame, MapPin, Clock, Wheat, Award, AlertCircle, Star } from 'lucide-react';"
    )

# 2. Insert new cards before {/* Info Cards Row */}
target = "{/* Info Cards Row */}"
new_cards = """{/* Top Important Info Cards Row */}
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
      </motion.div>

      {/* Info Cards Row */}"""
if "{/* Top Important Info Cards Row */}" not in content:
    content = content.replace(target, new_cards)

# 3. Adjust the margin of the 4 cards row to not overlap the new cards
target_4_cards = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0 -mt-8 sm:-mt-12 scale-[1.08] lg:scale-[1.1]"'
replacement_4_cards = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-2 px-2 z-10 shrink-0 mt-2 scale-[1.08] lg:scale-[1.1]"'
content = content.replace(target_4_cards, replacement_4_cards)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Added 2 new cards")
