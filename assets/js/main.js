$(function(){

  if ( 'ontouchstart' in document.documentElement) {
    $('html').addClass('touch');

    $('#site-title i').click(function(event){
      event.preventDefault();
      $('#site-header').toggleClass('open');
    });

  } else {
    $('html').addClass('no-touch');
  }

  var changePage = function(page){
    var href = $(page).attr('href');
    if( href !== undefined){
      window.location.href = href;
    }
  };

  $("body").swipe({
    swipeRight: function(event, distance, duration, fingerCount, fingerData) {
      changePage(".previous");
    },

    swipeLeft: function(event, distance, duration, fingerCount, fingerData) {
      changePage(".next");
    },
    threshold:0
  });

});
