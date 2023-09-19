from utils.random import make_random_int_list


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


def find_largest_subarray(input_list):
    """
    Find the largest contiguous subarray from input_list.
    Params:
    input_list (list[int]): list of integers, both positive and negative.
    """
    pass


if __name__ == '__main__':
    test = make_random_int_list(10, 20, True)
    print(test)
    print(find_largest_subarray_brute(test))
