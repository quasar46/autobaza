$('.slide-one').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

$('.slide-two').owlCarousel({
  loop: true,
  dots: true,
  items: 1,
  nav: false
});

// аккордион
var acc = document.getElementsByClassName("accordion");
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

for (var i = 0; i <= tabs.length; i++) {
  if (tabs.length > 2) {
    tab.style.justifyContent = 'space-between';
  } else {
    tabs[i].style.marginRight = '20px';
  }
}

// submenu

// var itemsMenu = document.querySelectorAll('.nav-list li');
// var subsMenu = document.querySelectorAll('.submenu');

// var funcItem = function (itemMenu) {
//   itemMenu.addEventListener('mouseover', function () {
//     subMenu.fadeOut(1000);
//   });
// };

// var funcSub = function (subMenu) {
//   subMenu.addEventListener('mouseover', function () {
//     subMenu.fadeOut(1000);
//   });
// }

// for (var i = 0; i < itemsMenu.length; i++) {
//   var itemMenu = itemsMenu[i];
// }

// for (var i = 0; i < subsMenu.length; i++) {
//   var subMenu = subsMenu[i];
// }