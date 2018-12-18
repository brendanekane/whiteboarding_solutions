def inorder_traversal(root)
  return [] if !root
  result = []
  result.concat(inorder_traversal(root.left))
  result << root.val
  result.concat(inorder_traversal(root.right))
  result
end

# another solution

def inorder_traversal2(root, result = [])
    return result if !root
    inorder_traversal(root.left, result) if root.left
    result << root.val
    inorder_traversal(root.right, result) if root.right
    result
end


# another solution

def inorder_traversal3(root)
  if !root
    return []
  else
    result = []
    traverse_rec = lambda do |node|
      traverse_rec.call(node.left) if node.left
      result.push(node.val)
      traverse_rec.call(node.right) if node.right
    end
    traverse_rec.call(root)
    result
  end
end
