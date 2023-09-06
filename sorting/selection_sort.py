from random import randint

input = [randint(0, 50) for num in range(100)]

print('Original:', input, '\n')

for i in range(len(input)):
    for j in range(i, len(input)):
        if input[i] > input[j]:
            input[i], input[j] = input[j], input[i]

print('Sorted:', input)
