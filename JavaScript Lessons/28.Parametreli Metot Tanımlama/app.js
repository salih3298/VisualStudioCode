// Parametreli metot tanımlamak

// function yazdir(isim, soyisim) {
//     console.log(isim + " " + soyisim);
//     alert(isim + " " + soyisim);
// }

// yazdir("Salih", "AYGÜN");
// yazdir("Anıl", "AYGÜN");

// function cube(sayi) {
//     console.log(sayi * sayi * sayi);
// }

// cube(5);

let yas = Number(prompt("Yaşınızı giriniz"));
kontrolEt(yas);   // parantez aç-kapa varsa bu bir metottur
function kontrolEt(yas) {
    if (yas >= 18) {
        console.log("Ehliyet alabilirsiniz");
    } else {
        console.log("Ehliyet alamazsınız");
    }
}






