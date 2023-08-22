import re

input = 'asdfasdfasdfsdfasdf'

result = re.findall(r'[aeiouAEIOU]', input)

print(len(result))
