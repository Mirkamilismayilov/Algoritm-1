let qiymeti = document.querySelector('.malinqiymeti');
let sayi = document.querySelector('.sayi');
let cemi = document.querySelector('.cemi');
let conta = document.querySelector('.container');

let eded = document.querySelector(".eded").innerHTML;


let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");

// let disabled = true;


let newcontent = 1;
let newprice = 200;
cemi.innerHTML = newprice;
qiymeti.innerHTML = newprice;
sayi.innerHTML = newcontent;



increment.addEventListener("click", () => {
    newcontent++;
    sayi.innerHTML = newcontent;
    cemi.innerHTML = newcontent * newprice;
    if(newcontent > 1){
     decrement.removeAttribute("disabled")
     decrement.style.backgroundColor = "rgb(102, 255, 0)"
    }
})

decrement.addEventListener("click", () => {

    if(newcontent <= 1){
      decrement.setAttribute("disabled","");
      decrement.style.backgroundColor = "gray"
      newcontent = 1
    
    }else{
    newcontent--;
    sayi.innerHTML = newcontent;
    cemi.innerHTML = newcontent * newprice;
    }

})


