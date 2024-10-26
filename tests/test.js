const addNumbers = (numAsString) => {
  const arr = numAsString.split(/['\n,; ]/);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 0) {
      return `negative numbers not allowed ${Number(arr[i])}`;
    }
    sum = sum + Number(arr[i]);
  }
  return sum;
};

test("Adds 2 + 2 to equal 4", () => {
  expect(addNumbers("2, 2")).toBe(4);
});

test("Adds 2 + 2 to equal 4", () => {
  expect(addNumbers("2\n, 2")).toBe(4);
});

test("Adds 2 + 2 to equal 4", () => {
  expect(addNumbers("2\n 5, 2;1")).toBe(10);
});
