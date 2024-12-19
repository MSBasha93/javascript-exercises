const palindromes = function (str) {
    const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    
    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
