
// Smooth Scroll on clicking nav items
/*
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $($href).offset().top - 30
  }, 1000);
});


// Smooth scroll on logo click
$('footer a').click(function () {
  var $href = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $($href).offset().top - 30
  }, 1000);
});
*/

// Smooth scroll to top of clicked experience section
$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.card');
  $('html,body').animate({
    scrollTop: $card.offset().top - 10
  }, 500);
});

$('footer a, nav a')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      //console.log(target);
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          //$target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //$target.focus(); // Set focus again
          };
        });
      }
    }
  });

