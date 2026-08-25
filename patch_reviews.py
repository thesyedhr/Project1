import sys

with open('src/components/ReviewsAndPressSection.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1280px-Pierre-Person.jpg',",
    "avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',", 1
)

content = content.replace(
    "avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1280px-Pierre-Person.jpg',",
    "avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',", 1
)

content = content.replace(
    "avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1280px-Pierre-Person.jpg',",
    "avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',", 1
)

with open('src/components/ReviewsAndPressSection.tsx', 'w') as f:
    f.write(content)
