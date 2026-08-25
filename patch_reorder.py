import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Markers
search_marker = "{/* Quick Search */}"
track_marker = "{/* Track Order Button */}"
cart_marker = "{/* Cart Button */}"

idx_track = content.find(track_marker)
idx_cart = content.find(cart_marker)
idx_search = content.find(search_marker)
idx_end = content.find("        </div>\n\n      </motion.div>")

if idx_track != -1 and idx_cart != -1 and idx_search != -1 and idx_end != -1:
    track_block = content[idx_track:idx_cart]
    cart_block = content[idx_cart:idx_search]
    search_block = content[idx_search:idx_end]

    # Clean up empty lines or spacing if necessary, but string slicing preserves it
    new_right_side = search_block + track_block + cart_block

    new_content = content[:idx_track] + new_right_side + content[idx_end:]
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(new_content)
    print("Reordered to Search -> Track -> Cart")
else:
    print("Could not find markers")
