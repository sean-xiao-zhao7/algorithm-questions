input = 'apple 1 1 1 1 2 3 1 231111'

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
if max_char == ' ':
    print('White space')
else:
    print(max_char)
