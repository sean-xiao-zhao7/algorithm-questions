from sorting.quick_sort import quick_sort
from sorting.bubble_sort import bubble_sort
from utils.random import make_random_int_list
from timeit import timeit

if __name__ == "__main__":
    input = make_random_int_list(1000, 100, True)
    print(input, '\n')
    result = timeit("quick_sort(input)", globals=globals(), number=1)
    print(f'QS: {result:.6f} secs.')
    result2 = timeit("bubble_sort(input)", globals=globals(), number=1)
    print(f'BS: {result2:.6f} secs.')
