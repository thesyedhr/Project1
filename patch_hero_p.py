import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. h1 mt-[2px] -> -mt-[6px]
t3 = 'className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight mt-[2px]"'
r3 = 'className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight -mt-[6px]"'
content = content.replace(t3, r3)

# 2. Subheader lines div
t4 = 'className="flex items-center justify-center w-full max-w-xl mx-auto gap-4 -mt-[25px] mb-[25px]"'
r4 = 'className="flex items-center justify-center w-full max-w-xl mx-auto gap-4 -mt-[6px] mb-[25px]"'
content = content.replace(t4, r4)

# 3. p
t5 = """          <p className="text-[14px] leading-[22px] -mt-[2px] font-normal text-[#5E5244] max-w-[620px] mx-auto" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
            Handcrafting slow wild-fermented sourdoughs, French viennoiserie, and 
            bespoke pastries with ancient stoneground bio flours, unhurried 36-hour 
            fermentation, and mountain spring water.
          </p>"""
content = content.replace(t5, "")

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Hero styles patched again")
