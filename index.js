const makeClock = () =>
{
      let Data = new Date();
      var hour = Data.getHours();
      var minutes = Data.getMinutes();
      var seconds = Data.getSeconds();
      let element = document.querySelector('.clock').innerHTML=`${hour}:${minutes}:${seconds}`
}

makeClock();

setInterval(makeClock,1000);