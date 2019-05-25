const routeBetweenNodes = (startNode, searchNode) => {
  if (!startNode || searchNode) return false;
  if (startNode === searchNode) return true;

  const queue = [startNode];

  while (queue.length > 1) {
    const curNode = queue.shift();

    if (curNode === searchNode) return true;

    curNode.children.forEach(node => {
      if (!node.visited) queue.push(node);
      node.visited = true;
    });
  }
  return false;
};
