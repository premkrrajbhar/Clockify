const dateElement = document.getElementById("date");
const timeElement = document.getElementById("clock");

setInterval(() => {
  const dateTime = new Date();
  dateElement.innerText = dateTime.toDateString();
  timeElement.innerText = dateTime.toLocaleTimeString();
}, 1000);
