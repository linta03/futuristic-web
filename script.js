
function hy(){
    
    let number = document.getElementById("num");
    let counter =0;
setInterval(()=>{
  if(counter == 100){
    clearInterval()
  }else{

    counter += 1;
    number.innerHTML=counter+"%";
  }
},20)
let number1 = document.getElementById("num1");
let counter1 =0;
setInterval(()=>{
  if(counter1 == 100){
    clearInterval()
  }else{

    counter1 += 1;
    number1.innerHTML=counter1+"%";
  }
},20)
let number2 = document.getElementById("num2");
let counter2 =0;
setInterval(()=>{
  if(counter2 == 99){
    clearInterval()
  }else{

    counter2 += 1;
    number2.innerHTML=counter2+"%";
  }
},20)
}

hy();


// responsive navbar 
// const navSlide =()=>{
//     const burger = document.getElementById("burger");
//     const nav = document.querySelector(".navitems");
//     const cross = document.getElementById("cross")

//     burger.addEventListener('click',()=>{
//            nav.classList.toggle('nav-active');
//            burger.style.display="none"
//            cross.style.display="flex"
//     })
//     cross.addEventListener("click",()=>{
//         nav.style.transform="translate(100%)"
//         burger.style.display="flex"
//         cross.style.display="none"


//     })
// }
// navSlide()
const burger = document.getElementById("burger");
const nav = document.querySelector(".navitems");
const cross = document.getElementById("cross")
const btn = document.querySelector(".buttonNav")

function navshow(){
    nav.style.transform="translate(0%)"
    burger.style.display="none";
    cross.style.display="flex"
  
}
function navhide(){
    nav.style.transform="translate(100%)"
    burger.style.display="flex";
    cross.style.display="none"
}

