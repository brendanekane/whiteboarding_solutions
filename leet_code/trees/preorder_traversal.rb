def preorder_traversal(root, result = [])
  return result if !root
  result << root.val
  preorder_traversal(root.left, result) if root.left
  preorder_traversal(root.right, result) if root.right
  result
end

# another solution


def preorder_traversal2(root)
  return [] if !root
  result = [root.val]
  result.concat(preorder_traversal(root.left))
  result.concat(preorder_traversal(root.right))
  result
end

# another solution

def preorder_traversal3(root)
  if !root
    return []
  else
    result = []
    traverse_rec = lambda do |node|
      result << node.val
      traverse_rec.call(node.left) if node.left
      traverse_rec.call(node.right) if node.right
    end
    traverse_rec.call(root)
    result
  end
end
