$(function(){

  if ( 'ontouchstart' in document.documentElement) {
    $('html').addClass('touch');
  } else {
    $('html').addClass('no-touch');
  }

  $("#site-title > i").on("tap", function(event){
    event.preventDefault();
    $("#site-header > nav > a").toggleClass("open");
  });
  
});
