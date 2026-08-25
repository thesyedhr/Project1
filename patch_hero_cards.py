import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

target = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0 mt-0"'
replacement = 'className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-3 sm:gap-4 w-full pt-3 px-2 z-10 shrink-0 -mt-2 sm:-mt-4 scale-[1.03]"'

content = content.replace(target, replacement)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

print("Hero cards row updated")
