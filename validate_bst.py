from ds.binary_search_tree import BinarySearchTree


def validateBST(current_node, left_parents=[], right_parents=[]):
    """
    Return True if tree is true BST.
    """

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

    # register current node in the parent history
    if 'left' in current_node.children:
        right_parents.append(current_node.value)
        result_left = validateBST(
            current_node.children['left'], left_parents, right_parents)
    if 'right' in current_node.children:
        left_parents.append(current_node.value)
        result_right = validateBST(
            current_node.children['right'], left_parents, right_parents)

    return result_left and result_right


if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(10):
        tree.addChildBST(i)
    print(validateBST(tree))
