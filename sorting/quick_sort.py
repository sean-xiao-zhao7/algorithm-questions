from utils.random import make_random_int_list


def quick_sort(list):
    list_len = len(list)

    if list_len <= 1:
        return

    # take pivot as last item
    pivot_index = list_len - 1
    pivot = list[pivot_index]
    print(f'Pivot is {pivot}')

    current_index = 0
    while current_index < pivot_index:
        if list[current_index] >= pivot:
            print(f'{list[current_index]} is greater than pivot.')
            # swap pivot with the item before it to make space
            list[pivot_index - 1], list[pivot_index] = \
                list[pivot_index], list[pivot_index - 1]
            print(list)

            # swap list[index] to new space
            list[current_index], list[pivot_index] = list[pivot_index], list[current_index]
            print(list)

            # update pivot index
            pivot_index = pivot_index - 1
            pivot = list[pivot_index]

        current_index += 1

    quick_sort(list[:pivot_index])
    quick_sort(list[pivot_index:])


if __name__ == '__main__':
    input = make_random_int_list(20, 10, True)
    print(input, '\n')
    result = quick_sort(input)
    print(result)
