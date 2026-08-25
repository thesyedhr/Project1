import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# CSS 3
t3 = '<span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A68]">'
r3 = '<span className="text-[9px] text-center uppercase tracking-[0.25em] font-semibold text-[#8C7A68]">'
content = content.replace(t3, r3)

# CSS 4
t4 = '<h1 className="text-5xl sm:text-6xl md:text-[72px] font-serif font-bold text-[#2C241D] leading-tight tracking-tight">'
r4 = '<h1 className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight">'
content = content.replace(t4, r4)

# CSS 5
t5 = '<p className="text-sm sm:text-[15px] md:text-base text-[#5E5244] leading-relaxed max-w-[620px] mx-auto">'
r5 = '<p className="text-[15px] leading-[25px] text-[#5E5244] max-w-[620px] mx-auto">'
content = content.replace(t5, r5)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
print("Hero patched")
