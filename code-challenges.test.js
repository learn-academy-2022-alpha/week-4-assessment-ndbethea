// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Pseudo Code
// create describe statement with new const
// create let statements with expected output
// create an  it statement that describe the function
// create expect statement with expected outputs

describe("shuffleArr", () => {
  let shuffleArr1 = ["yellow", "blue", "pink", "green"];
  let shuffleArr2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
  it("that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffleArr(colors1)).toEqual(shuffleArr1);
    expect(shuffleArr(colors2)).toEqual(shuffleArr2);
  });
});

//ReferenceError: shuffleArr is not defined

// b) Create the function that makes the test pass.

// Pseudo Code
// create const shuffleArr
// set up a function that takes in arrays
// create new var for spliced numbers to be stored
// create a for loop that removes the first item and shuffles the rest
// return your newArr
// console log colors1 and colors2

const shuffleArr = (array) => {
  array.splice(0);
  var newArr = array.splice(0);
  for (i = 0; i < array.length; i++) {
    if (array.length > 0) {
      newArr.push(array.splice(Math.floor(Math.random() * array.length), 1));
    }
  }
  return newArr;
};
console.log(shuffleArr(colors1));
console.log(shuffleArr(colors2));

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6];
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24];
// Expected output: [5, 109]

// Pseudo Code
// create describe statement with new const
// create an it statement that describe the function
// create expect statement with expected outputs

describe("numArr", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    expect(numArr(nums1)).toEqual(expect.arrayContaining([-8, 90]));
    expect(numArr(nums2)).toEqual(expect.arrayContaining([5, 109]));
  });
});

//ReferenceError: numArr is not defined

// b) Create the function that makes the test pass.

// create const numArr
// set up a function that takes in an array
// create new let = min and max
// return both min and max Arr

const numArr = (array) => {
  let minArr = Math.min(...array);
  let maxArr = Math.max(...array);
  return [minArr, maxArr];
};

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3];
const testArray2 = [7, 8, 2, 3, 1, 5, 4];
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// Pseudo Code
// create describe statement with new const
// create an  it statement that describe the function
// create expect statement with expected outputs from taking in both arrays values

describe("noDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(noDuplicates(testArray1, testArray2)).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});

//ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.

// create const noDuplicates
// set up a function that takes in an array 1 and array 2
// create new set

const noDuplicates = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
