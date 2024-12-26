
const btn =document.getElementById("btn");
btn.addEventListener("click",function(){
    const input =document.getElementById("time").value;
     console.log(input);
     let output = document.getElementById("hit");
     let time =parseInt(input);
     let  kick =document.getElementById("kick");
     for (let i = time; i >= 0; i--) {

       setTimeout(() => {
             output.innerHTML=i;
             if(i<=0){
                output.innerHTML="TIME UPS!";
                kick.innerHTML="";
             }
        }, (time - i) * 1000);
    }
    output.innerHTML=i;
    console.log(i);
    output.innerHTML="time ups!";

    kick.innerHTML="";

     }
    
);