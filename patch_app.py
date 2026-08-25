import sys

with open('src/App.tsx', 'r') as f:
    content = f.read()

target = """    } else if (sectionId === 'reviews') {
      document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };"""

replacement = """    } else if (sectionId === 'reviews') {
      document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'location' || sectionId === 'about') {
      document.getElementById('location-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };"""

content = content.replace(target, replacement)
with open('src/App.tsx', 'w') as f:
    f.write(content)
print("App.tsx patched")
