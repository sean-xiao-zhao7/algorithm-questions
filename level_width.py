from ds.tree import Tree


def level_width(tree):
    result = [1]
    level_width_helper(tree.root.children.values(), result)
    return result


def level_width_helper(current_children, result):
    """
    Recursively complete the list showing each tree level's children count.
    """
    count = 0
    for child in current_children:
        count += 1
    result.insert(0, count)
    for child in current_children:
        level_width_helper(child.children.values(), result)


if __name__ == '__main__':
    tree = Tree(0)
    for i in range(5):
        tree.root.addChild(i)
        for j in range(5):
            tree.root.children[i].addChild(j)
    print(level_width(tree))
