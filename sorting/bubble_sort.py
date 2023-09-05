from random import randint

input = [randint(0, 50) for num in range(50)]

print(input)

for i in range(len(input)):
    for index, num in enumerate(input):
        if index < len(input) - 1:
            input[index], input[index + 1] = input[index + 1], input[index]
    print(input)

print(input)
