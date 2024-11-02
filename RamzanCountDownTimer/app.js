var ramadanDate = new Date("Feb 28, 2025");

function updateCountdown() {
  var todayDate = new Date();
  var differenceDate = ramadanDate.getTime() - todayDate.getTime();
  console.log(differenceDate);
  var secondsDifference = Math.floor(differenceDate / 1000);
  console.log(secondsDifference);

  var days = Math.floor(secondsDifference / (3600 * 24));

  var hours = Math.floor((secondsDifference % (3600 * 24)) / 3600);

  var minutes = Math.floor((secondsDifference % 3600) / 60);

  var seconds = secondsDifference % 60;

  document.getElementById("days").value = days;
  document.getElementById("hours").value = hours;
  document.getElementById("minutes").value = minutes;
  document.getElementById("seconds").value = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();
