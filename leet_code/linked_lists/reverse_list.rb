def reverse_list(head)
    return nil if !head
    return head if !head.next

    final_head = head
    next_node = head.next

    while next_node
        head.next = next_node.next
        next_node.next = final_head
        final_head = next_node
        next_node = head.next
    end
    final_head
end
