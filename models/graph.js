const Node = require("./node");

class Graph {
  constructor() {
    this.nodes = {};
    this.effort = 1;
  }
  setDefaultEffort(effort) {
    this.effort = effort;
  }
  addNode(location, connections) {
    const id = this.generateIdForLocation(location);
    if (!this.nodes[id]) {
      let node = new Node(id, location);
      this.nodes[node] = node;
      if (connections) {
        node = this.addConnections(node, connections);
      }
      return node;
    }
  }
  addOrUpdateNode(location, connections) {
    const id = this.generateIdForLocation(location);
    let node = this.nodes[id];
    if (!node) {
      node = new Node(id, location);
      this.nodes[node] = node;
    }
    if (connections) {
      node = this.addConnections(node, connections);
    }
    return node;
  }
  addConnections(node, connections) {
    connections.forEach(connection => {
      const connectedNode = this.addNode(connection.location);
      node.addOneWayConnection(
        connectedNode,
        connection.effort ? connection.effort : this.effort
      );
    });
    return node;
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
