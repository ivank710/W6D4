import DomNodeCollection from './dom_node_collection.js';
// const domNode = new DomNodeCollection();


window.$l = $l;

function $l(selector) { 
  
  if (typeof selector === "string") {
    let nodeList = Array.from(document.querySelectorAll(selector))
    let newDomNode = new DomNodeCollection(nodeList);
    return newDomNode;
  } else if (selector instanceof HTMLElement) {
    let nodeList = Array.from(document.querySelectorAll(".name"))
    let newDomNode = new DomNodeCollection(nodeList);
    return newDomNode;
  }

};




