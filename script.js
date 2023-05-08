function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date");
    newYorkDate.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    let newYorkTime = newYorkElement.querySelector(".time");
    newYorkTime.innerHTML = moment()
      .tz("America/New_York")
      .format("hh:mm:ss[<small>]A[</small>]");
  }

  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDate = amsterdamElement.querySelector(".date");
    amsterdamDate.innerHTML = moment()
      .tz("Europe/Amsterdam")
      .format("MMMM Do YYYY");
    let amsterdamTime = amsterdamElement.querySelector(".time");
    amsterdamTime.innerHTML = moment()
      .tz("Europe/Amsterdam")
      .format("hh:mm:ss[<small>]A[</small>]");
  }

  let klElement = document.querySelector("#kl");
  if (klElement) {
    let klDate = klElement.querySelector(".date");
    klDate.innerHTML = moment().tz("Asia/Kuala_Lumpur").format("MMMM Do YYYY");
    let klTime = klElement.querySelector(".time");
    klTime.innerHTML = moment()
      .tz("Asia/Kuala_Lumpur")
      .format("hh:mm:ss[<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss[<small>]A[</small>]"
          )}</div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
