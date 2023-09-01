from ds.binary_search_tree import BinarySearchTree


def validateBST(tree):
    """
    Return True if tree is true BST.
    """
    nodes_this_level = [tree.root]
    while len(nodes_this_level) > 0:
        for current_node in nodes_this_level:
            if current_node.value < current_node.children['left'].value \
                    or current_node.value > current_node.children['right'].value:
                return False
        nodes_this_level = []
        for current_node in nodes_this_level:
            nodes_this_level + current_node.children.values()


if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(10):
        tree.addChildBST(i)
    validateBST(tree)
