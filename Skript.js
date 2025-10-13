const array = [9, 8, 7, "a", 6, 5];

const result = array
  .filter((item) => typeof item === "number")
  .sort((a, b) => a - b);

console.log(result);
