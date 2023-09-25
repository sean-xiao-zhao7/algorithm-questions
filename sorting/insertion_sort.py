from utils.random import make_random_int_list


def insertion_sort(list):
    """
    Implement insertion sort.
    Params:
    list (List[int]): list of integers in random order.    
    """
    list_len = len(list)
    for index in range(list_len):
        for index2 in range(index):
            if list[index] <= list[index2]:
                list[index] = list[index2]


if __name__ == '__main__':
    input = make_random_int_list(20, 100, True)
    print(input, '\n')
    result = insertion_sort(input)
    print(result)
