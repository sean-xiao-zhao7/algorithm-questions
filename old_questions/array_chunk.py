input = list('1234567')
chunk_size = 2

if chunk_size >= len(input):
    print([input])
    exit()

result = []
current_index = 0
while current_index < len(input):
    result.append(input[current_index:current_index + chunk_size])
    current_index += chunk_size

print(result)
