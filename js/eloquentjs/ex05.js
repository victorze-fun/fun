const SCRIPTS = require("./scripts");

(function flattening() {
  let arrays = [[1, 2, 3], [4, 5], [6]];

  console.log(arrays.reduce((flat, current) => flat.concat(current), []));
  // → [1, 2, 3, 4, 5, 6]
});


(function yourOwnLoop() {
  function loop(start, test, update, body) {
    for (let i = start; test(i); i = update(i)) {
      body(i);
    }
  }

  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1
});


(function everything() {
  function every1(array, test) {
    for (let element of array) {
      if (!test(element)) return false;
    }
    return true;
  }

  function every(array, test) {
    return !array.some(element => !test(element));
  }

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
});


(function dominantWritingDirection() {
  function dominantDirection(text) {
    const counted = countBy(text, char => {
      const script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count < b.count ? b : a).name;
  }

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => from <= code && code < to)) {
        return script;
      }
    }
    return null;
  }
});
