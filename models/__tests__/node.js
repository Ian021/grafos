Node = require("../node");

test("create node", () => {
  const node = new Node("a", "b");
  expect(node.toString()).toBe("a");
  expect(node.info()).toStrictEqual({ id: "a", location: "b" });
});
