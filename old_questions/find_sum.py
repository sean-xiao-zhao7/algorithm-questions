from random import randint
from timeit import timeit


def find_two_target_sum(integers, target_sum):
    """
    Find 2 integers from the given list that sum up to target_sum.
    Params:
    integers (int[]): list of random integers in random order.
    target_sum (int): the target sum.
    """
    print(f'Attempting to find for sum {target_sum}.')

    # keep a record of unique integers seen so far
    seen = {}

    # loop through all items in the list
    for index, integer in enumerate(integers):
        if integer > target_sum:
            continue

        print(f'Seen {integer}.')

        # check if any saved integer sums up with current integer to target_sum
        leftover = abs(target_sum - integer)
        if leftover in seen:
            print(
                f'Found {leftover} and {integer} that sum up to {target_sum}.\nIt took {index + 1} iterations.')
            return

        # save the current integer as key/value pair
        if integer not in seen:
            seen[integer] = integer
    print(
        f'Could not find two integers that sums up to {target_sum}.')


if __name__ == '__main__':
    random_max = randint(100, 200)
    execution_time = timeit(
        "find_two_target_sum([randint(1, random_max) for current_integer in range(1, random_max)], randint(2, random_max * 2 - 2))", globals=globals(), number=1)
    print(f"Execution time: {execution_time:.6f} seconds")
