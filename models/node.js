class Node {
  constructor(id, location) {
    this.id = id;
    this.location = location;
    this.connections = {};
    this.previousNodeId = null;
  }
  toString() {
    return this.id;
  }
  info() {
    const properties = {};
    Object.entries(Object.getOwnPropertyDescriptors(this)).map(obj => {
      properties[obj[0]] = obj[1].value;
    });
    return properties;
  }
  addOneWayConnection(connectedNode, effort) {
    this.connections[connectedNode.id] = {
      effort: effort ? effort : 1
    };
  }
  addTwoWayConnection(connectedNode, effort1, effort2) {
    this.addOneWayConnection(connectedNode, effort1);
    connectedNode.addOneWayConnection(this, effort2);
  }
  retrieveConnections() {
    return Object.entries(this.connections).map(([key, value]) => {
      return { id: key, effort: value.effort };
    });
  }
  setPreviousNode(node) {
    this.previousNodeId = node.id;
  }
}

module.exports = Node;
