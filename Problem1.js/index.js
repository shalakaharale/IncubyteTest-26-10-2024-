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

console.log(addNumbers("1\n3; 4 1"));
