from utils.random import make_random_int_list


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
    nums = make_random_int_list(10, 20)
    print(nums)
    result = rotate_list_mine(nums, 3)
    print(result)
