from utils.random import make_random_int_list


def quick_sort(list):
    list_len = len(list)

    if list_len <= 1:
        return

    # take pivot as last item
    pivot_index = list_len - 1
    pivot = list[pivot_index]

    for index in range(list_len):
        if list[index] > pivot:
            # swap pivot with the item before it to make space
            list[pivot_index - 1], list[pivot_index] = \
                list[pivot_index], list[pivot_index - 1]
            # swap list[index] to new space
            list[index], list[pivot_index] = list[pivot_index], list[index]
            # update pivot index
            pivot_index = pivot_index - 1

    quick_sort(list[:pivot_index])
    quick_sort(list[pivot_index:])


if __name__ == '__main__':
    input = make_random_int_list(20, 100, True)
    print(input, '\n')
    result = quick_sort(input)
    print(result)
