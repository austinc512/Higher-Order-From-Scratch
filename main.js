function mapFromScratch(arr, func) {
  const manipArr = [];
  for (let i = 0; i < arr.length; i++) {
    manipArr.push(func(arr[i]));
  }
  return manipArr;
}

const exArr1 = [1, 2, 3, 4, 5];
const exFunc1 = (element) => element * 2;

console.log(mapFromScratch(exArr1, exFunc1));

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
  let accumulator = 0;
  for (item of arr) {
    accumulator += item.amount;
  }
  return accumulator;
};

console.log(reduceFromScratch(testFoodOrder));

const testCondition = (element) => element > 10;
const unfilteredArray = [1, 2, 3, 4, 4, 5, 4, 6, 7, 8, 9, 10, 44, 55, 2, 34];

const filterFromScratch = (arr, func) => {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
};

console.log(filterFromScratch(unfilteredArray, testCondition));
