import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# I need to find the `clearInterval(interval);` part
# Oh wait, my script removed it!
# I will just insert it back before the `return (`
if 'clearInterval(interval);' not in content:
    idx = content.find('return (')
    
    missing_code = "return () => clearInterval(interval);\n  }, []);\n\n  "
    content = content[:idx] + missing_code + content[idx:]

    with open('src/components/Hero.tsx', 'w') as f:
        f.write(content)
    print("Fixed missing useEffect closing")
else:
    print("Already fixed")
