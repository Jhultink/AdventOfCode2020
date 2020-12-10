const fs = require("fs");

part2();

function part1() {
  let raw = fs
    .readFileSync("input.txt")
    .toString()
    .replaceAll("\r\n\r\n", "\n")
    .replaceAll("\r\n", "");
  let lines = raw.split("\n");

  let total = 0;

  for (let line of lines) {
    let answers = new Set();

    for (let char of line) {
      answers.add(char);
    }
    total += answers.size;
  }

  console.log(total);
}

function part2() {
  let raw = fs
    .readFileSync("input.txt")
    .toString()
    .replaceAll("\r\n\r\n", "\n")
    .replaceAll("\r\n", " ");
  let lines = raw.split("\n");

  let total = 0;

  for (let line of lines) {
    let distinctAnswers = new Set();
    for (let char of line) {
      if (char !== " ") {
        distinctAnswers.add(char);
      }
    }
    for (let distinctAnswer of distinctAnswers) {
      let answers = line.split(" ");
      if (answers.every((x) => x.includes(distinctAnswer))) {
        total++;
      }
    }
  }

  console.log(total);
}
