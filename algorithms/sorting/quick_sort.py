from utils.random import make_random_int_list


def quick_sort(list):
    list_len = len(list)

    if list_len <= 1:
        return list

    # pivot is last item of list
    pivot_index = list_len - 1
    pivot = list[pivot_index]

    current_index = 0
    lessers = []
    greaters = []
    equals = [pivot]
    while current_index < pivot_index:
        current_item = list[current_index]
        if current_item > pivot:
            greaters.append(current_item)
        elif current_item == pivot:
            equals.append(current_item)
        else:
            lessers.append(current_item)
        current_index += 1

    return quick_sort(lessers) + equals + quick_sort(greaters)


if __name__ == '__main__':
    input = make_random_int_list(20, 10, True)
    print(input, '\n')
    result = quick_sort(input)
    print(result)
