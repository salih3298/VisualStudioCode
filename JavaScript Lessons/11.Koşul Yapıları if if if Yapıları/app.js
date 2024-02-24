// ÇOKLU İF KULLANMAK

/*
adını ve tckn
ad : boş geçilemez
TCKN : 11 karakterden oluşsun
*/

let ad = prompt("İsminizi giriniz :");
let TCNo = prompt("TC numaranızı giriniz :");


function kontrolEt(ad, TCNo) {
    if (ad != "") {
        if (TCNo.length == 11) {
            console.log("İsim ve TCNo problemsiz girildi");
        } else {
            console.log("Lütfen TcNunızı 11 karakter olarak giriniz");
        }

    } else {
        console.log("Lütfen isim alanını boş bırakmayınız");
    }
}

// if else : 2 seçeneğin olduğu yerlerde kullanılır
// if else if else : 2den fazla seçeneğin olduğu yerde kullanılır
// if if if :Ayrı koşullar için kullanılır.

kontrolEt2(ad, TCNo);

function kontrolEt2(ad, TCNo) {
    if (ad == "") {
        console.log("Lütfen isim alanını boş bırakmayınız");
        return;
    }
    if (TCNo.length != 11) {
        console.log("Lütfen TcNunızı 11 karakter olarak giriniz");
        return;
    }
    console.log("İsim ve TCNo problemsiz girildi")


}






