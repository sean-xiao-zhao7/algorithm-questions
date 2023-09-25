from utils.random import make_random_int_list


def insertion_sort(list):
    """
    Implement insertion sort.
    Params:
    list (List[int]): list of integers in random order.    
    """
    pass


if __name__ == '__main__':
    input = make_random_int_list(20, 100, True)
    print(input, '\n')
    result = insertion_sort(input)
    print(result)
