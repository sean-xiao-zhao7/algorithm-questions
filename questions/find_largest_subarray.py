from utils.random import make_random_int_list
from timeit import timeit


def find_largest_subarray_brute(input_list):
    """
    Find the largest contiguous subarray from input_list.
    Params:
    input_list (list[int]): list of integers, both positive and negative.
    """

    largest_sum = 0
    for index in range(len(input_list)):
        item_largest_sum = 0
        for index2 in range(index, len(input_list)):
            item_largest_sum += input_list[index2]
            largest_sum = max(largest_sum, item_largest_sum)
    return largest_sum


def find_largest_subarray_kadane(input_list):
    """
    Find the largest contiguous subarray from input_list.
    Params:
    input_list (list[int]): list of integers, both positive and negative.
    """
    largest_sum = 0
    current_largest = 0
    for item in input_list:
        current_largest = current_largest + item
        if current_largest < 0:
            current_largest = 0
        elif current_largest > largest_sum:
            largest_sum = current_largest
    return largest_sum


if __name__ == '__main__':
    test = make_random_int_list(1000, 20, True)
    # print(test)
    print(find_largest_subarray_kadane([5, 4, -1, 7, 8]))
    # time = timeit(
    #     "find_largest_subarray_brute(test)", globals=globals(), number=1)
    # print(f'Used {time:.6f} seconds.')
