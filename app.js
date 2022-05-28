const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const ınputValue = document.querySelector("#date");
const messega = document.querySelector(".hidden-message");

const myDate = (e) => {
  const birth = new Date(ınputValue.value);
  let date = new Date();
  let ageNow = new Date(date - birth);
  let yearFromDate = ageNow.getFullYear() - 1970;
  let monthFromDate = ageNow.getMonth();
  let dayFromDate = ageNow.getDay();
  let minuteFromDate = ageNow.getMinutes();
  let secondFromDate = ageNow.getSeconds();
  let hourFromDate = ageNow.getHours();

  if (+yearFromDate >= 0) {
    year.innerHTML = yearFromDate.toString().padStart(2, "0");
    month.innerHTML = monthFromDate.toString().padStart(2, "0");
    day.innerHTML = dayFromDate.toString().padStart(2, "0");
    hour.innerHTML = hourFromDate.toString().padStart(2, "0");
    minute.innerHTML = minuteFromDate.toString().padStart(2, "0");
    second.innerHTML = secondFromDate.toString().padStart(2, "0");
    messega.innerHTML = `
    Do not go gentle into that good night,
    Old age should burn and rave at close of day;
    Rage, rage against the dying of the light.`;
  }
};

ınputValue.addEventListener("change", () => {
  setInterval(() => {
    myDate();
  }, 1000);
});
