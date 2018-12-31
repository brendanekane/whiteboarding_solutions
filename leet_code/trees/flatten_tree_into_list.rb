def preorder(root)
  return [] if !root
  result = [root]
  result.concat(preorder(root.left))
  result.concat(preorder(root.right))
  result
end


def flatten_tree_into_list(root)
  return nil if !root
  traversal = preorder(root)
  traversal.each_with_index do |node, idx|
    if node == traversal[-1]
      node.left, node.right = nil, nil
    else
      node.left, node.right = nil, traversal[idx+1]
    end
  end
  root
end
