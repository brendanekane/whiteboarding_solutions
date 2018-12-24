def connect_next(root)
  return if (!root)

  queue = [root]

  until queue.empty?
    len = queue.length
    new_queue = []
    (0...len).each do |n|
      cur = queue.shift
      queue.empty? ? cur.next = nil : cur.next = queue[0]
      new_queue << cur.left if cur.left
      new_queue << cur.right if cur.right
    end
    queue += new_queue
  end
end
