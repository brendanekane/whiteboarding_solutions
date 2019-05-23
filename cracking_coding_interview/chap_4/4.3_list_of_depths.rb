class ListNode
  def initialize(val)
    @val = val
    @next = nil
  end
end

def list_of_depths(root)
  return [] if !root
  return [ListNode.new(root.val)] if !root.left && !root.right

  queue = [root]
  result = []

  while queue.length > 0
    sub_arr = []
    length = queue.length

    (0...length).each do |idx|
      cur_node = queue.shift
      new_node = ListNode.new(cur_node.val)

      sub_arr[idx-1].next = new_node if idx != 0
      sub_arr << new_node

      queue << cur_node.left if cur_node.left
      queue << cur_node.right if cur_node.right
    end
    result << sub_arr[0]
  end
  result
end
