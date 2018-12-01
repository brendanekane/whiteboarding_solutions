def remove_nth_node(head, n)
  return head if !head

  length, cur = 0, head

  while cur
    length += 1
    cur = cur.next
  end

  return head = head.next if n == length

  count, cur = 1, head
  
  while count < (length - n)
    cur = cur.next
    count += 1
  end
  cur.next = cur.next.next
  head
end
