const fs = require("fs");
let raw = fs.readFileSync("input.txt").toString();
let lines = raw.split("\r\n");

var nodes = {};

for (line of lines) {
  let split = line.split(" bags contain ");
  let key = split[0];

  if (split[1].includes("no other bags")) {
    nodes[key] = [];
  } else {
    let values = split[1]
      .replaceAll("bags", "")
      .replaceAll("bag", "")
      .replaceAll(".", "")
      .split(", ");

    let items = [];

    for (let val of values) {
      let count = val.split(/ (.+)/)[0];
      let name = val.split(/ (.+)/)[1].trim();

      items.push({ count: count, name: name });
    }

    nodes[key] = items;
  }
}

part2();

function part1() {
  let count = 0;
  for (node in nodes) {
    if (traverse(node)) {
      count++;
    }
  }
  console.log(count);
}

function traverse(bag) {
  if (nodes[bag].count == 0) {
    return false;
  }

  let resp = false;

  for (b of nodes[bag]) {
    if (b.name == "shiny gold") {
      return true;
    } else {
      resp |= traverse(b.name);
    }
  }

  return resp;
}

function part2() {
  console.log(countBags("shiny gold") - 1);
}

function countBags(init) {
  if (nodes[init].length == 0) {
    return 1;
  }

  let total = 1;

  for (bag of nodes[init]) {
    total += bag.count * countBags(bag.name);
  }

  return total;
}
