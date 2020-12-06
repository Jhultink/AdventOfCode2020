const fs = require("fs");
const { maxHeaderSize } = require("http");
const { off } = require("process");

console.log(process.cwd());

let raw = fs.readFileSync("input.txt").toString();
let lines = raw.split("\n");

part2();

function part1() {
  let ids = [];

  for (line of lines) {
    let row = 0;

    for (let i = 0; i < 7; i++) {
      if (line[i] == "B") {
        row += Math.pow(2, 6 - i);
      }
    }

    let seat = 0;
    for (let i = 0; i < 3; i++) {
      if (line[i + 7] == "R") {
        seat += Math.pow(2, 2 - i);
      }
    }

    let id = row * 8 + seat;
    ids.push(id);
  }

  ids.sort(function (a, b) {
    return a - b;
  });

  console.log(ids[ids.length - 1]);
}

function part2() {
  let ids = [];

  for (line of lines) {
    let row = 0;

    for (let i = 0; i < 7; i++) {
      if (line[i] == "B") {
        row += Math.pow(2, 6 - i);
      }
    }

    let seat = 0;
    for (let i = 0; i < 3; i++) {
      if (line[i + 7] == "R") {
        seat += Math.pow(2, 2 - i);
      }
    }

    let id = row * 8 + seat;
    ids.push(id);
  }

  ids.sort(function (a, b) {
    return a - b;
  });
  let offset = ids[0];

  for (let i = 0; i < ids.length; i++) {
    if (i + offset != ids[i]) {
      console.log(ids[i]);
    }
  }
}
