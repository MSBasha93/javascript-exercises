const add = function(a,b) {
	return +a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {

  return arr.reduce((result,nextElem)=>result+=nextElem,0);
   
};

const multiply = function(arr) {
  return arr.reduce((result,nextElem)=>result*=nextElem);
};

const power = function(a,b) {
  if (b===0) return 1;
  if (b === 1) return a;
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  
  return result;
};

const factorial = function(n) {
	let result=1;
  if (n===0) return result;
  for (let i=1; i<=n;i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
