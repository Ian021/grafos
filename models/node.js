class Node {
  constructor(id, location) {
    this.id = id;
    this.location = location;
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
}

module.exports = Node;
