//MOUSE EVENTLARI

//DOMContentLoaded   --  document nesnesi ile çalışır
//load  --  window nesnesi ile çalışır
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave


//document.addEventListener("DOMContentLoaded", run);
// window.addEventListener("load", run);

// function run() {
//     console.log("Sayfa yüklendi");
// }


// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("click", run);

// function run(e) {
//     console.log(e.type);
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("dblclick", run);
// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run);

cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);

function run(e) {
    console.log(e.type);
}









