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

  $("body").swipe({
    swipeRight: function(event, distance, duration, fingerCount, fingerData) {
      var href = $(".previous").attr('href');
      if( href !== undefined){
        window.location.href = href;
      }
    },

    swipeLeft: function(event, distance, duration, fingerCount, fingerData) {
      var href = $(".next").attr('href');
      if( href !== undefined){
        window.location.href = href;
      }
    },
    threshold:0
  });

});
