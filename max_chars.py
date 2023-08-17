input = 'apple 111123123'

seen = {}
max_so_far = 0
max_char = ''
for char in input:
    if char in seen:
        seen[char] += 1
        if seen[char] > max_so_far:
            max_so_far = seen[char]
            max_char = char
    else:
        seen[char] = 1
print(max_char)
