const arr = [1, 2, 4, 5, 7, 8, 9, 10, 2]

// FIND MISSING NUMBER FROM ARRAY OF SERIES
function findMissingValue() {
  const missingValue = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missingValue.push(arr[i] + 1)
    }
  }
  return missingValue
}
// console.log(findMissingValue());

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in if block won't exist here)

// FIBONACCI SEQUENCE
const fibonacciSeq = (num) => {
  const febSeq = [0, 1]
  while (num > febSeq.length) {
    let nextVal = febSeq[febSeq.length - 1] + febSeq[febSeq.length - 2]
    febSeq.push(nextVal)
  }
  return febSeq
}
// console.log(fibonacciSeq(5));

// SECOND WAY TO IMPLEMENT FIBONACCI
const calFibbonaci = (n) => {
  const values = [0, 1]
  let total = 1;
  for (let i = 0; i < n - 2; i++) {
    const element = values[i] + values[i + 1];
    values.push(element)
    total += element
  }
  console.log(values);
  return total
}

// console.log(arr.reduce((acc, curr) => curr > acc));

// console.log(arr.sort((a, b) => b- a));

function findMinMax(arr) {
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else if (min > arr[i]) {
      min = arr[i]
    }
  }
  return {
    min,
    max
  }
}

// console.log(findMinMax(arr));

// console.log('abc'[1]);

// Print number every after 1 sec, 2 sec, 3 sec and so on
function printNumber() {
  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      console.log('===printNumber====', i);
    }, i * 1000);
  }
}
// printNumber()

// CLOSURE
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}
//   let closureFunc = outer();
//   closureFunc();

function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
// var closureFunc = outer(5);
// console.log(closureFunc(3));

function outer() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
// var funcs = outer();
//   funcs[0](); 
//   funcs[1](); 
//   funcs[2](); 

function outer() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  }
}
// var closureFunc = outer();
// closureFunc();
// closureFunc();
// closureFunc();


function outerTwo() {
  var x = 0;
  setTimeout(() => {
    x++;
  }, 1000);
}
console.log('outerTwo', outerTwo());

function computeClosestToZero(ts) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  let negativeValue = ts.filter((val) => val < 0)
  let positiveValue = ts.filter((val) => val > 0)
  negativeValue = negativeValue.sort((a, b) => b - a)
  positiveValue = positiveValue.sort((a, b) => a - b)

  console.log(negativeValue);
  console.log(positiveValue);
  const smallestValue = Math.abs(negativeValue[0]) < Math.abs(positiveValue[0]) ? negativeValue[0] : positiveValue[0]
  return smallestValue;
}
// computeClosestToZero([1, 3, 4, -3, -6, -1])

// FIND DUPLICATE VALUES FROM ARRAY
const arrword = ['abd', 'maulik', 'the', 'prince', 'the', 'prince']

// USING FILTER
const duplicate = arrword.filter((val, index) => arrword.indexOf(val) !== index)
// console.log('===duplicate=====', duplicate);

// USING REDUCE WITH COUNT HOW MANY VALUES IN ARRAY
const res = arrword.reduce((prev, curr) => {
  const found = prev.find(val => val.word === curr)
  if (found) {
    found.count++
  } else {
    prev.push({ word: curr, count: 1 })
  }
  return prev
}, [])
// console.log('===res=====', res);

let cc = { greeting: 'Hey!' };
let dd;
dd = cc;
cc.greeting = 'Hello';
// console.log(d.greeting); // Hello

let c = 10;
let d;
d = c;
c = 11
// console.log(d); // 10

// var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
// girl(); // undefined

// let x = 51;
let boy = function () {
  console.log(x);
  let x = 50;
};
// boy(); // Reference error

// (function () {
//   console.log(1);
//   setTimeout(function () { console.log(2) }, 0);
//   setTimeout(function () { console.log(3) }, 1000);
//   console.log(4);
// })(); // 1,4,2,3

// Find the second smallest number ?
const findSmallNumber = (array) => {
  let smallest = array[0]
  let secondSmallest = array[0];
  array.forEach(val => {
    if (val < smallest) {
      secondSmallest = smallest
      smallest = val
    }
  });
  return secondSmallest
}
// console.log(findSmallNumber(arr));

// ROTATE ARRAY
const arr02 = [1, 2, 3, 4]
const rotateArray = (n, arr) => {
  while (n !== 0) {
    // FIRST WAY
    // const popValue = arr.pop()
    // arr = [popValue, ...arr]
    // n--

    //SECOND WAY
    const value = arr.pop()
    arr.unshift(value)
    n--
  }
  return arr
}
// console.log('rotateArray======',rotateArray(5, arr02));

// GENERATOR FUNCTION
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

const nuar = [{ value: 3 }, { value: 1 }, { value: 4 }, { value: 5 }, { value: 2 }]
// console.log(nuar.sort((a,b) => a-b));
// console.log(nuar.reduce((acc, curr) => curr > acc))
// console.log(nuar.reduce((acc, curr) => curr > acc));

let calculateArea = function (height = 100, width = 50) {
  // logic
  console.log('height===', height);
  console.log('width===', width);
}

// calculateArea(110, 20)

let language = "JavaScript";
let text = "";

for (let x of language) {
  text += x + " ";
}
// console.log(text);

const obj = { "a": 2, "b": { "x": 4, "y": { "foo": 3, "z": { "bar": 2 } } }, "c": { "p": { "h": 2, "r": 5 }, "q": 'ball', "r": 5 }, "d": 1, "e": { "nn": { "lil": 2 }, "mm": 'car' } }

let sum = 0;
const sumOfValues = (object) => {
  if (typeof object === 'number' && object % 2 === 0) {
    console.log('===object===', typeof object);
    sum += object
  } else if (typeof object === 'object') {
    for (const key in object) {
      sumOfValues(object[key])
    }
  }
  return sum
}

console.log(sumOfValues(obj));

/**
 * Sort array using bubble sort
 */
function sortArray() {
  let arr = [12, 10, 55, 15, 11, 14, 2, 16, 12, 2, 3]
  let sorted = true
  while (sorted) {
    sorted = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        sorted = true
        let temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}
// console.log(sortArray())

/**
 * Object assign value.
 */
var a = {}
b = { key: 2 }
c = { key: 3 }

a[b] = 123
a[c] = 456

console.log('======a[b]>>>>>>', a[b]); // 456

/**
 * Buffer
 */
const buffer = new Buffer(150)
const response = buffer.write('welcome to node.js')
console.log(response);

/**
 * function parameter
 */
function testFunction(...param) {
  console.log(param);
}
testFunction(1, 2, 3)


/**
 * fetch query param using javascript functions
 */
const strData = 'www.abc.com?name=prince&email=princemakavana@gmail.com'

function getParamVal(str) {
  const resObj = {}
  let queryParams = str.replace('www.abc.com?', '').split('&')
  queryParams = queryParams.map(value => {
    const [key, val] = value.split('=')
    resObj[key] = val
  })
  console.log(resObj);
}

getParamVal(strData)

/**
 * Find the largest string from string
 */

function longestSubstring(str) {
  const longestStr = []
  let resArr = []

  const strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    if (!resArr.includes(strArr[i])) {
      resArr.push(strArr[i])
    } else {
      longestStr.push(resArr.join(''))
      resArr = []
      resArr.push(strArr[i])
    }
  }
  longestStr.push(resArr.join(''))
  return longestStr.sort((a, b) => b.length - a.length)[0]
}

// console.log(longestSubstring('PriPPrincePrin'))

//  Find nearest to zero value
const newArr = [2, 5, 9, -3, 6, -4]

function findNearestToZero(arr) {
    const resArr = [];
    const sumOfValues = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            sumOfValues.push(arr[i] + arr[j])
            resArr.push([arr[i], arr[j]])
        }
    }
    const nearestToZero = [1,-1]
    const nearestIndex = sumOfValues.findindex((value) => nearestToZero.includes(value))
    return resArr[nearestIndex]
}

console.log(findNearestToZero(newArr))


//  Find highest n number of value
const intArr = [2,5,10,3,8,1,11,2,5,3]

function findnthHighestValue(arr, nthHighestValue) {
    const resSet = new Set(arr)
    const uniqueArr = [...resSet]
    return uniqueArr.sort((a,b) => b-a)[nthHighestValue-1]
}

console.log(findnthHighestValue(intArr, 5))


/**
 * GSPANN practical
 */

let itemsToDelete = ['name_id', 'user_id', 'givenname', 'sn']; 
let data = {  
      "user":{ 
         "name_id":"maruthi", 
         "session_index":"f5afcc-a608-4398", 
         "role":"Tester", 
         "attributes":{ 
            "identity/claims/user_id":["maruthi"], 
            "identity/claims/role":[ 
               "Tester", 
               "Developer", 
               "DevOpsEngineer", 
               "Manager" 
            ], 
            "identity/claims/givenname":["Kumar"], 
            "identity/claims/sn":["Venkata"], 
            "identity/claims/jobnumber":[ "5002857956778873"] 
         } 
      } 
    }; 

const resObj = {}
function removeValues(obj, key) {
    if(typeof obj !== 'object') {
        key && (resObj[key] = obj)
    } else {
        for(let key in obj) {
            console.log(key)
            if (!itemsToDelete.includes(key)) {
                resObj[key]
                removeValues(obj[key], key)
            }
        }
    }
    return resObj
}

console.log(removeValues(data))


function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(mergeSortedArrays(array1, array2));  // Output: [1, 2, 3, 4, 5, 6]

 
const findPrimenumber = () => {
  const min = 23;
  const max = 97;
  const primeNumber = [];
  let currentVal = min;
  let isPrimeNumber = false;

  while(currentVal <= max) {
    for(let i = 2;i < currentVal; i++) {
      if(currentVal%i !== 0) {
          isPrimeNumber = true;
      } else {
          isPrimeNumber = false;
          break;
      }
    }
    isPrimeNumber && primeNumber.push(currentVal);
    currentVal++
  }
  return primeNumber;
}

console.log(findPrimenumber())
