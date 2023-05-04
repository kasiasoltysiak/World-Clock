function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  newYorkDate.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  let newYorkTime = newYorkElement.querySelector(".time");
  newYorkTime.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss[<small>]A[</small>]");

  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDate = amsterdamElement.querySelector(".date");
  amsterdamDate.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("MMMM Do YYYY");
  let amsterdamTime = amsterdamElement.querySelector(".time");
  amsterdamTime.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("hh:mm:ss[<small>]A[</small>]");

  let klElement = document.querySelector("#kl");
  let klDate = klElement.querySelector(".date");
  klDate.innerHTML = moment().tz("Asia/Kuala_Lumpur").format("MMMM Do YYYY");
  let klTime = klElement.querySelector(".time");
  klTime.innerHTML = moment()
    .tz("Asia/Kuala_Lumpur")
    .format("hh:mm:ss[<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

//hh:mm a
