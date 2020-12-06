const { transcode } = require('buffer');
const fs = require('fs')

console.log(process.cwd())

let raw = fs.readFileSync('input.txt').toString().replaceAll("\r\n\r\n", "\n").replaceAll("\r\n", " ")
let lines = raw.split('\n')

part2();

function part1()
{     
    let matches = 0;    

    for(line of lines)
    {
        let kvs = line.split(" ")
        
        let dict = {}

        for(kv of kvs)
        {
            let key = kv.split(":")[0]
            let value = kv.split(":")[1]

            dict[key] = value
        }

        if("byr" in dict
           && "iyr" in dict
           && "eyr" in dict
           && "hgt" in dict
           && "hcl" in dict
           && "ecl" in dict
           && "pid" in dict)
        {
            matches++
        }
    }

    console.log(matches)
}

function part2()
{     
    let matches = 0;    

    for(line of lines)
    {
        let kvs = line.split(" ")
        
        let dict = {}

        for(kv of kvs)
        {
            let key = kv.split(":")[0]
            let value = kv.split(":")[1]

            dict[key] = value
        }

        valid = true

        if(isValid(dict))
        {
            matches++
        }


    }

    console.log(matches)
}

function isValid(dict)
{
    if(!("byr" in dict
        && "iyr" in dict
        && "eyr" in dict
        && "hgt" in dict
        && "hcl" in dict
        && "ecl" in dict
        && "pid" in dict))
    {
        return false
    }

    let byr = Number(dict["byr"])        
    if(byr > 2002 || byr < 1920)
    {
        return false
    }

    let iyr = Number(dict["iyr"])    
    if(iyr > 2020 || iyr < 2010)
    {
        return false
    }

    let eyr = Number(dict["eyr"])    
    if(eyr > 2030 || eyr < 2020)
    {
        return false
    }

    if(dict["hgt"].includes("cm")) {
        let cm = Number(dict["hgt"].replace("cm", ""))
        if(cm > 193 || cm < 150)
        {
            return false
        }
    } 
    else if(dict["hgt"].includes("in"))
    {
        let inches = Number(dict["hgt"].replace("in", ""))
        if(inches > 76 || inches < 59)
        {
            return false
        }
    } else {
        return false
    }

    if(dict["ecl"] != "amb"
        && dict["ecl"] != "blu"
        && dict["ecl"] != "brn"
        && dict["ecl"] != "gry"
        && dict["ecl"] != "grn"
        && dict["ecl"] != "hzl"
        && dict["ecl"] != "oth")
    {
        return false
    }

    let hcl = dict["hcl"]
    let hairColor = hcl.match(/#([a-f,A-F,0-9]){6}/g);
    if(hairColor == null)
    {
        return false
    }

    if(Number(dict["pid"]) == NaN
        || dict["pid"].length != 9)
    {
        return false
    }

    return true
}
