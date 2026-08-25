import sys

# 1. Update PairingGuideSection.tsx
with open('src/components/PairingGuideSection.tsx', 'r') as f:
    content = f.read()

target1 = "? 'bg-white border-[#341C02] shadow-md ring-1 ring-[#341C02]/20'"
replacement1 = "? 'bg-white border-[#A8794E] shadow-md ring-1 ring-[#A8794E]/30'"

content = content.replace(target1, replacement1)

with open('src/components/PairingGuideSection.tsx', 'w') as f:
    f.write(content)

# 2. Update TerroirGrainSection.tsx
with open('src/components/TerroirGrainSection.tsx', 'r') as f:
    content = f.read()

target2 = "? 'bg-white border-[#341C02] shadow-md -translate-x-1 sm:-translate-x-2'"
replacement2 = "? 'bg-white border-[#A8794E] shadow-md ring-1 ring-[#A8794E]/30 -translate-x-1 sm:-translate-x-2'"

content = content.replace(target2, replacement2)

with open('src/components/TerroirGrainSection.tsx', 'w') as f:
    f.write(content)

