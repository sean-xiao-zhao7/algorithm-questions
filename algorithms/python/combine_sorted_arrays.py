from utils.random import make_random_int_list


def combine_sorted_lists(list1, list2):
    """
    Combine 2 sorted ascending integer lists into 1 sorted list.
    Params:
    list1 (list[int]): ascending sorted list of integers.
    list2 (list[int]): ascending sorted list of integers.
    """
    result = []
    current_list1_item = 0
    current_list2_item = 0
    while current_list1_item < len(list1) or current_list2_item < len(list2):
        if current_list1_item == len(list1):
            result.append(list2[current_list2_item])
            current_list2_item += 1
        elif current_list2_item == len(list2):
            result.append(list1[current_list1_item])
            current_list1_item += 1
        else:
            item1 = list1[current_list1_item]
            item2 = list2[current_list2_item]
            if item1 < item2:
                result.append(item1)
                current_list1_item += 1
            else:
                result.append(item2)
                current_list2_item += 1

    return result


if __name__ == '__main__':
    list1 = make_random_int_list(100, 100)
    list1.sort()
    list2 = make_random_int_list(100, 100)
    list2.sort()
    print(list1)
    print(list2)
    result = combine_sorted_lists(list1, list2)
    print('\n', result)
