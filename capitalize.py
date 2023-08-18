import re

input = 'a short sentence'

pattern = re.compile(r'\w+')

output = pattern.sub(lambda x: x.group(0).capitalize(), input)

print(output)
