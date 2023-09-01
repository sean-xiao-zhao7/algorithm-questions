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

    def search(self, value):
        """
        Returns True if node with value exists in this BST.
        Params:
        value (int): the desired value.
        """
        current_node = self.root
        while current_node.children != {}:
            if current_node.value == value:
                return True
            elif current_node.value < value:
                if 'right' not in current_node.children:
                    return False
                current_node = current_node.children['right']
            else:
                if 'left' not in current_node.children:
                    return False
                current_node = current_node.children['left']


if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(10):
        tree.addChildBST(i)
    tree.breadthFirstTraverse()
    print(tree.search(5))
