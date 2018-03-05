module.exports = function getZerosCount(number, base) {
  var temp = base, stackOfBase = [], stackOfExp = [];

  for (var i = 2; i < base; i++) {
    var n = 0;
    if (temp % i === 0 && temp > 0) {
      while (temp % i === 0) {
        temp /= i;
        n++;
      }
      stackOfBase.push(i);
      stackOfExp.push(n);
    }
  }
 
  if (stackOfBase.length === 0) {
    stackOfBase.push(base);
    stackOfExp.push(1);
  }
  
  var stackOfPseudoZero = [];
  for (var i = 0; i < stackOfBase.length; i++)
    stackOfPseudoZero[i] = 0;

  for (var i = 0; i < stackOfBase.length; i++) {
    for (var n = 1, j = iter = Math.pow(stackOfBase[i], n); j <= number; n++, j = iter = Math.pow(stackOfBase[i], n)) {
      for (var k = j; k <= number; k += iter) {
        stackOfPseudoZero[i]++;
      }
    }
  }

  for (var i = 0; i < stackOfExp.length; i++) {
    stackOfPseudoZero[i] = Math.floor(stackOfPseudoZero[i] / stackOfExp[i]);
  }

  var zeroCount = 0;
  
  for (var i = 1, zeroCount = stackOfPseudoZero[0]; i < stackOfPseudoZero.length; i++)
    if (zeroCount > stackOfPseudoZero[i])
    zeroCount = stackOfPseudoZero[i];

  console.error('VANYA KRASAVCHEG');
  return zeroCount;
}
