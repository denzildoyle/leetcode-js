module.exports.solution1 = (word) => {
    let countUpper = 0;
    let countLower = 0;

    for(let i = 0; i < word.length; i++){
        if(word.charAt(i).toUpperCase() === word.charAt(i))
            countUpper ++;
        else
            countLower ++;
    }

    if(countUpper == word.length)
        return true;
    else if(countLower == word.length)
        return true
    else if(countUpper == 1 && word.charAt(0) === word.charAt(0).toUpperCase() && word.length -1 == countLower)
        return true;
    else 
        return false;
};


module.exports.solution2 = (word) => {
    if(word == word.toUpperCase() || word == word.toLowerCase())
        return true;
    else if(word[0] == word[0].toUpperCase()){
        word = word[0].toLowerCase().concat(word.slice(1));
        if(word === word.toLowerCase())
            return true;
        else
            return false;
    } else 
        return false;
};