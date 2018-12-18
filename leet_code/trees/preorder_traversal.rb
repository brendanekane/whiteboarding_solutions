def preorder_traversal(root)
    return [] if !root
    result = [root.val]
    result.concat(preorder_traversal(root.left))
    result.concat(preorder_traversal(root.right))
    result
end
