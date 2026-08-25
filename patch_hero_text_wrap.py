import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# I will replace:
# className="w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3"
# with:
# className="w-[140px] min-w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3"

content = content.replace(
    'className="w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3"',
    'className="w-[140px] min-w-[140px] text-[11px] text-[#D0C5B8] leading-[1.3] whitespace-normal border-l border-[#4a2e0a] pl-3"'
)

content = content.replace(
    'className="w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3"',
    'className="w-[140px] min-w-[140px] text-[11px] text-[#5E5244] leading-[1.3] whitespace-normal border-l border-[#E8DFD5] pl-3"'
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Hero text wrap fix applied.")
