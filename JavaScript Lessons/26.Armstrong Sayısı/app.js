// 153 - 370 - 407 sayısı armstrong
// sayının her bir rakamının küpünün toplamı sayıyı veriyorsa
// bu sayıya armstrong sayı denir

let sayı = prompt("Sayı giriniz");

let sonuc = 0;
for (let i = 0; i < sayı.length; i++) {
    sonuc = sonuc + Number(sayı.charAt(i)) * Number(sayı.charAt(i)) * Number(sayı.charAt(i));
}
if (sonuc == sayı) {
    console.log("Sayı armstrong bir sayıdır");
    alert("Sayı armstrong bir sayıdır");
} else {
    console.log("Sayı armstrong bir sayı değildir");
    alert("Sayı armstrong bir sayı değildir");
}
