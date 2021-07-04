// Imagine we have an access to a node of LinkedList. We do not have an access to LinkedList instance.
// How can we delete that Node from LinkedList

const deleteNodeFromLinkedList = (node) => {
    node.value = node.next.value;
    node.next = node.next.next;
};
