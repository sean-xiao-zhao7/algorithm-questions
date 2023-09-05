from tree_node import TreeNode


class BSTTreeNode(TreeNode):
    """
    An BST TreeNode.
    """

    def addChild(self, value):
        """
        Respect the BST
        """
        newTreeNode = BSTTreeNode(value)
        if value <= self.value:
            print(f'Inserted {value} to the left.')
            self.children['left'] = newTreeNode
        else:
            print(f'Inserted {value} to the right.')
            self.children['right'] = newTreeNode
