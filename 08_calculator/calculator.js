const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(myNums) {
	let sum = 0;

  myNums.forEach( num => {
    sum += num;
  })

return sum; 

};

const multiply = function(myNums) {
  let mul = 1;

  myNums.forEach( num => {
    mul = mul * num;
  })

  return mul; 
};

const power = function(num, exp) {
	
  return Math.pow(num, exp)
};

const factorial = function(n) {
	let ans = 1; 
     
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
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
