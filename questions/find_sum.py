from random import randint


def find_two_target_sum(integers, target_sum):
    """
    Find 2 integers from the given list that sum up to target_sum.
    Params:
    integers (int[]): list of random integers in random order.
    target_sum (int): the target sum.
    """
    print(f'Attempting to find for sum {target_sum}')

    # keep a record of unique integers seen so far
    seen = {}

    # loop through all items in the list
    for integer in integers:
        # save the current integer as key/value pair
        if integer not in seen:
            seen[integer] = integer

        # check if any saved integer sums up with current integer to target_sum
        leftover = abs(target_sum - seen)
        if seen[leftover]:
            print(
                f'Found {leftover} and {integer} that sums up to {target_sum}.')
            exit
    print(
        f'Could not find two integers that sums up to {target_sum}.')


if __name__ == '__main__':
    find_two_target_sum([randint(1, 100)
                        for dummy in range(100)], randint(2, 198))
