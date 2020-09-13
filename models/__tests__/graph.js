Graph = require("../");

test("add node", () => {
  const graph = new Graph();

  const node1 = graph.addNode({ x: 1 });
  expect(node1.info()).toStrictEqual({ id: "x1", location: { x: 1 } });

  const node2 = graph.addNode({ a: 21, b: 95 });
  expect(node2.info()).toStrictEqual({
    id: "a21b95",
    location: { a: 21, b: 95 }
  });
});

test("add existing node fails", () => {
  const graph = new Graph();

  const node1 = graph.addNode({ x: 1 });
  const node2 = graph.addNode({ x: 1 });

  expect(node2).toBeUndefined();
});

test("retrieve created node by id", () => {
  const graph = new Graph();

  const createdNode = graph.addNode({ x: 5 });
  const retrivedNode = graph.retrieveNodeById(createdNode.id);

  expect(createdNode).toStrictEqual(retrivedNode);
});

test("retrieve created node by location", () => {
  const graph = new Graph();

  const createdNode = graph.addNode({ x: 5 });
  const retrivedNode = graph.retrieveNodeByLocation({ x: 5 });

  expect(createdNode).toStrictEqual(retrivedNode);
});

test("retrive all nodes", () => {
  const graph = new Graph();

  const node1 = graph.addNode({ x: 5 });
  const node2 = graph.addNode({ x: 6 });
  const node3 = graph.addNode({ x: 7 });

  const allNodes = graph.retrieveAllNodes();

  expect(allNodes[node1]).toBeDefined();
  expect(allNodes[node2]).toBeDefined();
  expect(allNodes[node3]).toBeDefined();
});

test("clear all nodes", () => {
  const graph = new Graph();

  const node1 = graph.addNode({ x: 5 });
  const node2 = graph.addNode({ x: 6 });
  const node3 = graph.addNode({ x: 7 });

  graph.clear();

  expect(graph.retrieveNodeById(node1.id)).toBeUndefined();
  expect(graph.retrieveNodeById(node2.id)).toBeUndefined();
  expect(graph.retrieveNodeById(node3.id)).toBeUndefined();
});