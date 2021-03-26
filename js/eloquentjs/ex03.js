(function minimun() {
  function min(a, b) {
    return a < b ? a : b;
  }

  console.log(min(0, 10));
  console.log(min(0, -10));
  console.log(min(3, 10));
});


(function recursion() {
  function isEven(number) {
    if (number < 0) number = -number;
    if (number == 0) return true;
    if (number == 1) return false;
    return isEven(number - 2);
  }

  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
});


(function beanCounting() {
  function countBs(string) {
    return countChar(string, 'B');
  }

  function countChar(string, ch) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) counter++;
    }
    return counter;
  }

  console.log(countBs("BBC"));
  console.log(countChar("kakkerlak", "k"));
  console.log(countChar("Víctor", "í"));
});
