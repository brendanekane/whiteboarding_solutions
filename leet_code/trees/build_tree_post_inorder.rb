class TreeNode

  attr_accessor :val, :left, :right, :next
  def initialize(val)
    @val = val
    @left = nil
    @right = nil
    @next = nil
  end
end


def build_tree(inorder, postorder)
    return nil if inorder.empty?

    idx = inorder.index(postorder[-1])
    new_node = TreeNode.new(postorder[-1])

    new_node.left = build_tree(inorder[0...idx], postorder[0...idx])
    new_node.right = build_tree(inorder[idx+1..-1], postorder[idx...-1])
    new_node
end
