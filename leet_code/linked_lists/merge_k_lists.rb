# // Merge k sorted linked lists and return it as one sorted list.
# //
# // Example:
# //
# // Input:
# // [
# //   1->4->5,
# //   1->3->4,
# //   2->6
# // ]
# // Output: 1->1->2->3->4->4->5->6
#
#

def merge_k_lists(arr)
  new_head, cur = null, null

  until arr.empty?
    next_val, idx = nil, 0

    arr.each_with_index do |node, i|
      next if node == nil
      if next_val == nil || node.val < next_val
        next_val = node.val
        idx = i
      end
    end

    if arr[idx] == nil
      arr.delete_at(idx)
      next
    elsif new_head == nil
      new_head = ListNode.new(next_val)
      cur = new_head
    else
      cur.next = ListNode.new(next_val)
      cur = cur.next
    end
    arr[idx] = arr[idx].next
  end
  new_head
end
