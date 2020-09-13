Node = require("../node");

test("create node", () => {
  const node = new Node("a", "b");
  expect(node.toString()).toBe("a");
  expect(node.info().id).toBe("a");
  expect(node.info().location).toBe("b");
});

test("add one way connection", () => {
  const node1 = new Node("a", "b");
  const node2 = new Node("a", "c");
  node1.addOneWayConnection(node2);
  expect(node1.retrieveConnections()[0].id).toBe(node2.id);
  expect(node2.retrieveConnections()[0]).toBeUndefined();
});

test("add two way connection", () => {
  const node1 = new Node("a", "b");
  const node2 = new Node("a", "c");
  node1.addTwoWayConnection(node2);
  expect(node1.retrieveConnections()[0].id).toBe(node2.id);
  expect(node2.retrieveConnections()[0].id).toBe(node1.id);
});
