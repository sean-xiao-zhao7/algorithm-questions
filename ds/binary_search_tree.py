from tree import Tree
from bst_tree_node import BSTTreeNode


class BinarySearchTree(Tree):
    """
    BST.
    """

    def __init__(self, initialNodeValue) -> None:
        self.root = BSTTreeNode(initialNodeValue)

    def addChildBST(self, value):
        """
        Add an BSTTreeNode while respecting BST.
        Params:
        value (int): value of the new node.
        """
        target_node = self.root
        while target_node.children != {}:
            if target_node.value > value:
                if 'left' in target_node.children:
                    target_node = target_node.children['left']
                else:
                    break
            else:
                if 'right' in target_node.children:
                    target_node = target_node.children['right']
                else:
                    break
        target_node.addChild(value)


if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(10):
        tree.addChildBST(i)
    tree.breadthFirstTraverse()
