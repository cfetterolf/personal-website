
/*      GLOBALS       */
var experience = {'Fours iOS App': "",
                  'Booz Allen Hamilton': "",
                  'ACG Research': "",
                  'Medivation Inc.': ""};







// Smooth Scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});

$( document ).ready() {
  alert('hi')
}
