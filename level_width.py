from ds.tree import Tree


def level_width(current_node, widths):
    """
    Recursively return a dictionary that keys are level of the tree
    and width of the corresponding level is the value.
    Param:
    current_node (TreeNode): the current TreeNode to use.
    widths (Dict key(int): value(int)): dict that contains levels and corresponding widths
    """
    pass


if __name__ == '__main__':
    tree = Tree(0)
    for i in range(5):
        tree.root.addChild(i)
        for j in range(5):
            tree.root.children[i].addChild(j)
    print(tree.breadthFirstTraverse())
    # print(level_width(tree))
