from utils.random import make_random_int_list


def quick_sort(list):
    list_len = len(list)

    if list_len <= 2:
        return

    # take pivot as last item
    pivot_index = list_len - 1
    pivot = list[pivot_index]
    print(list)
    current_index = 0
    while current_index < pivot_index:
        if list[current_index] >= pivot:
            # swap pivot with the item before it to make space
            list[pivot_index - 1], list[pivot_index] = \
                list[pivot_index], list[pivot_index - 1]

            if list_len > 2:
                # swap list[index] to new space
                list[current_index], list[pivot_index] = list[pivot_index], list[current_index]

            # update pivot index
            pivot_index = pivot_index - 1
            pivot = list[pivot_index]
        current_index += 1

    print(pivot)
    print(list[:pivot_index])
    print(list[pivot_index + 1:], '\n')
    quick_sort(list[:pivot_index])
    quick_sort(list[pivot_index:])


if __name__ == '__main__':
    input = make_random_int_list(20, 10, True)
    print(input, '\n')
    quick_sort(input)
    print(input)
