from ds.linked_list import LinkedList


def find_mid(ll):
    """
    Find the midpoint of a linked list without counter or size.
    Return the node that is the middle.
    """
    current_node = ll.head
    while current_node.next:
        current_node = current_node.next


def verify_circular(ll):
    """
    Return true if this LL is circular.
    """
    first_pointer = ll.head
    second_pointer = ll.head
    while second_pointer.next and second_pointer.next.next:
        first_pointer = first_pointer.next
        second_pointer = second_pointer.next.next
        if first_pointer == second_pointer:
            return True
    return False


def from_last(ll, n):
    """
    Return the node in a LL that is n nodes away from the end.
    This method does not make use of the length of the LL.
    """
    first_pointer = ll.head
    second_pointer = ll.head
    for i in range(n):
        second_pointer = second_pointer.next
    while second_pointer.next:
        first_pointer = first_pointer.next
        second_pointer = second_pointer.next
    return first_pointer


if __name__ == '__main__':
    ll = LinkedList()
    for i in range(10):
        ll.insertFirst(i)
    print(ll)
    print(from_last(ll, 2))
