def is_valid_bst(root)
  return true if !root || (!root.left && !root.right)
  result = true
  inorder = []
  traverse = lambda do |node|
    traverse.call(node.left) if node.left
    inorder << node.val
    if inorder.length > 1 && inorder[-1] <= inorder[-2]
      result = false;
    end
    traverse.call(node.right) if node.right
  end
  traverse.call(root)
  result
end
