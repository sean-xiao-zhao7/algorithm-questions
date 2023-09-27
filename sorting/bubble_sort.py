from random import randint


def bubble_sort(input):
    for i in range(len(input)):
        for j in range(len(input) - i - 1):
            if input[j] > input[j + 1]:
                input[j + 1], input[j] = input[j], input[j + 1]


if __name__ == '__main__':
    max = 0
    input = [randint(0, 50) for num in range(100)]
    print('Original:', input, '\n')
    bubble_sort(input)
    print('Sorted:', input)
