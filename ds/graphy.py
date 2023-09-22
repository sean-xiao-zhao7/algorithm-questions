class Graph:
    def __init__(self) -> None:
        self.graph = []

    def addEdge(self, node1, node2):
        """
        Add an edge connected to existing edges.
        Params:
        edge (list[int]): list of 2 items, each integer, representing 2 nodes to be added.
        """
        self.graph.append([node1, node2])


if __name__ == '__main__':
    graph = Graph()
    graph.append([0, 1])
