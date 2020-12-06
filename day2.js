const fs = require("fs");

console.log(process.cwd());

const raw = fs.readFileSync("input.txt").toString();
let lines = raw.split("\n");

part2();

function part1() {
  let matches = 0;
  for (var line of lines) {
    let splits = line.split(" ");
    let num = splits[0];
    let letter = splits[1].replace(":", "");
    let password = splits[2];
    let min = num.split("-")[0];
    let max = num.split("-")[1];

    let count = password.split(letter).length - 1;

    if (count <= max && count >= min) {
      matches++;
    }
  }
  console.log(matches);
}

function part2() {
  let matches = 0;
  for (var line of lines) {
    let splits = line.split(" ");
    let num = splits[0];
    let letter = splits[1].replace(":", "");
    let password = splits[2];
    let index1 = num.split("-")[0];
    let index2 = num.split("-")[1];

    let match1 = password[index1 - 1] == letter;
    let match2 = password[index2 - 1] == letter;

    if (match1 ^ match2) {
      matches++;
    }
  }
  console.log(matches);
}
