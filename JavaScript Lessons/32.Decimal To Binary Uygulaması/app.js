// Decimal to Binary Conversion

// 10 5 2 1

convertDecimalToBinary(100);
function convertDecimalToBinary(number) {
    let binary = "";
    while (true) {
        binary += (number % 2).toString();  // binary += (number % 2)+"";
        number = Math.floor(number / 2);
        if (number == 1) {
            // Artık bölmek yok döngüden çıkacağız
            binary += 1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç :" + result);
}



function reverse(binary) {
    let reverseBinary = "";
    for (let i = binary.length - 1; i >= 0; i--) {
        reverseBinary = reverseBinary + binary.charAt(i);
    }
    return reverseBinary;
}