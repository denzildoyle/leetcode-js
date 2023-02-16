/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

module.exports = function(pattern, s) {
    let string = s.split(" ");
    if(string.length != pattern.length)
        return false;
    
    for (let i = 0; i< pattern.length; i++){
        for(let j = 1; j< pattern.length; j++){
            if((pattern.charAt(i) === pattern.charAt(j)) && (string[i] !== string[j])
           || (pattern.charAt(i) !== pattern.charAt(j)) && (string[i] === string[j]))
                return false;
        }    
    }
    return true;
};