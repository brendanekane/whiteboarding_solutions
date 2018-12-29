def inorder(root)
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

def get_minimum_difference(root)
    traversal = inorder(root)
    diff = nil;
    traversal.each_with_index do |el, idx|
        break if idx == traversal.length - 1
        new_diff = traversal[idx+1] - traversal[idx]
        diff = new_diff if diff == nil || new_diff < diff
    end
    diff
end
