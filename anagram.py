import re
import functools

input1 = "Whoa! Hi!"
input2 = "Hi! Whoa!"

if input1 == input2:
    print(f'"{input1}" is an anagram of "{input2}"')
    exit()

cleaned_input1 = re.sub(r'[^a-zA-Z0-9]', '', input1)
cleaned_input2 = re.sub(r'[^a-zA-Z0-9]', '', input2)

ord1 = functools.reduce(lambda x, y: x + ord(y), cleaned_input1, 0)
ord2 = functools.reduce(lambda x, y: x + ord(y), cleaned_input2, 0)

if ord1 == ord2:
    print(f'"{input1}"\nis an anagram of\n"{input2}"')
else:
    print(f'"{input1}"\nis not an anagram of\n"{input2}"')
