// Dizinin Metotları

/*
push                : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
unshift             : dizinin başına eleman ekler, eleman sayısını geriye döner

pop                 : dizinin sonundan eleman siler, eleman sayısını döner
shift               : dizinin başından eleman siler, eleman sayısını döner

splice(index, incdex) :eleman eklemek ve silmek için kullanılır.

toString            : diziyi stringe çevirebiliriz.
join 	            : diziyi stringe çevirir.Farkı ise araya eleman ekleyebiliriz

concat              : dizileri birleştirmek için kullanılır.
slice(dilimlemek) 	: diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length 	            : dizinin uzunluğunu verir.
reverse             : dizinin elemanlarını ters çevirmek
split(bölmek) 	    : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf             : elemanın index numarasını verir.
includes            : verilen elemanı içeriyor mu ona bakar
        */

let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
// let arabalar2 = ["hundai", "opel", "tofaş"];
// PUSH METOT--------------------
// console.log(arabalar.length);
// arabalar.push("honda");
// console.log(arabalar.length);
// console.log(arabalar);

//UNSHIFT METODU------------
// arabalar.unshift("opel");
// console.log(arabalar);

//POP METODU----------
// arabalar.pop();
// console.log(arabalar);
// console.log(arabalar.pop());  --->Silinen elemanı ekrana yazdırır

//SHIFT METODU----------
// arabalar.shift();
// console.log(arabalar);
// console.log(arabalar.shift()); ---> Silinen elemanı ekrana yazdırır

//SPLICE METODU
// console.log(arabalar);
// arabalar.splice(2, 0, "opel");  // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(arabalar);
// arabalar.splice(1, 2);
// console.log(arabalar);
// arabalar.splice(2, 2, "hundai");
// console.log(arabalar);

// toSTRING METOT
// console.log(arabalar);
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(arabalar.toString());
// console.log(typeof stringArabalar);

//JOIN METOT
// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);

//CONCAT METOT
// let birlesikDizi = arabalar1.concat(arabalar2);
// console.log(birlesikDizi);

//SLICE METOT
// console.log(arabalar);
// let yeniDizi = arabalar.slice(2, 3);
// console.log(yeniDizi);

//LENGTH özellik
// console.log(arabalar.length);

//REVERSE METOT
// console.log(arabalar);
// console.log(arabalar.reverse());
// console.log(arabalar);

//SPLIT METOT
// let isimler = "Salih, Ali, Veli";
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);

//INDEXOF METOT

// console.log(arabalar.indexOf("toyota"));

//INCLUDES METOT
// console.log(arabalar.includes("bmw"));  ---->boolean sonuc döner
// console.log(arabalar.includes("hundai"));














