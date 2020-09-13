Graph = require("../");

test("add node", () => {
  const graph = new Graph();

  const node1 = graph.addNode({ x: 1 });
  expect(node1.info().id).toBe("x1");
  expect(node1.info().location).toStrictEqual({ x: 1 });

  const node2 = graph.addNode({ a: 21, b: 95 });
  expect(node2.info().id).toBe("a21b95");
  expect(node2.info().location).toStrictEqual({ a: 21, b: 95 });
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

test("add node with connections", () => {
  const graph = new Graph();

  const node1 = graph.addNode({ x: 1 }, [{ x: 2 }, { x: 0 }]);
  const node2 = graph.retrieveNodeByLocation({ x: 2 });
  const node3 = graph.retrieveNodeByLocation({ x: 0 });

  expect(node1.retrieveConnections()).toContain(node2.id);
  expect(node1.retrieveConnections()).toContain(node3.id);

  expect(node2).toBeDefined();
  expect(node3).toBeDefined();
});

test("add or update node with connections", () => {
  const graph = new Graph();

  node1 = graph.addNode({ x: 1 });
  node1 = graph.addOrUpdateNode({ x: 1 }, [{ x: 2 }, { x: 0 }]);
  node2 = graph.retrieveNodeByLocation({ x: 2 });
  node3 = graph.retrieveNodeByLocation({ x: 0 });

  expect(node1.retrieveConnections()).toContain(node2.id);
  expect(node1.retrieveConnections()).toContain(node3.id);

  expect(node2).toBeDefined();
  expect(node3).toBeDefined();
});
