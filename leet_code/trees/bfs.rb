def bfs(root)
    return [] if !root
    result, queue = [], [root]
    until queue.empty?
        height, length = 1, queue.length
        subarr = []
        while height <= length
            node = queue.shift
            subarr << node.val
            queue << node.left if node.left
            queue << node.right if node.right
            height += 1
        end
        result << subarr
    end
    result
end
