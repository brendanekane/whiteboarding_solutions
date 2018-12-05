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

def create_new_list(str1, str2)
  sum = (str1.to_i + str2.to_i).to_s
  head = ListNode.new(sum[0].to_i)
  cur = head

  sum = sum.slice(1, sum.length)
  sum.each_char.with_index do |ch, idx|
      new_node = ListNode.new(ch.to_i)
      idx == 0 ? head.next = new_node : cur.next = new_node
      cur = new_node
  end
  head
end

def add_two_numbers(l1, l2)
    reverse1 = reverse_list(l1)
    reverse2 = reverse_list(l2)

    str1 = ""
    str2 = ""

    cur = reverse1
    while cur
        str1 += cur.val.to_s
        cur = cur.next
    end

    cur = reverse2
    while cur
        str2 += cur.val.to_s
        cur = cur.next
    end

    head = create_new_list(str1, str2)
    reverse_list(head)
end
