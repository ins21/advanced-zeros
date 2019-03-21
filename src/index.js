module.exports = function getZerosCount(number, base) {
  let baseFactors = {};
  let min = 0;

  for (let i = 2; i <= base; i++) {
    while (base % i === 0) {
      baseFactors[i] ? baseFactors[i]++ : baseFactors[i] = 1;
      base = base / i;
    }
  }

  for (let key in baseFactors) {    
    let sum = 0;
    let n = number;

    while (n > 1) {
      sum = sum + Math.floor(n / key);
      n = Math.floor(n / key);
    }
    
    if (min === 0 || min >= sum ) min = Math.floor(sum / baseFactors[key]);
  }
  
  return min;
}