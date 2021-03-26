(function theSumOfARange() {
  function range(start, end, step = 1) {
    const array = [];
    if (start > end && step == 1) step = -1;

    if (step < 0) {
      for (let i = start; i >= end; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
    }
    return array;
  }

  function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }

  console.log(range(1, 10));
  console.log(range(1, 10, 2));
  console.log(range(5, 2, -1));
  console.log(range(5, 2));
  console.log(sum(range(1, 10)));
});


(function reversingAnArray() {
  function reverseArray(array) {
    const reverse = [];
    for (let item of array) {
      reverse.unshift(item);
    }
    return reverse;
  }

  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }

  console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue); // → [5, 4, 3, 2, 1]
  let arrayValue1 = [1, 2, 3, 4, 5, 6];
  reverseArrayInPlace(arrayValue1);
  console.log(arrayValue1); // → [6, 5, 4, 3, 2, 1]
});

(function aList() {
  function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }

  function listToArray(list) {
    const array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }

  function prepend(element, list) {
    return { value: element, rest: list }
  }

  function nth(list, position) {
    for (let node = list, i = 0; node; node = node.rest, i++) {
      if (i == position) return node.value;
    }
    return undefined;
  }

  function nth1(list, position) {
    if (!list) return undefined;

    if (position == 0) {
      return list.value;
    } else {
      return nth1(list.rest, position - 1);
    }
  }

  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
  console.log(nth1(arrayToList([10, 20, 30]), 0));
});


(function deepComparison() {
  function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") {
      return false;
    }

    if (Object.keys(a).length != Object.keys(b).length)
      return false;

    for (let prop of Object.keys(a)) {
      if (prop in b) {
        return deepEqual(a[prop], b[prop]);
      }
    }
  }

  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
  console.log(deepEqual(obj, {here: null, object: 2}));
  // → false
  console.log(deepEqual(null, {}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2, objects: 3}));
  // → false
});
