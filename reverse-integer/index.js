module.exports = function (x){
    x = x.toString();
    let reverse = "";
    let i = x.length-1;

    if(x.charAt(0) == '-'){
        reverse = '-';
        x = x.replace('-', '');
        i--;
    }

    while (i>=0){
        reverse = reverse.concat(x.charAt(i));
        i--;
    }
    reverse = Number(reverse);

    if(reverse > Math.pow(2, 31) || reverse < Math.pow(-2, 31))
        return 0;

    return reverse;
}