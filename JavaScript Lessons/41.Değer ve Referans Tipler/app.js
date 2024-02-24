//DEĞER ve REFERANS TİPLER

/*
Değer tipli türler primitive türlerdir
String number null boolean undefined symbol

Referans tipler ise;
Object Array ve Function
*/

// let a = 5;
// let b = 7;

// console.log("a : " + a);
// console.log("b : " + b);
// console.log("--------------------------------");
// let isim = "Salih";
// console.log(typeof isim);

// let dizi1 = [1, 2, 3];
// let dizi2 = [1, 2, 3];
// let dizi2 = dizi1;

// if (dizi1 == dizi2) {
//     console.log("eşittir");
// } else {
//     console.log("eşit değildir");
// }

// console.log(dizi1);
// console.log(dizi2);


let dizi1 = [1, 2, 3];
let dizi2 = dizi1;
let dizi3 = dizi2;
dizi3.push(12);
console.log(dizi1);
console.log(dizi2);
console.log(dizi3);









