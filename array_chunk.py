input = list('1234567')
chunk_size = 5

if chunk_size >= len(input):
    print([input])
    exit()

result = []
for item in range(0, len(input), chunk_size):
    endIndex = item + chunk_size
    if endIndex > len(input):
        endIndex = len(input)

    result.append([input[index] for index in range(item, endIndex)])

print(result)
