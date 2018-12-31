def range_sum_bst(root, l, r)
    if (!root)
        return
    else
        sum = 0
        traverse = lambda do |node|
            traverse.call(node.left) if node.left
            sum += node.val if node.val >= l && node.val <= r
            traverse.call(node.right) if node.right
        end
        traverse.call(root)
        return sum
    end
end
