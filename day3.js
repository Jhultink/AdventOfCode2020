const fs = require("fs");
const raw = fs.readFileSync("input.txt").toString();
let lines = raw.split("\r\n");

part2();

function part1() {
  let hits = 0;
  let x = 0;

  for (line of lines) {
    let c = line[x % line.length];
    if (c == "#") {
      hits++;
    }

    x += 3;
  }

  console.log(hits);
}

function part2() {
  let res =
    traverse(1, 1) *
    traverse(3, 1) *
    traverse(5, 1) *
    traverse(7, 1) *
    traverse(1, 2);

  console.log(res);
}

function traverse(xDelta, yDelta) {
  let hits = 0;
  let x = 0;

  for (let y = 0; y < lines.length; y += yDelta) {
    let c = lines[y][x % lines[0].length];
    if (c == "#") {
      hits++;
    }

    x += xDelta;
  }

  return hits;
}
