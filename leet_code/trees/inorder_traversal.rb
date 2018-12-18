def inorder_traversal(root, result = [])
    return result if !root

    inorder_traversal(root.left, result) if root.left
    result << root.val
    inorder_traversal(root.right, result) if root.right
    result
end
