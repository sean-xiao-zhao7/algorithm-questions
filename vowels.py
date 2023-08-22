import re

input = '123123123123123a'

result = re.findall(r'[aeiouAEIOU]', input)

print(len(result))
