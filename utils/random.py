import string
import random

characters = string.ascii_letters
word_list = ["apple", "banana", "chocolate", "dog", "elephant", "flower", "grape", "happy", "island", "juice", "kite", "lemon", "mango",
             "nest", "orange", "penguin", "queen", "rainbow", "sunshine", "tiger", "umbrella", "volcano", "watermelon", "xylophone", "zebra"]


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


def make_random_int_list(length, max_range):
    """
    Generate a string of random integers between min_len and max_len length.
    Params:
    min_len (int): minimum length of the list.
    max_len (int): maximum length of the list.
    """
    current_list = []
    for index in range(length):
        current_list.append(random.randint(0, max_range))
    return current_list
