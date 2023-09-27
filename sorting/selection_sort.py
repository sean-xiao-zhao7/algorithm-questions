from random import randint


def selection_sort(input):
    for i in range(len(input)):
        for j in range(i, len(input)):
            if input[i] > input[j]:
                input[i], input[j] = input[j], input[i]


if __name__ == '__main__':
    input = [randint(0, 100) for num in range(100)]
    print('Original:', input, '\n')
    selection_sort(input)
    print('Sorted:', input)
