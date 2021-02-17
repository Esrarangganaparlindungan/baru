var a = 15;
var b = 4;
var c = 0;

c = a - b;
document.write(`${a} - ${b} = ${c}<br/>`);

c = a * b;
document.write(`${a} * ${b} = ${c}<br/>`);

c = a ** b;
document.write(`${a} ** ${b} = ${c}<br/>`);

c = a / b;
document.write(`${a} / ${b} = ${c}<br/>`);

c = a % b;
document.write(`${a} % ${b} = ${c}<br/>`);

var x = 10;
var y = ++x;
var z = x++;
document.write(`${x}<br/>`)
document.write(`${"Ini adalah nilai ++X"} ${y}<br/>`)
document.write(`${"Ini adalah nilai X++"} ${z}<br/>`)

var o = 1;
var p = --o;
var q = o--;
document.write(`${o}<br/>`)
document.write(`${p}<br/>`)
document.write(`${"Ini adalah nilai P++"} ${p}<br/>`)
document.write(`${"Ini adalah nilai Q++"} ${q}<br/>`)