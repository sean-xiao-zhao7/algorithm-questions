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


if __name__ == '__main__':
    ll = LinkedList()
    for i in range(10):
        ll.insertFirst(i)
    # ll.tail.next = ll.head
    print(verify_circular(ll))
