// 315. Count of Smaller Numbers After Self
// Hard

// 2703

// 90

// Add to List

// Share
// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

// Constraints:

// 0 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = (nums) => {
  let count = 0;
  let arr = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    count = 0;
    for (let j = i + 1; j < length; j++) {
      count += nums[i] > nums[j];
    }
    arr.push(count);
  }
  return arr;
};
