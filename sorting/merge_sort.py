from random import randint

input = [randint(0, 100) for num in range(100)]

print('Original:', input, '\n')


def merge_sort(input):
    """
    Implement the merge sort algorithm.
    Params:
    input (list of int): unsorted list of integers of any length.
    """
    size = len(input)
    if size == 1:
        return input
    elif size == 2:
        return [input[0], input[1]] if input[0] < input[1] else [input[1], input[0]]
    else:
        return _merge(merge_sort(input[:size // 2]), merge_sort(input[size // 2:]))


def _merge(list1, list2):
    """
    Merge the sorted sublists from merge sort.
    """
    result = []
    size1 = len(list1)
    size2 = len(list2)
    for index in range(size1 + size2):
        if index < size1 and index < size2:
            if list1[index] < list2[index]:
                result.append(list1[index])
            else:
                result.append(list2[index])
        elif index < size1:
            result.append(list1[index])
        elif index < size2:
            result.append(list2[index])
        else:
            break

    return result


merge_sort(input)
print('Sorted:', input)
