import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# We need to extract the three buttons and reorder them.
track_start = "{/* Track Order Button */}"
cart_start = "{/* Cart Button */}"
search_start = "{/* Quick Search */}"

idx_search = content.find(search_start)
idx_track = content.find(track_start)
idx_cart = content.find(cart_start)

# End of cart is the end of the div
end_div = "        </div>\n\n      </motion.div>"
idx_end = content.find(end_div)

search_block = content[idx_search:idx_track]
track_block = content[idx_track:idx_cart]
cart_block = content[idx_cart:idx_end]

# Reorder: Track -> Cart -> Search
new_right_side = track_block + cart_block + search_block

new_content = content[:idx_search] + new_right_side + content[idx_end:]

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(new_content)
print("Reordered right side buttons")
