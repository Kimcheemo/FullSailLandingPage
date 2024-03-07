$(document).ready(function() {

  var overlay = $("#overlay");
  var iconDiv = $(".info-image");
  var divider = $(".content-divider");

  // Adds overlay color when viewport is < 793
  function toggleOverlay() {
    if ($(window).width() < 763) {
      overlay.addClass("overlay");
    } else {
      overlay.removeClass("overlay");
    }
  }

  // Adds info icon in header when form is not visible
  function toggleInfoIcon() {
    if ($(window).width() < 1200) {
      iconDiv.show();
    } else {
      iconDiv.hide();
    }
  }

  // Adds divider btwn the content and form when form moves below
  function toggleDivider() {
    if ($(window).width() < 1200) {
      divider.show();
    } else {
      divider.hide();
    }
  }

  // Scrolls to Request Form when info icon is clicked on
  $('#scroll-button').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#form').offset().top
    }, 600); // 0.6s
  })

  // Scrolls to Request Form when Additional info is clicked on
  $('.addtnl-info').click(function(e) {
    console.log("clicked")
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#form').offset().top
    }, 600); // 0.6s
  })

  toggleOverlay();
  toggleInfoIcon();
  toggleDivider();

  $(window).resize(function() {
    toggleOverlay();
    toggleInfoIcon();
    toggleDivider();
  });

});
