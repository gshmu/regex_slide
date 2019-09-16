function connect_remark(slideshow, host) {
  var socket = io(host);

  socket.on('change', function(where){
    if(where=='next'){
      slideshow.gotoNextSlide();
    } else {
      slideshow.gotoPreviousSlide();
    }
  });
};
