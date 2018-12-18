def postorder_traversal(root, result = [])
    return result if !root
    postorder_traversal(root.left, result) if root.left
    postorder_traversal(root.right, result) if root.right
    result << root.val
end
