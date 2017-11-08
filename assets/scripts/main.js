document.addEventListener("DOMContentLoaded", function(){

  var waypoint = new Waypoint({
    element: document.getElementById('site-nav'),
    handler: function(direction) {
      var scrolledClass = 'scrolled--sticky-site-nav';
      if(direction === 'down') {
        document.body.classList.add(scrolledClass);
      } else {
        document.body.classList.remove(scrolledClass);
      }
    }
  });

  Waypoint.refreshAll();
});

window.onscroll = function() {
  var target = document.getElementById("site-header");
  var height = target.offsetHeight / 1.5;
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  target.style.opacity = (height - scrollTop) / height;
};
