// ASAL SAYI BULMA UYGULAMASI

let i = Number(prompt("Lütfen bir sayı giriniz"));

//let j = 2;
let sonuc = true;
// for (let j = 2; j <= Math.floor(i / 2); j++) {
for (let j = 2; j <= i; j++) {
    if (i % j == 0) {
        sonuc = false;
        console.log("Sayı asal değildir");
        break;
    }
}
if (sonuc) {
    alert(i + " asaldır!");
} else {
    alert(i + " asal değildir!");
}