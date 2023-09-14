from random import randint


def find_two_target_sum(integers, target_sum):
    """
    Find 2 integers from the given list that sum up to target_sum.
    Params:
    integers (int[]): list of random integers in random order.
    target_sum (int): the target sum.
    """
    print(f'Attempting to find for sum {target_sum}')


if __name__ == '__main__':
    find_two_target_sum([randint(1, 100)
                        for dummy in range(100)], randint(2, 198))
