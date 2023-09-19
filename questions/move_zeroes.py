from utils.random import make_random_int_list


def move_zeroes_mine(input_list):
    """
    Given an integer array nums, move all 0's to the end of it - in place -
    while maintaining the relative order of the non-zero elements.
    """
    for index, item in enumerate(input_list):
        if item == 0:
            input_list.append(item)
            input_list.pop(index)


def move_zeroes_append(input_list):
    """
    Given an integer array nums, move all 0's to the end of it - in place -
    while maintaining the relative order of the non-zero elements.
    """
    index = 0
    for item in input_list:
        if item == 0:
            continue
        else:
            input_list[index] = item
            index += 1
    return input_list + [0] * (len(input_list) - index)


if __name__ == '__main__':
    test = make_random_int_list(20, 20, True, 0)
    print(test)
    move_zeroes_append(test)
    # move_zeroes_mine(test)
    print('\n', test)
