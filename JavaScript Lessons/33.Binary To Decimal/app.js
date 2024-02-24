// Binary to Decimal Conversion (ikilik sayıdan 10luk sayıya çevirmek)

// console.log(Math.pow(2, 3));  // Math sınıfının pow elementi sayılıran üslü kuvvetini alır

let binary = "1011000100";
function convertBinaryToDecimal(binary) {
    let toplam = 0;
    let ust = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        let sonuc = Number(binary.charAt(i)) * Math.pow(2, ust);
        toplam = toplam + sonuc;
        ust++;
    }
    console.log("Sonuç :" + toplam);
}

convertBinaryToDecimal(binary);