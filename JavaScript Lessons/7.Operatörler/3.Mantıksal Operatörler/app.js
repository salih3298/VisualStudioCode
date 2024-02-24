// MANTIKSAL OPERATÖRLER

/* 

&& : ve
|| : veya
!  : değil

*/

//  Yaşınız 18'den büyükse VE 3000 TL paranız varsa 
//  VE sağlığınız yerinde ise ehliyet alabilirsiniz. 

let yas = 20;
let para = 3500;
let saglikliMi = false;
let hakSayisi = 3;

// console.log(yas > 18 && para > 3000 && saglikliMi == true);


// console.log(5 > 3 || 2 < 1);

// console.log(!(5 > 3));

console.log((para > 3000 && hakSayisi > 1) || (yas > 18 && saglikliMi == true));




