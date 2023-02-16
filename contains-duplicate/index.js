module.exports = nums => {
    let numbers = new Map();

    for (let i=0; i<nums.length; i++){
        if(numbers.has(nums[i]))
            return true;
        numbers.set(nums[i]);
    }
    return false;
}