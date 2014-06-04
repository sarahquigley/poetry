$(function(){

  if ( 'ontouchstart' in document.documentElement) {
    $('html').addClass('touch');
  } else {
    $('html').addClass('no-touch');
  }
  
});
