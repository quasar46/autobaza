$(document).ready(function () {
  $('.slide-one').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });

  $('.slide-four').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 5
      }
    }
  });

  $('.slide-two').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    nav: false
  });

  $('.slide-three').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    nav: false
  });
});

document.addEventListener("DOMContentLoaded", function (event) {
  // аккордион
  var acc = document.getElementsByClassName("accordion");
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-menu');
  var close = document.querySelector('.close');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // tabs
  function openContract(evt, contractName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contractName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // tabs center
  var tab = document.querySelector('.tab');
  var tabs = document.querySelectorAll('.tablinks');

  for (var i = 0; i < tabs.length; i++) {
    if (tabs.length > 2) {
      tab.style.justifyContent = 'space-between';
    } else {
      tabs[i].style.marginRight = '20px';
    }
  }

  burger.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  close.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});