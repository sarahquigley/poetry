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

  /*
  $$('body').swipeRight(function(){
    console.log("swipingRight");
    var href = $(".previous").attr('href');
    if( href !== undefined){
      window.location.href = href;
    }
  });

  $$('body').swipeLeft(function(){
    console.log("swipingLeft");
    var href = $(".next").attr('href');
    if( href !== undefined){
      window.location.href = href;
    }
  });
  */

});
