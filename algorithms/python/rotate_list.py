from utils.random import make_random_int_list
from timeit import timeit


def rotate_list_mine(nums, k):
    """
    Given an integer list nums, 
    rotate the array to the right by k steps, where k is non-negative.
    """
    len_nums = len(nums)
    new_nums = [0] * len_nums
    for index, item in enumerate(nums):
        new_index = index + k
        if new_index >= len_nums:
            new_index = new_index - len_nums
        new_nums[new_index] = item
    return new_nums


if __name__ == '__main__':
    nums = make_random_int_list(10000, 20)
    # print(nums)
    time_mine = timeit("rotate_list_mine(nums, 3)",
                       globals=globals(), number=1)
    # print(result)
    print(f'My time: {time_mine:.6f} secs.')
