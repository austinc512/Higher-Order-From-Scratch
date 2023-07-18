function mapFromScratch(arr) {
  const newArr = arr.map((element) => element * 2);
  return newArr;
}

const exArr1 = [1, 2, 3, 4, 5];
// const exFunc1 = (element) => element * 2;

console.log(mapFromScratch(exArr1));

const testFoodOrder = [
  { order: "burger", amount: 15.1 },
  { order: "hotdog", amount: 10.5 },
  { order: "pizza", amount: 12.75 },
  { order: "burger", amount: 15.1 },
  { order: "burger", amount: 15.1 },
  { order: "pizza", amount: 12.75 },
  { order: "hotdog", amount: 10.5 },
  { order: "hotdog", amount: 10.5 },
  { order: "pizza", amount: 12.75 },
];

// const accumulator = (acc, curr) => acc + curr;

const reduceFromScratch = (arr) => {
  const amounts = [];
  for (item of arr) {
    amounts.push(item.amount);
  }
  let accumulator = amounts.reduce((acc, curr) => acc + curr, 0);
  return accumulator;
};

console.log(reduceFromScratch(testFoodOrder));

// const testCondition = (element) => element > 10;
const unfilteredArray = [1, 2, 3, 4, 4, 5, 4, 6, 7, 8, 9, 10, 44, 55, 2, 34];

const filterFromScratch = (arr) => {
  const filtered = arr.filter((element) => element > 10);
  return filtered;
};

console.log(filterFromScratch(unfilteredArray));
