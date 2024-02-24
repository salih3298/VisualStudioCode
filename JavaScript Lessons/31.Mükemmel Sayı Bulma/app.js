// Mükemmel Sayı Uygulaması

// 6   -   28   -   496

// 6 sayısını bölen sayılar --->1,2,3,6 =12=6*2

// bir sayısı bölen sayıların toplamı orjinal
// sayının herhangi bir katına eşitse bu sayı mükemmel sayıdır



function isPerfectNumber(number) {
    let toplam = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            toplam = toplam + i;
        }
    }
    if (toplam % number == 0) {
        console.log("Bu sayı mükemmel bir sayıdır");
    } else {
        console.log("Bu sayı mükemmel bir sayı değildir");
    }
}
isPerfectNumber(500);










