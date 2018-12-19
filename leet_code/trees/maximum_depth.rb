def max_depth(root)
    return 0 if !root
    answer, depth = 0, 0

    traverse = lambda do |node, depth|
        return depth if !node
        left_max = traverse.call(node.left, depth+1)
        right_max = traverse.call(node.right, depth+1)
        answer = [left_max, right_max].max
    end
    traverse.call(root, depth)
end
