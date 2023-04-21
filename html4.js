
// the is the code for the changing the font and style of lights

let h=document.getElementsByClassName("lights");
h[0].style.fontStyle="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

// this is the code for the changing the img with the js

function img(counter) {

  setInterval(() => {
    let i = document.getElementById("slider");
    //console.log(i);

    if (counter == 1) {
      i.src = "/Artificial-IntelligenceAI.jpeg";
      counter = 2;
    }

    else if (counter == 2) {
      i.src = "/Doctors_For_Men-732x549-thumbnail-1.webp";
      counter = 3;
    }

    else {
      i.src = "/1_NMSSETDN1qwsveyx7VrcmQ.png";
      counter = 1;
    }
  }, 2000)
}

counter = 1;

img(counter);


// this is the code for the js for the date and time

let a=new Date();
let min=a.getDate();
let hour=a.getFullYear();

time=document.getElementsByTagName("pre")[1];
console.log(time);
time.innerHTML=time.innerHTML+"date="+min+"| Year="+hour;
console.log(time);
