from ds.tree import Tree


def level_width(current_node, widths, level):
    """
    Recursively return a dictionary that keys are level of the tree
    and width of the corresponding level is the value.
    Param:
    current_node (TreeNode): the current TreeNode to use.
    widths (Dict key(int): value(int)): dict that contains levels and corresponding widths
    """
    children_count = len(current_node.children.values())
    if children_count <= 0:
        # leaf node
        return
    elif level in widths:
        widths[level] += children_count
    else:
        widths[level] = children_count

    for child in current_node.children.values():
        level_width(child, widths, level + 1)


if __name__ == '__main__':
    tree = Tree(0)
    for i in range(5):
        tree.root.addChild(i)
        for j in range(5):
            tree.root.children[i].addChild(j)
    # print(tree.breadthFirstTraverse())
    result = {0: 1}
    level_width(tree.root, result, 1)
    print(result)
