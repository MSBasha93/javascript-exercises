const reverseString = function(string) {
    let reversed="";
    if (string==="") return string;
    for (let i= string.length-1; i>=0 ;i--){
        reversed+= string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
