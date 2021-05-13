function power(val, pow) {
    if (pow === 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
alert(power(3, 5));

function numout(a) {

    if (a === 15) {
        document.write("15 <br/>");
    } else {
        document.write(a + '; ');
        return numout(a + 1);
    }
}

var min = 0,
    max = 15;
var a = min + Math.random() * (max + 1 - min);
a = Math.floor(a);
alert("a = " + a);
numout(a);