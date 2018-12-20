def inorder(root)
    if !root
        return []
    else
        res = []
        depth = 0
        traverse = lambda do |node, depth|
            traverse.call(node.left, depth + 1) if node.left
            res << [node.val, depth]
            traverse.call(node.right, depth + 1) if node.right
            res
        end
        traverse.call(root, depth)
    end
end


def is_symmetric(root)
    return true if !root
    left_tree, right_tree = inorder(root.left), inorder(root.right).reverse
    return false if left_tree.length != right_tree.length
    left_tree.each_with_index do |ele, idx|
      lval, rval = ele[0], right_tree[idx][0]
      ldepth, rdepth = ele[1], right_tree[idx][1]
      return false if lval != rval || (lval == rval && ldepth != rdepth)
    end
    true
end
