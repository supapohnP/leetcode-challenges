function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i + 1] === target - nums[i]) {
      return [i, i + 1];
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
