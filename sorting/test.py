from sorting.quick_sort import quick_sort
from sorting.bubble_sort import bubble_sort
from utils.random import make_random_int_list
from timeit import timeit

if __name__ == "__main__":
    input = make_random_int_list(20, 100, True)
    print(input, '\n')
    result = quick_sort(input)
    print(result)
    bubble_sort(input)
    print(input)
