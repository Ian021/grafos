const Node = require("./node");

class Graph {
  constructor() {
    this.nodes = {};
  }
  addNode(location) {
    const id = this.generateIdForLocation(location);
    if (!this.nodes[id]) {
      const newNode = new Node(id, location);
      this.nodes[newNode] = newNode;
      return newNode;
    }
  }
  clear() {
    this.nodes = {};
  }
  retrieveNodeById(id) {
    return this.nodes[id];
  }
  retrieveNodeByLocation(location) {
    return this.nodes[this.generateIdForLocation(location)];
  }
  retrieveAllNodes() {
    return this.nodes;
  }
  generateIdForLocation(location) {
    let id = "";
    const orderedLocation = Object.entries(location).sort((a, b) => {
      return a[0] >= b[0] ? 1 : -1;
    });
    for (const [key, value] of orderedLocation) {
      id = id.concat(`${key}${value}`);
    }
    return id;
  }
}

module.exports = Graph;
