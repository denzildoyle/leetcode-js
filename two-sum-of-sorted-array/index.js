module.exports = (numbers, target)  => {
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