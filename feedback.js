let a=new Date();
let min=a.getDate();
let hour=a.getFullYear();

time=document.getElementsByTagName("pre")[0];
time.innerHTML=time.innerHTML+"date="+min+"| Year="+hour;
console.log(time);
