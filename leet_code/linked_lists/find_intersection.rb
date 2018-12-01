def find_intersection(head_a, head_b)
  return nil if !head_a || !head_b
  return head_a if head_a == head_b

  list_one = head_a
  list_two = head_b

  while list_one && list_two && (list_one != list_two)
    list_one = list_one.next
    list_two = list_two.next

    return list_one if list_one == list_two
    list_one = head_b if !list_one
    list_two = head_a if !list_two
  end
  list_one
end
