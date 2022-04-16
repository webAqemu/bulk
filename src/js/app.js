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

// burger menu
const sidebar = document.querySelector(".sidebar")
document.addEventListener("click", function(e) {
  if(e.target.classList.contains("sidebar__burger")) {
    sidebar.classList.toggle("opened")
  }
})

// изменение разметки виджетов на мобилке
const widgets = document.querySelectorAll(".widgets-card")

if(widgets.length !== 0 && window.innerWidth < 1000) {
  widgets.forEach(widget => {
    const review = widget.querySelector(".reviews")
    const status = widget.querySelector(".status")
    const code = widget.querySelector(".code")
    const id = widget.querySelector(".id")
    const widgetBottom = document.createElement('div')
    widgetBottom.classList.add("widgets-card__bottom")

    const widgetTop = widget.querySelector(".widgets-card__top")
    const widgetBtn = widget.querySelector(".widgets-card__settings")
    widgetTop.insertAdjacentElement("afterend",  status)
    widgetTop.insertAdjacentElement("afterend",  review)

    widgetBottom.insertAdjacentElement("afterbegin", id)
    widgetBottom.insertAdjacentElement("afterbegin", code)

    widgetBtn.insertAdjacentElement("afterend",  widgetBottom)
  })
}

const moderation = document.querySelector('.moderation')

if(moderation) {
  moderation.addEventListener('click',  function(e) {
    if(e.target.classList.contains('moderation-close')) {
      e.target.closest('.moderation-popup').classList.remove("active")
    }
    if(e.target.classList.contains('show')) {
      moderation.querySelector(".moderation-popup").classList.add('active')
    }
    if(e.target.classList.contains('close') && e.target.parentElement.classList.contains('msg')){
      e.target.closest('.msg').classList.add('hiden')
    }
    if(e.target.classList.contains('filters') || e.target.classList.contains('options') || e.target.classList.contains('filter')) {
      e.target.querySelector('ul').classList.add('active')
    }
    if(e.target.classList.contains('option') && e.target.parentElement.classList.contains('active')) {
      e.target.parentElement.classList.remove('active')
    }
  })
}

