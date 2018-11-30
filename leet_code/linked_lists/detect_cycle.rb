def detect_cycle(head)
  return nil if !head || !head.next

  slow = head
  fast = head

  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
    break if fast == slow
  end

  return nil if !fast || !fast.next

  fast = head
  until fast == slow
    slow = slow.next
    fast = fast.next
  end
  fast
end
