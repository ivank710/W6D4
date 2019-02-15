class DomNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(opt) {
    if (opt) {
      this.arr.forEach(node => node.innerHTML = opt);
    } else {
      return arr[0].innerHTML;
    }
  }

  empty() {
    this.arr.forEach(node => node.html = "")
  }

  append(arg) {
    let args = Array.from(arg);
    for(let i = 0; i < args.length; i++) {
      let ele = args[i];

      this.arr.forEach(node => node.innerHTML += ele)
    }
  }

  attrGetter(node, attribute) {
    let idx = this.arr.indexOf(node);
    return this.arr[idx].attribute;
  }

  attrSetter(node, attribute, value) {
    let idx = this.arr.indexOf(node);
    this.arr[idx].attribute = value;
  }

  addClass(node, newClass, classValue) {
    let idx = this.arr.indexOf(node);
    this.arr[idx].newClass = classValue;
  }

  removeClass(node, oldClass) {
    let idx = this.arr.indexOf(node);
    this.arr[idx].oldClass = "";
  }

  children() {
    let childrenArray = Array();

    this.arr.forEach(node => {
      node.children.forEach( child => {
        this.attrSetter(child, parent, node)
        childrenArray.push(child) 
      });
    })

    return new DomNodeCollection(childrenArray);
  }

  parent() {
    let parentArray = Array();

    this.arr.forEach(node => {
      if (node.parent) parentArray.push(parent);
    })

    return new DomNodeCollection(parentArray);
  } 

  find(arg) {
    let parentArray = this.parent().arr;
    let childrenarray = this.children().arr;
    let allNodes = this.arr.concat(parentArray).concat(childrenArray);
    let matchingNodes = Array();

    allNodes.forEach (node => {
      if (node.class === arg || node.attribute === arg) matchingNodes.push(node);
    })

    return new DomNodeCollection(allNodes);
  }

  remove() {
    this.arr.forEach(node => node.innerHTML = "")
  }
  
}


export default DomNodeCollection