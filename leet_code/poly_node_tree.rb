class PolyTreeNode
  def initialize(value)
    @val = value
    @parent = nil
    @children = []
  end

  def value
    @val
  end

  def parent
    @parent
  end

  def children
    @children
  end

  def parent=(node)
    if !node
      @parent = nil
      return
    end
    return if self.parent == node
    @parent.children.delete(self) if @parent
    @parent = node
    @parent.children << self unless @parent.nil?
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    raise "no child node" if child && !@children.include?(child)
    child.parent = nil
  end
end
