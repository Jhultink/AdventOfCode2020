const fs = require('fs')

console.log(process.cwd())

const raw = fs.readFileSync('input.txt').toString()
let lines = raw.split('\n')

part2()

function part1()
{
    for(var a of lines)
    {
        for(var b of lines)
        {
            let num1 = Number(a);
            let num2 = Number(b);

            if(num1 != num2 && num1 + num2 == 2020)
            {
                console.log(num1 * num2);
            }
        }
    }
}

function part2()
{
    for(var a of lines)
    {
        for(var b of lines)
        {
            for(var c of lines)
            {
                let num1 = Number(a);
                let num2 = Number(b);
                let num3 = Number(c);

                if(num1 + num2 + num3 == 2020)
                {
                    console.log(num1 * num2 * num3);
                }
            }
        }
    }
}