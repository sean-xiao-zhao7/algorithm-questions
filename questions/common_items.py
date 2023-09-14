import string
import random
import timeit

characters = string.ascii_letters


def make_random_string(min_len, max_len):
    """
    Generate a string of random alpha chars between min_len and max_len length.
    Params:
    min_len (int): minimum length of the string.
    max_len (int): maximum length of the string.
    """
    current_string = ''
    for index in range(random.randint(min_len, max_len)):
        current_string += random.choice(characters)
    return current_string


def common_items(list1, list2):
    """
    Return bool indicating whether both lists contain at least 1 common item.
    Params:
    list1 (String[]): list of strings #1 of random values and order.
    list2 (String[]): list of strings #2 of random values and order.
    """
    # keep a hash map of unique strings from list1, for quick look up later
    seen = {}
    for string in list1:
        if string not in seen:
            seen[string] = None

    # iterate through list2, test each item against seen.
    for string in list2:
        if string in seen:
            return True
    return False


list1 = [make_random_string(10, 20) for index in range(20)]
list2 = [make_random_string(10, 20) for index in range(20)]
execution_time = timeit.timeit("print(common_items(list1, list2))",
                               globals=globals(), number=1)
print(f'Ran for {execution_time:.6f} secs.')
