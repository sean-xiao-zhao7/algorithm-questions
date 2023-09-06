from random import randint

input = [randint(0, 50) for num in range(10)]

print('Original:', input, '\n')

max = 0
for i in range(len(input)):
    for j in range(len(input) - i - 1):
        if input[j] > input[j + 1]:
            input[j + 1], input[j] = input[j], input[j + 1]

print('Sorted:', input)
