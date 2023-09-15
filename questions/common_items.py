import random
import timeit

word_list = ["apple", "banana", "chocolate", "dog", "elephant", "flower", "grape", "happy", "island", "juice", "kite", "lemon", "mango",
             "nest", "orange", "penguin", "queen", "rainbow", "sunshine", "tiger", "umbrella", "volcano", "watermelon", "xylophone", "zebra"]


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


list1 = [random.choice(word_list) for index in range(5)]
list2 = [random.choice(word_list) for index in range(5)]
print(list1)
print(list2)
execution_time = timeit.timeit("print(common_items(list1, list2))",
                               globals=globals(), number=1)
print(f'Ran for {execution_time:.6f} secs.')
