from ds.binary_search_tree import BinarySearchTree

if __name__ == '__main__':
    tree = BinarySearchTree(0)
    for i in range(10):
        tree.addChildBST(i)
    tree.breadthFirstTraverse()
