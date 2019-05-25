def find_length(head)
  length = 1
  cur_node = head

  while cur_node.next
    length += 1
    cur_node = cur_node.next
  end

  length
end

def linked_list_palindrome(head)
  return false if !head
  return true if !head.next

  length = find_length(head)
  count = 0
  cur_node = head
  stack = []

  ## create stack with first half of list
  while count < length / 2
    stack << cur_node.val
    cur_node = cur_node.next
    count += 1
  end

  ## skip middle node if the list is an odd length
  cur_node = cur_node.next if length.odd?

  ## compare first half of list with second half of list
  until stack.empty?
    cur_stack = stack.pop
    return false if cur_stack != cur_node.val
    cur_node = cur_node.next
  end
  true
end
