//Geriye değer döndüren metot tanımlamak
let donenDeger = cube(3);
console.log(donenDeger);

console.log(cube(3));

kareAl(donenDeger);
function cube(sayi) {
    let sonuc = sayi * sayi * sayi;
    //  console.log(sonuc);
    return sonuc;
}

/*
return anahtar kelimesi;
    1- Bir değeri metodun dısarısına çıkarmak taşımak için kullanılır
    2- Bir metodu bitiren anahtar kelimedir

*/
function kareAl(sayi) {
    let sonuc = sayi * sayi;
    console.log(sonuc);
}

function yazdir() {
    console.log("Salih");
    //   void : geriye değer döndürmeyen metottur.
}








