import * as myFunctions from "./modules/functions.js"
myFunctions.isWebp();
// NoUiSlider
import * as noUiSlider from 'nouislider';

if(document.querySelector(".popup-stats")) {
  const rating = document.getElementById("rating");
  const ratingInputs = document.querySelector(".popup-stats__rating-inputs")
  const inputFrom = ratingInputs.querySelector(".from")
  const inputTo = ratingInputs.querySelector(".to")
  noUiSlider.create(rating, {
    start: [2, 4],
    connect: true,
    step: 1,
    range: {
      "min": 0,
      "max": 5
    }
  })

  rating.noUiSlider.on("update", function(data) {
    const [from, to] = data
    inputFrom.value = +from
    inputTo.value = +to
  })
}


if(document.getElementById("demo")) {
  $('#demo').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "alwaysShowCalendars": true,
    "startDate": "02/17/2022",
    "endDate": "02/23/2022"
  }, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });
}


// Демонстарция попапов

document.addEventListener("click", function(e) {
  if(e.target.classList.contains("popup__close")) {
    e.target.closest(".popup").classList.remove("active")
  }
})

const popupCopied = document.querySelector(".popup--timing")
if(popupCopied) {
  setTimeout(() => {
    popupCopied.classList.remove("active")
  }, 3000)
}




