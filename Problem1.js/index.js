const addNumbers = (numAsString) => {
  const arr = numAsString.split(/['\n,]/);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }
  return sum;
};

console.log(addNumbers("1\n3,5,6"));
