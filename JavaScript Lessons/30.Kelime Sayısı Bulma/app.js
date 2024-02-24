// Kelime sayısı bulma uygulaması

let metin = "Şuanda İstanbulda Eğitim izlemekteyim";

//let harf = prompt("Harfi giriniz");
// let sonuc = bul(harf);
// alert("Harf sayısı :" + sonuc);

bul("a");

function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
            toplam++;
        }
    }
    console.log("Harf sayısı :" + toplam);
    // return toplam;
}