import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Info Cards Row
target_cards = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0 -mt-2 sm:-mt-4 scale-[1.03]"'
replacement_cards = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0 -mt-8 sm:-mt-12 scale-[1.08] lg:scale-[1.1]"'
content = content.replace(target_cards, replacement_cards)

# 2. Top Pill Status
target_pill = 'className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-sm"'
replacement_pill = 'className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-sm scale-[1.15]"'
content = content.replace(target_pill, replacement_pill)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Hero scale patched")
