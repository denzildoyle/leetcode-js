module.exports.twoSum = (numbers, target)  => {
    let aPointer = 0;
    let bPointer = numbers.length - 1;
    let sum = 0;
    while (aPointer <= bPointer){
        sum = numbers[aPointer] + numbers[bPointer];

        if(sum > target){
            bPointer -=1;
        } else if(sum < target){
            aPointer +=1;
        } else {
            return [aPointer + 1 , bPointer + 1];
        }
    }
    
    return [aPointer + 1 , bPointer + 1];
}

//won't work for repeating values
module.exports.twoSum2 = (numbers, target) => {
    for(let i = 0; i < numbers.length; i++){
        let idx = numbers.indexOf(target - numbers[i]);
        if (idx != -1){
            return [i+1,idx+1]; 
        }
    }
}