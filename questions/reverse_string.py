from utils.random import make_random_string
import timeit


def reverse_string(input_string):
    """
    Reverse a string.
    Params:
    input_string (string): string to be reversed.
    Return:
    String reversed.
    """
    current_len = len(input_string)
    half_len = int(current_len/2)
    if current_len == 1:
        return input_string
    elif current_len == 2:
        return input_string[1] + input_string[0]
    else:
        return reverse_string(input_string[half_len:]) + reverse_string(input_string[:half_len])


def easy(input_string):
    reversed_string = ''
    counter = len(input_string) - 1
    while counter >= 0:
        reversed_string = reversed_string + input_string[counter]
        counter = counter - 1
    return reversed_string


if __name__ == '__main__':
    input = make_random_string(1000000, 2000000)
    execution_time = timeit.timeit(
        "easy(input)", globals=globals(), number=1)
    print(f'Ran for {execution_time:.6f} secs.')
    execution_time = timeit.timeit(
        "reverse_string(input)", globals=globals(), number=1)
    print(f'Ran for {execution_time:.6f} secs.')
