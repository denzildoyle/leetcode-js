module.exports = (x) => {
    let pointerFirst = 0;
    let pointerLast = x.toString().length -1;
    let i = Math.ceil(x.toString().length/2);

    while (i!=0){
        if(x.toString().charAt(pointerFirst) == x.toString().charAt(pointerLast)){
            pointerFirst ++;
            pointerLast --;
        } else
            return false
        i--;
    }

    return true;
}