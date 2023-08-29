from ds.tree import Tree


def level_width(tree):
    root_node = tree.root()
    return level_width_helper(root_node)


def level_width_helper(current_parent_node, result=[1]):
    """
    Recursively complete the list showing each tree level's children count.
    """
    current_children = current_parent_node.children.values()
    result.insert(0, len(current_children))

    for child in current_children:
        current_children = child.children.values()
        result.insert(0, len(current_children))


if __name__ == '__main__':
    tree = Tree(0)
    for i in range(1, 5):
        tree.root.addChild(i)
        for j in range(i, 5):
            tree.root.children[i].addChild(j)
    print(level_width(tree))
