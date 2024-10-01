from random import randint


def merge_sortOLD(input):
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


def _mergeOLD(list1, list2):
    """
    Merge the sorted sublists from merge sort.
    """
    # print(f'Merging {list1} and {list2}')
    result = []
    index1 = 0
    index2 = 0
    size1 = len(list1)
    size2 = len(list2)
    while index1 < size1:
        if index2 < size2:
            if list1[index1] < list2[index2]:
                result.append(list1[index1])
                index1 += 1
            else:
                result.append(list2[index2])
                index2 += 1
        else:
            result.append(list1[index1])
            index1 += 1

    if index2 < size2:
        result.extend(list2[index2:])
    # print(f'Into {result}')
    return result


def merge_sort(list):
    """
    Merge 2 sorted lists into 1.
    """
    if len(list) == 1:
        return list

    middle = len(list) // 2
    first_half = list[:middle]
    second_half = list[middle:]
    result = _merge(merge_sort(first_half), merge_sort(second_half))
    return result


def _merge(list1, list2):
    """
    Merge 2 sorted lists into 1.
    """
    result = []
    index1 = 0
    index2 = 0
    # loop through both lists, never exceeding length of the longer list
    while index1 < len(list1) or index2 < len(list2):
        # if we already finished checking one list, simply append the rest of the other list into result
        if index1 >= len(list1):
            result.append(list2[index2])
            index2 += 1
        elif index2 >= len(list2):
            result.append(list1[index1])
            index1 += 1
        else:
            # if both lists have items remaining, compare both current items, add lower one into result
            if list1[index1] <= list2[index2]:
                result.append(list1[index1])
                index1 += 1
            else:
                result.append(list2[index2])
                index2 += 1
    return result


if __name__ == "__main__":
    input = [randint(0, 100) for num in range(100)]
    print('Original:', input, '\n')
    result = merge_sort(input)
    print('Sorted:', result)
