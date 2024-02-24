// Var - Let - Const


/* 
---------SCOPE (KAPSAM)---------

     -> Global Scope
     -> Function Scope
     -> Block Scope
*/

// var degisken = 10;

// console.log(degisken);

// var a = 5;  // global scope
// sen buna heryerden erişebilirsin

// while (a > 6) {

// }
// if (true) {

// }
// function method1() {
//     console.log(a);
// }

// method1();


// function method1() {
//     var sayi = 10;
//     console.log(sayi);
// }

// method1();

function method1() {
    var b = 5;  // function scope
    if (true) {
        var a = 5; // block scope
    }
    while (true) {

    }
    for (let i = 0; i < 10; i++) {

    }
}













