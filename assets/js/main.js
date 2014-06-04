$(function(){

  if ( 'ontouchstart' in document.documentElement) {
    $('html').addClass('touch');
  } else {
    $('html').addClass('no-touch');
  }
  
  $$("body").swipeRight(function(){
    console.log("swipingRight");
    alert("swiping right");
    var href = $(".previous").attr('href');
    if( href !== undefined){
      window.location.href = href;
    }
  });

  $$("body").swipeLeft(function(){
    console.log("swipingLeft");
    alert("swiping left");
    var href = $(".next").attr('href');
    if( href !== undefined){
      window.location.href = href;
    }
  });

});
