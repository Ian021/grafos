class Node {
  constructor(id, location) {
    this.id = id;
    this.location = location;
    this.connections = [];
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
  addOneWayConnection(connectedNode) {
    this.connections.push(connectedNode.id);
  }
  addTwoWayConnection(connectedNode) {
    this.connections.push(connectedNode.id);
    connectedNode.addOneWayConnection(this);
  }
  retrieveConnections() {
    return this.connections;
  }
}

module.exports = Node;
