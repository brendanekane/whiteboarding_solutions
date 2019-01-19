# // Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
# //
# // Note: If the given node has no in-order successor in the tree, return null.
# //
# // Example 1:
# //
# // Input: root = [2,1,3], p = 1
# //
# //   2
# //  / \
# // 1   3
# //
# // Output: 2


def inorder(root)
  if !root
    return []
  else
    result = []
    traverse = lambda do |node|
      traverse.call(node.left) if node.left
      result.push(node)
      traverse.call(node.right) if node.right
    end
    traverse.call(root)
    result
  end
end

def inorder_successor(root, p)
  dfs_arr, idx = inorder(root), -1

  dfs_arr.each_with_index do |node, i|
    if node.val == p.val
      idx = i
      break;
    end
  end

  return null if idx == -1 || !dfs_arr[idx+1]
  dfs_arr[idx+1]
end
