from tree_node import TreeNode


class BSTTreeNode(TreeNode):
    """
    An BST TreeNode.
    """

    def addChild(self, value):
        """
        Respect the BST
        """
        print('BSTTreeNode')
        newTreeNode = BSTTreeNode(value)
        if value <= self.value:
            self.children['left'] = newTreeNode
        else:
            self.children['right'] = newTreeNode
