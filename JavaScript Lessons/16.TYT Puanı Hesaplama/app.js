/*
SORULAR
1-Türkçe 40           -4 puan ...
2-Matematik 40
3-Sosyal Bilimler 20
4-Fen Bilimleri 20

---100 Puanı ÖSYM veriyor
---Okul puanı max 60 veriyor
*/

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuanı = 0;


let yeniSatir = "\r\n";
let mesaj = "TYT Puan hesaplama uygulamasına hoşgeldiniz!" + yeniSatir
    + "1-Puan hesapla" + yeniSatir
    + "2-Çıkış yap";


// 
let secim = prompt(mesaj);

switch (secim) {
    case "1":
        okulPuanı = Number(prompt("Okul puanınızı giriniz:"));
        turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz"));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısını giriniz"));

        matematikDogru = Number(prompt("Matematik doğru sayısını giriniz"));
        matematikYanlis = Number(prompt("Matematik yanlış sayısını giriniz"));

        sosyalDogru = Number(prompt("Sosyal doğru sayısını giriniz"));
        sosyalYanlis = Number(prompt("Sosyal yanlış sayısını giriniz"));

        fenDogru = Number(prompt("Fen doğru sayısını giriniz"));
        fenYanlis = Number(prompt("Fen yanlış sayısını giriniz"));

        let dogruNet = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisNet = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDogruSayisi = dogruNet - yanlisNet / 4;
        puan = (kalanDogruSayisi * 4) + 100 + okulPuanı;

        alert("TYT puanınız : " + puan);
        break;

    case "2":
        alert("Uygulamadan çıkış yapıldı!");
        break;

    default:
        alert("Lütfen geçerli bir değer giriniz");
        break;



}












