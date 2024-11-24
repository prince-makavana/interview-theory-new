/**
 * 2D array rotate 90 Degree
 */

function rotate2dArr() {
    const twoDArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    /**
     * Output
     * [7,4,1]
     * [8,5,2]
     * [9,6,3]
     */

    for (let i = 0; i < twoDArr.length; i++) {
        for (let j = 0; j < i; j++) {
            // [twoDArr[i][j], twoDArr[j][i]] = [twoDArr[j][i], twoDArr[i][j]] // short way to assign value
            let value = twoDArr[i][j]
            twoDArr[i][j] = twoDArr[j][i]
            twoDArr[j][i] = value
        }
    }
    twoDArr.forEach(arr => arr.reverse())
    return twoDArr
}
// rotate2dArr()

/**
 * find first 3 large value
 */
const arr = [4, 2, 5, 6, 8, 7]
function findLargeFirstThreeVal() {
    arr.sort((a, b) => b - a).slice(0, 3)
}

/**
 * Find largest substring
 */
function findLargestSubstring(stringVal) {
    const arr = stringVal.split('')
    let uniqueArr = []
    let largeSubstring = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        } else {
            largeSubstring.push(uniqueArr.join(''))
            uniqueArr = [arr[i]]
        }
    }
    largeSubstring.push(uniqueArr.join(''))
    return largeSubstring.sort((a, b) => b.length - a.length)[0]
}
// console.log(findLargestSubstring('smitsmitskhanprsmit'))