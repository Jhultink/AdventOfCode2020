const fs = require("fs");
let raw = fs.readFileSync("input.txt").toString();
let lines = raw.split("\r\n");

let numbers = [];

for (line of lines) {
  numbers.push(Number(line));
}

part1();

function part1() {
  let inv = findFirstInvalid();
  console.log(inv);

  for (let i = 0; i < numbers.length - 1; i++) {
    let total = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      total += numbers[j];

      if (total == inv) {
        console.log("start: " + numbers[i]);
        console.log("end: " + numbers[j]);
        let range = numbers.slice(i, j).sort();
        console.log(range[0] + range[range.length - 1]);
      } else if (total > inv) {
        break;
      }
    }
  }
}

function findFirstInvalid() {
  const preamble = 25;

  for (let i = preamble; i < numbers.length; i++) {
    let arr = numbers.slice(i - preamble, i).sort(function (a, b) {
      return a - b;
    });
    if (!isValid(arr, numbers[i])) {
      return numbers[i];
    }
  }
}

function isValid(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] + arr[j] == num) {
        return true;
      }
    }
  }
  return false;
}
