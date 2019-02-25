// REGLAGES DU SLIDER NAVBAR

var settings = {
  toggle: "#sliiider-toggle", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
  exit_selector: ".slider-exit", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
  animation_duration: "0.5s", //how long it takes to slide the menu
  place: "left", //where is the menu sliding from, possible options are (left | right | top | bottom)
  animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
  body_slide: false, //set it to true if you want to use the effect where the entire page slides and not just the div
  no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
  auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
};

var settings2 = {
  toggle: "#sliiider-toggle", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
  exit_selector: ".slider-exit", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
  animation_duration: "0.3s", //how long it takes to slide the menu
  place: "right", //where is the menu sliding from, possible options are (left | right | top | bottom)
  animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
  body_slide: false, //set it to true if you want to use the effect where the entire page slides and not just the div
  no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
  auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
};

$("#hiddendiv").sliiide(settings); //initialize sliiide
$("#hiddendiv2").sliiide(settings2);


// BACK TO TOP button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});


//LE DEFAULT TEXT DE L'INPUT S'EFFACE AU CLIC DANS LA ZONE
$(".form-control").click(function() {
  this.value = '';
});
//

//BOUTON QUI CHANGE DE COULEUR LORS DU CLICK SUR L'ECRAN OU LE BOUTON
var button = document.getElementById('sliiider-toggle')
var slide = document.getElementById('hiddendiv2')
var id1 = document.getElementById('changeboutton1')
var id2 = document.getElementById('changeboutton2')
var id3 = document.getElementById('changeboutton3')
var id4 = document.getElementById('changeboutton4')
var id5 = document.getElementById('changeboutton5')
var id6 = document.getElementById('changeboutton6')
var id7 = document.getElementById('changeboutton7')


function colorchange() {
  $("#sliiider-toggle").toggleClass('buttonalt')
}

button.addEventListener("click", colorchange);
slide.addEventListener("click", colorchange);
id1.addEventListener("click", colorchange);
id2.addEventListener("click", colorchange);
id3.addEventListener("click", colorchange);
id4.addEventListener("click", colorchange);
id5.addEventListener("click", colorchange);
id6.addEventListener("click", colorchange);
id7.addEventListener("click", colorchange);
//
