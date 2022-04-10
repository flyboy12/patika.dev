 let myName = document.querySelector('#myName');
 let myClock = document.querySelector('#myClock');
myName.innerHTML = prompt("Adınızı Giriniz", 'Yabancı');

function showTime(){
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day = date.getDay();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

      

     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + gunler[day];
  
    document.getElementById("myClock").innerText = time; 
    let t = setTimeout(function(){ showTime() }, 1000); 
  
}

showTime();