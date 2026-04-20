// let arr = [-1, 2, -3, -6, 5, 4, 7]

// function negativeAtEnd(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             result.push(arr[i])
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(negativeAtEnd(arr));


// function twoPointerNegativeEnd(arr) {
//     let i = 0, j = arr.length - 1, k =0;
//     while (i < j) {
//         if (arr[k] == 0) {
//             [arr[k], arr[i]] = [arr[k], arr[i]]
//             i++;
//             k++;
//         }
//         if (arr[k] == 1) {
//             k++;
//         }
//         if (arr[k] == 2) {
//             [arr[k], arr[j]] = [arr[j], arr[k]]
//             j--;
//             k++;
//         }
//     }
//     return arr

// }

// console.log(twoPointerNegativeEnd(arr));
// function sortOnesTwosZeroes(arr) {
//     let low = 0, mid = 0, high = arr.length - 1;

//     return arr;
// }




var maxSubArray = function (nums) {
    let r = nums[0], c = nums[0];
    for (let i = 1; i < nums.length; i++) {
        c = Math.max(nums[i], c + nums[i]);
        r = Math.max(r, c);
    }
    return r;
};

console.log(maxSubArraySum([2, 3, -8, 7, -1, 2, 3]))

