import string
import random

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
    list1 (String[]): list of strings #1.
    list2 (String[]): list of strings #2.
    """
    pass


list1 = [make_random_string(10, 20) for index in range(20)]
list2 = [make_random_string(10, 20) for index in range(20)]
common_items(list1, list2)
