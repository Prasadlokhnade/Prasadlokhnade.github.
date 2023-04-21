
// the is the code for the changing the font and style of lights

let h=document.getElementsByClassName("lights");
h[0].style.fontStyle="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";

// this is the code for the changing the img with the js

function img(counter) {

  setInterval(() => {
    let i = document.getElementById("slider");
    //console.log(i);

    if (counter == 1) {
      i.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbwLcilCm4l9dRwCsJCDR4tNkFqVj7cbNjQf_e97RRA&usqp=CAU&ec=48665698";
      counter = 2;
    }

    else if (counter == 2) {
      i.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJAxLxJ83ADAeI0niQGDjACUEkfoY9J1IlNgyx-05iQ&usqp=CAU&ec=48665698";
      counter = 3;
    }

    else {
      i.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UiUIscfi4vbuqr5o2J4P5okjkuKgmUzMhI-g6UFoBg&usqp=CAU&ec=48665698";
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
