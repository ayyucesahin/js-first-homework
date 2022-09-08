 let username= prompt("kullanici")
 let info= document.querySelector('#info')
 info.innerHTML = `Merhaba, ${username}! Hoş geldin!`

 function GetTime(){
    var now= new Date();
    var hour= now.getHours();
    var minute= now.getMinutes();
    var second= now.getSeconds();

    var day= now.getDate();
    document.getElementById("hour").innerText=hour + ":";      
    document.getElementById("minute").innerText=minute + ":";       
    document.getElementById("second").innerText=second;


 }
 setInterval(GetTime, 1000);

