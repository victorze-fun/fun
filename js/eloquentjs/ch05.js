const SCRIPTS = require("./scripts");

const scriptsRtl = SCRIPTS.filter(script => script.direction == "rtl")
  .map(script => script.name);
console.log({scriptsRtl});



const scriptMostChars = SCRIPTS.reduce(
  (a, b) => characterCount(a) < characterCount(b) ? b : a
)
console.log({scriptMostChars});

function characterCount(script) {
  return script.ranges.reduce(
    (count, [from, to]) => count + (to - from),
    0
  );
}



const avgLiveScripts = Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))
const avgDeadScripts = Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))
console.log({avgLiveScripts, avgDeadScripts});

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}



function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
console.log(textScripts('Hi, how are you? حان الوقت للجدولة Небо голубое и необъятное'))
// → 23% Latin, 31% Arabic, 46% Cyrillic

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
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => from <= code && code < to)) {
      return script;
    }
  }
  return null;
}
// console.log(characterScript(121));
// → {name: "Latin", …}
