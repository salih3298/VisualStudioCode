// Beden Kitle Endeksi hesaplama

let kilo = Number(prompt("Kilonuzu Giriniz"));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));

let bedenKitleEndeksi = kilo / (boy * boy);

if (bedenKitleEndeksi < 18.5) {
    console.log("İdeal Kilonun Altındasınız " + bedenKitleEndeksi);
} else if (bedenKitleEndeksi >= 18.5 && bedenKitleEndeksi <= 24.9) {
    console.log("İdeal Kilodasınız " + bedenKitleEndeksi);
} else if (bedenKitleEndeksi >= 25 && bedenKitleEndeksi <= 29.9) {
    console.log("İdeal Kilonun üstündesiniz " + bedenKitleEndeksi);
} else if (bedenKitleEndeksi >= 30 && bedenKitleEndeksi <= 39.9) {
    console.log("İdeal Kilonun çok üstündesiniz (obez) " + bedenKitleEndeksi);
} else if (bedenKitleEndeksi >= 40) {
    console.log("İdeal Kilonun çok üstündesiniz (morbid obez) " + bedenKitleEndeksi);
}






