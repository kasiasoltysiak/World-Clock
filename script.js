let newYorkElement = document.querySelector("#new-york");
let newYorkDate = newYorkElement.querySelector(".date");
newYorkDate.innerHTML = moment().format("MMMM Do YYYY");
let newYorkTime = newYorkElement.querySelector(".time");
newYorkTime.innerHTML = moment().format("hh:mm:ss");
let meridianElement = document.querySelector("#meridian");
meridianElement.innerHTML = moment().format("a");

//hh:mm a
