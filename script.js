var triangle1Area = getTriangleArea(1,5);
var triangle2Area = getTriangleArea(14,16);
var triangle3Area = getTriangleArea(2,5);
function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return (a * h / 2);
  } else if (a <= 1 || h <= 0) {
    console.log('nieprawidlowe dane ');
  }
}
console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);







/*var a = prompt('Wpisz swoją liczbę:');

var h = prompt('Wpisz swoją liczbę:');

var value;

value = a * h / 2;

console.log('wynik' + ' wynosi: ' + value);

function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return (a * h / 2);
  } else if (a <= 1 || h <= 0) {
    console.log('nieprawidlowe dane ');
  }
}
console.log(getTriangleArea(10, 6));




/*var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}
*/
/*
function getTriangleArea(a,h) {
    if (a > 0 && h>0)
        return a*h/2;
    } else {
        return console.log("nie dziala");
    }
}
console.log(getTriangleArea(10,6));









/*function (a,h){
    if (a > 1 && h > 0) {
        console.log('większe od zera')
        return a*h/2;
    } else if (a <= 1 || h <= 0) {
        console.log('nieprawidłowe dane');
    }
}
getTriangleArea(a,h);*/






/*var a = prompt('Wpisz swoją liczbę:');

var h = prompt('Wpisz swoją liczbę:');
var value ;

function getTriangleArea(a, h) {

}


value=a*h/2;*/
