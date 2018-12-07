def rotate_list(head, k)
    return nil if !head
    return head if !head.next

    tail = head
    length, step = 1, 1

    while tail.next
        length += 1
        tail = tail.next
    end

    return head if ((length - k) % length) == 0

    cur, new_head = head, head.next

    while step < ((length - k) % length)
        cur, new_head = cur.next, new_head.next
        step += 1
    end

    cur.next, tail.next = nil, head
    new_head
end
