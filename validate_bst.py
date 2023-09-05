from random import randint
from ds.binary_search_tree import BinarySearchTree


def validateBST(current_node, left_parents=[], right_parents=[]):
    """
    Return True if tree is true BST.
    """

    print('\n')
    print(f'Node: {current_node.value}')
    print(f'Children: {current_node.children}')
    print(f'Left Parents: {left_parents}')
    print(f'Right Parents: {right_parents}')

    if 'left' not in current_node.children \
            and 'right' not in current_node.children:
        return True

    # verify children adhere to BST
    if 'left' in current_node.children and \
            current_node.children['left'].value > current_node.value:
        return False
    if 'right' in current_node.children and \
            current_node.children['right'].value < current_node.value:
        return False

    # verify current node adhere to BST in relation to all parents
    if len(right_parents):
        if not all(current_node.value <= element for element in right_parents):
            return False
    if len(left_parents):
        if not all(current_node.value >= element for element in left_parents):
            return False

    result_left = True
    result_right = True
    # register current node in the parent history
    if 'left' in current_node.children:
        new_right_parents = right_parents.copy()
        new_right_parents.append(current_node.value)
        result_left = validateBST(
            current_node.children['left'], left_parents, new_right_parents)
    if 'right' in current_node.children:
        new_left_parents = left_parents.copy()
        new_left_parents.append(current_node.value)
        result_right = validateBST(
            current_node.children['right'], new_left_parents, right_parents)

    return result_left and result_right


def validateBST2(current_node, current_min=None, current_max=None):
    """
    Validate BST using min/max way.    
    """
    if (current_min and current_node.value < current_min) or \
            (current_max and current_node.value > current_max):
        return False

    if 'left' in current_node.children:
        return validateBST2(current_node.children['left'], current_min, current_node.value)

    if 'right' in current_node.children:
        return validateBST2(current_node.children['right'], current_node.value, current_max)

    return True


if __name__ == '__main__':
    tree = BinarySearchTree(randint(1, 50))
    for i in range(1, 10):
        new_node_value = randint(1, 50)
        print(f'Inserting {new_node_value}')
        tree.addChildBST(new_node_value)
    print(validateBST2(tree.root))
