import re

input = 'asdfasdfasdfsdfasdf'

result = re.findall(r'[aeiou]', input)

print(len(result))
