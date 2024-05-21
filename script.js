var clr = document.getElementById("clr");
clr.oninput = ()=>{
    document.body.style.backgroundColor = clr.value;
  
};


var well = document.getElementById("wel");
well.oninput = ()=>{
    document.getElementById("del").style.backgroundColor = well.value;
}


var demo = (( num1, num2)=>{
    var result = num1+num2; 
    console.log(result);
    return ()=>{
        
       
    }

   
    
})
(2,3)


function tracker(){
    return new Promise((resolve, reject) => {
        var rand = Math.floor(Math.random()*2);
        if (rand)
          resolve();
          else
          reject();
    })


}

tracker().then(()=>{console.log("not good");})
.catch(()=>{console.log("its good");})



var app = new Promise((resolve, reject) => {
    var whatsapp = false;
    if(whatsapp)
     resolve();
     else
     reject();

})

app.then(()=>{document.getElementById("play").innerText= "best application"})
.catch(()=>{console.log("bad");})
