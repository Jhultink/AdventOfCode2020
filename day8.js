const { triggerAsyncId } = require("async_hooks");
const fs = require("fs");

part2();

function part1() {

    let raw = fs.readFileSync("input.txt").toString();
    let lines = raw.split("\n");

    let visited = []
    let acc = 0
    let i = 0

    while(true) {
        let op = lines[i].split(" ")[0]
        let arg = Number(lines[i].split(" ")[1])

        if(visited.includes(i)) {
            console.log(acc)
            break
        }

        visited.push(i)

        if(op == "acc") {
            acc += arg;
            i++
        } else if(op == "jmp") {
            i += arg
        } else {
            i++
        }
    }      
}

function part2()
{
    let raw = fs.readFileSync("input.txt").toString();
    let lines = raw.split("\n");

    for(t = 0; t < lines.length; t++) {

        if(lines[t].includes("nop")) {
            lines[t] = lines[t].replace("nop", "jmp")
        } else if(lines[t].includes("jmp")) {
            lines[t] = lines[t].replace("jmp", "nop")
        } else {
            continue
        }

        if(attempt(lines)) {
            break;
        }

        if(lines[t].includes("nop")) {
            lines[t] = lines[t].replace("nop", "jmp")
        } else if(lines[t].includes("jmp")) {
            lines[t] = lines[t].replace("jmp", "nop")
        } 
    }
}

function attempt(lines) {
    let visited = []
    let acc = 0
    let i = 0

    while(true) {
        let op = lines[i].split(" ")[0]
        let arg = Number(lines[i].split(" ")[1])

        if(i == lines.length - 1) {
            console.log(acc)
            return true
        }

        if(visited.includes(i)) {
            return false
        }

        visited.push(i)

        if(op == "acc") {
            acc += arg;
            i++
        } else if(op == "jmp") {
            i += arg
        } else {
            i++
        }
    }      
}