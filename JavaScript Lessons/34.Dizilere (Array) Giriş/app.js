// DİZİLERE GİRİŞ

// ArrayIndexOutOfBoundExeption--->undefined dizinin sınırından fazla index numarası getirilmesi istenirse
// let sayilar = [0, 1, 2, 3, 4, 5, "Salih", 7, 8, 9, "Ali"];

// console.log(sayilar[10]);
// console.log(sayilar[15]);
// sayilar[10] = "Mehmet";
// console.log(sayilar[10]);

// sayilar[sayilar.length - 2] = "Anıl";
// console.log(sayilar[9]);

// let isimler = ["Salih", "Anıl", "Hülya", "Ali"];

// isimler[2] = "Yakup";
// console.log(isimler[2]);


// console.log(isimler);

// let isimler = [];

// function topla() {
//     console.log(15);
// }

// let personel1 = {
//     isim: "Salih",
//     soyisim: "AYGÜN",
//     yas: "37",
// }

// let personel2 = {
//     isim: "Anıl",
//     soyisim: "AYGÜN",
//     yas: "6",
// }

// let rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let personelArray = [personel1, personel2, 1, true, rakamlar];

// console.log(personelArray[4][5]);
// console.log(personelArray[0].isim);


// let dizi1 = ["Salih", "Anıl"];
// let dizi2 = new Array("Salih", "Anıl");

// personelArray[4]

// number, string, boolean, undefined, null, object

// console.log(typeof dizi1);


// FOREACH DONGUSU

let isimler = ["Salih", "Anıl", "Hülya", "Ali", "Ahmet", "Mehmet"];

// isimler.forEach(function (isim) {
//     console.log(isim);
// });

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]);
// }

let sayac = 0;
while (sayac < isimler.length) {
    console.log(isimler[sayac]);
    sayac++;
}















