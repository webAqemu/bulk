import * as myFunctions from "./modules/functions.js"
myFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper();

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

