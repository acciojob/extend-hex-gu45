const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length-3;
    let res = "#"
    let isupper = false
    while(i<shortHex.length){
        let aciicode = shortHex[i].charCodeAt(0)
        if(aciicode>=65 && aciicode<=90){
            isupper = true;
        }
        res = res+shortHex[i]+shortHex[i]
        i++;
    }
    return isupper ? res.toUpperCase() : res;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
