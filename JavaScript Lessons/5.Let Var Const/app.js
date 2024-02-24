// Var - Let - Const

// Değişken nedir ?

/*
var/let/const degiskenIsmi = degiskenDegeri;
let sayi=10;
*/

// var : function scope -- ram bellekte çok fazla yer kaplar
// let/const : block scope özelliğine sahiptir.


// function selamVer() {
//     var selam = "Herkese Selam";  // function scope
//     if (true) {
// var b = 10;   // var ile tanımlanan değişkenler function scope olur.

//         let b = 10;
//         console.log(b);
//     }
//     console.log(b);
//     console.log(selam);
// }

// selamVer();


// var a = 5;
// var a = 15;

// console.log(a);

// let a = 5;
// let a = 15;

// console.log(a);

// LET & CONST arasındaki fark?

// const (constant) : sabit, değişmez

// const a = 10;
// a = 15;   // const ile tanımlanan değişkenler sonradan değiştirilemez
// console.log(a);


// let b = 5;
// b = 7;
// b = 12;
// console.log(b);


const user = {
    username: "Salih",
    password: "123"
}

//user = { age: 23 }

console.log(user);