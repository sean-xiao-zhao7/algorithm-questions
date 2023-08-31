from tree import Tree
from bst_tree_node import BSTTreeNode


class BinarySearchTree(Tree):
    """
    BST.
    """

    def __init__(self, initialNodeValue) -> None:
        self.root = BSTTreeNode(initialNodeValue)


if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(2):
        tree.root.addChild(i)
    for j, child in enumerate(tree.root.children.values()):
        for i in range(2):
            child.addChild(i)
    tree.breadthFirstTraverse()
