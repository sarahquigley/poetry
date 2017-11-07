document.addEventListener("DOMContentLoaded", function(){

  var waypoint = new Waypoint({
    element: document.getElementById('site-header'),
    handler: function(direction) {
      var directionY = direction.split(' ')[0];
      var scrolledClass = 'site-header--scrolled';
      if(directionY === 'down') {
        this.element.classList.add(scrolledClass);
      } else {
        this.element.classList.remove(scrolledClass);
      }
    },
    offset: -50
  });

});
