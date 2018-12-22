class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left = nil
    @right = nil
  end
end

def build_tree(preorder, inorder)
    return nil if preorder.empty?

    idx = inorder.index(preorder[0])
    new_node = TreeNode.new(preorder[0])

    new_node.left = build_tree(preorder[1..idx], inorder[0...idx])
    new_node.right = build_tree(preorder[idx+1..-1], inorder[idx+1..-1])
    new_node
end
