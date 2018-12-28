

let currentTime = '00:00:00';

setInterval(setTime , 1000);

function setTime(){
   let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    
    if(sec  <  10){
         sec = '0'+ sec;
    }
    if (min < 10 ){
        min = '0' + min;
    }
    if (hour < 10 ){
        hour = '0' + hour;
    }


    currentTime = hour + ":" + min + ":"  + sec;
    
    document.getElementById('clock-main__text').textContent = currentTime; 
}
