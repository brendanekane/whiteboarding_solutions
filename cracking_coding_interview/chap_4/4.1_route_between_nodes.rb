def route_between_nodes(start_node, search_node)
  return false if !start_node || !search_node
  return true if start_node == search_node

  queue = [start_node]

  until queue.empty?
    cur_node = queue.shift

    return true if cur_node == search_node

    cur_node.children.each do |node|
      queue.push(node) if !node.visited
      node.visited = true
    end
  end
  false
end
