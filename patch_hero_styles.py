import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Central Stack div
t1 = 'className="flex-1 flex flex-col items-center justify-center space-y-8 py-10 w-full max-w-[900px] mx-auto text-center shrink-0"'
r1 = 'className="flex-1 flex flex-col items-center justify-center space-y-8 py-10 w-full max-w-[900px] mx-auto text-center shrink-0 mt-0"'
content = content.replace(t1, r1)

# 2. Main Title div (remove space-y-6, add flex flex-col items-center, -mt-[20px])
t2 = 'className="space-y-6 max-w-2xl mx-auto px-4 w-full"'
r2 = 'className="flex flex-col items-center max-w-2xl mx-auto px-4 w-full -mt-[20px]"'
content = content.replace(t2, r2)

# 3. h1
t3 = 'className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight mt-4"'
r3 = 'className="text-[70px] font-serif font-bold text-[#341c02] leading-tight tracking-tight mt-[2px]"'
content = content.replace(t3, r3)

# 4. Subheader lines
t4 = 'className="flex items-center justify-center w-full max-w-xl mx-auto gap-4"'
r4 = 'className="flex items-center justify-center w-full max-w-xl mx-auto gap-4 -mt-[25px] mb-[25px]"'
content = content.replace(t4, r4)

# 5. p
t5 = 'className="text-[15px] leading-[25px] text-[#5E5244] max-w-[620px] mx-auto"'
r5 = 'className="text-[14px] leading-[22px] -mt-[2px] font-normal text-[#5E5244] max-w-[620px] mx-auto" style={{ fontFamily: \'Albert Sans, sans-serif\' }}'
content = content.replace(t5, r5)

# 6. Info Cards Row
t6 = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0"'
r6 = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0 mt-0"'
content = content.replace(t6, r6)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Hero styles patched")
