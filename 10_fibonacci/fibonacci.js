const fibonacci = function(n) {
    let num = parseInt(n)
    if (num  <= 1 && num >= 0) {
        return num;
      }else if (num < 0) {
        return "OOPS"
      }
    
      let a = 0, b = 1, temp;
    
      for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
    
      return b;
};

// Do not edit below this line
module.exports = fibonacci;
