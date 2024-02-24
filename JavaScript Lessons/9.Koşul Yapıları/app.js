// KOŞUL YAPILARI

// let not = 65;

// if (not > 50) {
//     console.log("Geçtiniz ,notunuz : " + not)
// } else {
//     console.log("Kaldınız , notunuz :" + not)
// }

// let yas = Number(prompt("Yaşınızı giriniz"));
// let para = Number(prompt("Bütçenizi giriniz"));


// if (yas >= 18 && para >= 3000) {
//     alert("Ehliyet sınavına katılabilirsiniz")
// } else {
//     alert("Ehliyet sınavına katılamazsınız")
// }

//-------------------DERS ORTALAMASI BULMA--------

// vize1 %30, vize2 %30, final %40

let vize1 = Number(prompt("1. Vize notunuzu giriniz :"));
let vize2 = Number(prompt("2. Vize notunuzu giriniz :"));
let final = Number(prompt("Final notunuzu giriniz :"));

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

if (ortalama > 60) {
    console.log("Geçtiniz başarılar, Notunuz : " + ortalama)
    alert("Geçtiniz başarılar, Notunuz : " + ortalama)
} else {
    console.log("Kaldınız Geçmiş olsun");
    alert("Kaldınız Geçmiş olsun");
}












