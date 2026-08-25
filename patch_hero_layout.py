import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Let's extract the pieces we need to reorder
pill_start = content.find('{/* Top Pill Status - Now dynamically updates with real time */}')
pill_end = content.find('{/* Subheader lines */}')
subheader_start = content.find('{/* Subheader lines */}')
subheader_end = content.find('{/* Main Title & Description */}')
title_desc_start = content.find('{/* Main Title & Description */}')
info_cards_start = content.find('{/* Info Cards Row */}')

if pill_start == -1 or subheader_start == -1 or title_desc_start == -1:
    print("Could not find markers. File might be modified or broken.")
    sys.exit(1)

pill_block = content[pill_start:pill_end].strip()
subheader_block = content[subheader_start:subheader_end].strip()

# For title_desc_block, we need to extract h1 and p separately
title_desc_block_full = content[title_desc_start:info_cards_start].strip()

h1_start = title_desc_block_full.find('<h1')
h1_end = title_desc_block_full.find('</h1>') + 5
h1_block = title_desc_block_full[h1_start:h1_end].strip()

p_start = title_desc_block_full.find('<p', h1_end)
p_end = title_desc_block_full.find('</p>') + 4
p_block = title_desc_block_full[p_start:p_end].strip()

# Logo block
logo_start = content.find('{/* Upper Space for Future Use */}')
logo_end = content.find('{/* Lower Bottom Content */}')
logo_block = content[logo_start:logo_end].strip()

# Now construct the new layout
new_upper = f"""{{/* Upper Space for Future Use */}}
      <div className="flex-1 min-h-[250px] flex flex-col items-center justify-center shrink-0 space-y-8">
        <motion.div 
          initial={{{{ opacity: 0, y: -10 }}}}
          animate={{{{ opacity: 1, y: 0 }}}}
          transition={{{{ duration: 0.7, ease: "easeOut" }}}}
        >
          {pill_block}
        </motion.div>
        <motion.div
          initial={{{{ scale: 0.9, opacity: 0 }}}}
          animate={{{{ scale: 1, opacity: 1 }}}}
          transition={{{{ duration: 0.8, ease: "easeOut" }}}}
          className="relative group cursor-pointer"
          onClick={{onOrderNow}}
        >
          <BakeryLogo size="hero" className="relative z-10" />
        </motion.div>
      </div>"""

new_lower = f"""{{/* Lower Bottom Content */}}
      <motion.div 
        className="w-full max-w-[900px] mx-auto flex flex-col items-center text-center space-y-5 z-10 shrink-0"
        initial={{{{ opacity: 0, y: 20 }}}}
        animate={{{{ opacity: 1, y: 0 }}}}
        transition={{{{ duration: 0.7, ease: "easeOut" }}}}
      >
        {{/* Main Title, Subheader, & Description */}}
        <div className="space-y-5 max-w-2xl mx-auto px-4 w-full">
          {h1_block}
          {subheader_block}
          {p_block}
        </div>"""

# Find bounds to replace
replace_start = logo_start
replace_end = info_cards_start

new_content = content[:replace_start] + new_upper + "\n\n      " + new_lower + "\n\n        " + content[replace_end:]

with open('src/components/Hero.tsx', 'w') as f:
    f.write(new_content)

print("Hero layout patched")
