/**
 * 
 * 1. Print the numbers until given variable N in the console
 * 2. Sum of the elements of Array
 * 3. Multiplication of element of Array.
 * 4. Calculate the Factorial of a number.
 * 5. Reverse an Array.
 * 6. Reverse a String.
 * 7. Sum of digits of a number.
 * 8. Fibonacci Series.
 * 9. Create an array within the range of two given numbers.
 * 10. Create a copy of an Array.
 * 11. Remove vowels from a String.
 * 
 */

/**
 * Calculate power of value
 */
const powerOfValue = (val, pow) => {
    if (pow === 0) return 1
    return val * powerOfValue(val, pow - 1)
}
// console.log(powerOfValue(3, 3));

/**
 * Calculate the Factorial of a number
 */
const recursion = (val) => {
    if (val === 0 || val === 1) {
        return 1
    }
    return val * recursion(val - 1)
}
// console.log(recursion(5));

/**
 * Compare two object
 */
const obj1 = { name: 'prince' }
const obj2 = { name: 'prince' }
const deepClone = (val1, val2) => {
    if (typeof val1 !== 'object' || typeof val2 !== 'object') {
        return val1 === val2
    }

    const keys1 = Object.keys(val1)
    const keys2 = Object.keys(val2)

    if (keys1.length !== keys2.length || !keys1.every(value => keys2.includes(value))) {
        return false
    }

    keys1.forEach(key => {
        if (!deepClone(obj1[key], obj2[key])) {
            return false
        }
    })
    return true
}
// console.log(deepClone(obj1, obj2))

const user = {
    name: 'prince',
    phone: 51212,
    add: {
        name: 'asd',
        state: 'gujarat',
        add: {
            name: 'ppppppp',
            abc: 'asdfs'
        }
    }
}

/**
 * Remove name key value from object
 */
function removeNameFromObj(userobj) {
    for (const key in userobj) {
        if (typeof userobj[key] === 'object' && userobj[key] !== null) {
            removeNameFromObj(userobj[key])
        } else if (key === 'name') {
            delete userobj[key]
        }
    }
}
// removeNameFromObj(user)

/**
 * Print the numbers until given variable N in the console
 */
let originalValue = 0
function printNValue(n) {
    if (!n) {
        return originalValue
    } else {
        console.log(++originalValue);
        printNValue(n - 1)
    }
}
// printNValue(5)

/**
 * Sum of the elements of array
 */
function sumOfArrValue(array) {
    if (array.length) {
        const newArr = array.slice(1)
        return array[0] + sumOfArrValue(newArr)
    } else {
        return 0
    }
}
const generalArray = [2, 4, 5, 6, 9, 2, 1]
// console.log(sumOfArrValue(generalArray))

/**
 * getting res like [[1,2], [3,2], [5]]
 */
const res = []
function recFunction(arr) {
    if (arr.length) {
        const resVal = arr.slice(0, 2)
        res.push(resVal)
        return recFunction(arr.slice(2))
    } else {
        return res
    }
}
// console.log(recFunction(generalArray))

/**
 * Reverse array using recursion
 */
function reverseArray(array) {
    if (!array.length) {
        return reverseArr
    } else {
        reverseArr.push(array.pop())
        return reverseArray(array)
    }
}
const reverseArr = []
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * Reverse string
 */
function reverseString(string) {
    if (!string.length) {
        return reverseStrn.join('')
    } else {
        reverseStrn.push(string[string.length - 1])
        return reverseString(string.slice(0, string.length - 1))
    }
}
const reverseStrn = []
// console.log(reverseString('prince'));

/**
 * Sum of digit of num
 */
function sumOfDigit(digit) {
    console.log('=====', digit % 10);
    if (parseInt(digit % 10) === digit) {
        return digit
    } else {
        return (digit % 10) + sumOfDigit(parseInt(digit / 10))
    }
}
// console.log(sumOfDigit(2943))

/**
 * Fibonacci series
 */
const fibo = [0, 1]
function fibonacciPrint(fiboLength) {
    if (fibo.length === fiboLength) {
        return fibo
    } else {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
        return fibonacciPrint(fiboLength)
    }
}
// console.log(fibonacciPrint(10));
let oneFibo = 0
let twoFibo = 1
let nextFibo
let fiboNumber = 2
function fibonacciNValue(n) {
    if (n === 0) return 0
	if (n === 1) return 1
    if (n === fiboNumber) {
        return oneFibo + twoFibo
    } else {
        nextFibo = oneFibo + twoFibo
        oneFibo = twoFibo
        twoFibo = nextFibo
        fiboNumber++
        return fibonacciNValue(n)
    }
}
console.log(fibonacciNValue(1))
/**
 * create array between two numbers
 */
const rangeArr = []
function rangeRecursion(num1, num2) {
    if (num1 > num2) {
        return rangeArr
    } else {
        rangeArr.push(num1)
        return rangeRecursion(num1 + 1, num2)
    }
}
// console.log(rangeRecursion(4, 10));

/**
 * Remove vowels from string
 */
function removeVowels(string) {
    const vowels = 'aeiou'
    if (!string.length) {
        return withoutVowels
    } else {
        if (!vowels.includes(string[0])) {
            withoutVowels = withoutVowels += string[0]
        }
        return removeVowels(string.slice(1))
    }
}
let withoutVowels = ''
// console.log(removeVowels('aeiou'));

/**
 * Merge two sorted array into one sorted array
 */

function mergeArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}
// console.log(mergeArrays([11, 15, 17], [6, 8, 10, 14]))
