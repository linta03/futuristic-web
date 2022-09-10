
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
