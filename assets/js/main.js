$(function(){

  if ( 'ontouchstart' in document.documentElement) {
    $('html').addClass('touch');
    alert('touch');
  } else {
    $('html').addClass('no-touch');
    alert('no-touch');
  }
  
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

  $$(".post footer").tap(function(){
    console.log("tapping");
  });

});
