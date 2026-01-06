const characterNames = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = characterNames;

const [, , trunks] = characterNames;

console.log({ p1, p2, p3 });
console.log({ trunks });

const returnsArrayFn = () => {
  return ["AB", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

// console.log(letters + 100);