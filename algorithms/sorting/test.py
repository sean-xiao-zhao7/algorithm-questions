from sorting.quick_sort import quick_sort
from sorting.bubble_sort import bubble_sort
from sorting.merge_sort import merge_sort
from sorting.insertion_sort import insertion_sort
from sorting.selection_sort import selection_sort
from utils.random import make_random_int_list
from timeit import timeit

if __name__ == "__main__":
    input = make_random_int_list(1000, 100, True)
    # print(input, '\n')
    result = timeit("quick_sort(input)", globals=globals(), number=1)
    print(f'QS: {result:.6f} secs.')
    result2 = timeit("merge_sort(input)", globals=globals(), number=1)
    print(f'MS: {result2:.6f} secs.')
    result3 = timeit("insertion_sort(input)", globals=globals(), number=1)
    print(f'IS: {result3:.6f} secs.')
    result4 = timeit("selection_sort(input)", globals=globals(), number=1)
    print(f'SS: {result4:.6f} secs.')
    result5 = timeit("bubble_sort(input)", globals=globals(), number=1)
    print(f'BS: {result5:.6f} secs.')
