class PolyTreeNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }

  value(){
    return this.value;
  }

  parent() {
    return this.parent;
  }

  children() {
    return this.children;
  }

  setParent(node) {
    if (!node) {
      this.parent = null;
      return;
    } else if (self.parent === node) {
      return;
    }

    if (this.parent) {
      for (let i = 0; i < this.parent.children.length; i++) {
        if (this.parent.children[i] === node) {
          this.parent.children.splice(i,1);
        }
      }
    }
    this.parent = node;
    if (this.parent !== null) this.parent.children.push(this);
  }

  addChild(child) {
    child.parent = this;
  }

  childIncluded(child) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i] === child) return true;
    }
    return false;
  }

  removeChild(child) {
    if (child && this.childIncluded(child)) {
      throw "no child node";
    } else {
      child.parent = nil;
    }
  }
}
