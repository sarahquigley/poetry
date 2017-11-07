document.addEventListener("DOMContentLoaded", function(){

  var waypoint = new Waypoint({
    element: document.getElementById('site-header'),
    handler: function(direction) {
      var scrolledClass = 'site-header--scrolled';
      if(direction === 'down') {
        this.element.classList.add(scrolledClass);
      } else {
        this.element.classList.remove(scrolledClass);
      }
    },
    offset: -50
  });

  Waypoint.refreshAll();
});
