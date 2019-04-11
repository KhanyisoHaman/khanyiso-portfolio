
// JQUERY
// For my back to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


// Toggle Button
function toggleNavigation() {
  document.getElementById("toggleNav").classList.toggle('active');
}