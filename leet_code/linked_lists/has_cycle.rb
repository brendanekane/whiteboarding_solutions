def has_cycle(head)
  return false if !head || !head.next

  slow = head
  fast = head

  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
    return true if fast == slow
  end
  slow == fast
end
