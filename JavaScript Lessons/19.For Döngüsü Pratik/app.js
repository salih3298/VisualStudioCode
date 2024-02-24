// 1 den 10a kadar yazdırmak

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 1 den 10 kadar çiftleri yazdıralım

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i += 2) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }


/*
*Salih teklerde yazdır
*Naber çiftlerde yazdır 
 */


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//         console.log("Salih");
//     } else {
//         console.log("Naber");
//     }
// }

let a = 0;
for (let i = 50; i >= 1; i--) {
    a = a + i;
    console.log(i);
}
console.log("Toplam :" + a);