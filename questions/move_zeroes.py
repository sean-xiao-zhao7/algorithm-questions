from utils.random import make_random_int_list
from timeit import timeit


def move_zeroes_mine(input_list):
    """
    Given an integer array nums, move all 0's to the end of it - in place -
    while maintaining the relative order of the non-zero elements.
    """
    for index, item in enumerate(input_list):
        if item == 0:
            input_list.append(item)
            input_list.pop(index)


def move_zeroes_append(input_list):
    """
    Given an integer array nums, move all 0's to the end of it - in place -
    while maintaining the relative order of the non-zero elements.
    """
    index = 0
    for item in input_list:
        if item == 0:
            continue
        else:
            input_list[index] = item
            index += 1
    for index2 in range(index, len(input_list)):
        input_list[index2] = 0
    return input_list


if __name__ == '__main__':
    test = make_random_int_list(10000, 20, True, 0)
    # print(test)
    time1 = timeit("move_zeroes_mine(test)", globals=globals(), number=1)
    time2 = timeit("move_zeroes_append(test)", globals=globals(), number=1)
    print(f'Time 1: {time1:.6f} secs.\nTime 2: {time2:.6f} secs.')
    # print('\n', test)
