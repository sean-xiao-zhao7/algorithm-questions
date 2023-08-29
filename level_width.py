from ds.tree import Tree


def level_width(tree):
    result = [1]
    level_width_helper(tree.root, result)
    return result


def level_width_helper(current_parent_node, result):
    """
    Recursively complete the list showing each tree level's children count.
    """
    if current_parent_node.children != {}:
        total = 0
        for child in current_parent_node.children.values():
            total += 1
            level_width_helper(child, result)
        result.insert(0, total)


if __name__ == '__main__':
    tree = Tree(0)
    for i in range(5):
        tree.root.addChild(i)
        for j in range(5):
            tree.root.children[i].addChild(j)
    print(level_width(tree))
