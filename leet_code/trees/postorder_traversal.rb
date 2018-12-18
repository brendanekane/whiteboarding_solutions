def postorder_traversal(root)
  return [] if !root
  result = []
  result.concat(postorder_traversal(root.left))
  result.concat(postorder_traversal(root.right))
  result << (root.val)
  result
end

# another solution

def postorder_traversal2(root, result = [])
    return result if !root
    postorder_traversal(root.left, result) if root.left
    postorder_traversal(root.right, result) if root.right
    result << root.val
end


# another solution

def postorder_traversal3(root)
  if !root
    return []
  else
    result = []
    traverse_rec = lambda do |node|
      traverse_rec.call(node.left) if node.left
      traverse_rec.call(node.right) if node.right
      result << node.val
    end
    traverse_rec.call(root)
    result
  end
end
