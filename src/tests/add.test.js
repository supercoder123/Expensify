const add = (a, b) => a + b;
const generateGreeting = (name = "anonymous") => {
  return `Hello ${name}`;
};

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should return hello mike", () => {
  const retName = generateGreeting("Mike");
  expect(retName).toBe("Hello Mike");
});

test("should return no name ", () => {
  const retName = generateGreeting();
  expect(retName).toBe("Hello anonymous");
});
