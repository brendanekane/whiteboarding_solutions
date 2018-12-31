def sum_root_to_leaf(root)
  return 0 if !root
  sum = 0
  traverse = lambda do |node, str_num = ""|
    str_num += node.val.to_s
    sum += str_num.to_i if !node.left && !node.right
    traverse.call(node.left, str_num) if node.left
    traverse.call(node.right, str_num) if node.right
  end
  traverse.call(root)
  sum
end
