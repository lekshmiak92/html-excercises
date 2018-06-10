$(function(){
  var currentSlide = 1;
  var totalImages = $('.img_property').length;

  // setInterval(function(){
  //   $('.slide-wrap').animate({'margin-left': '-=740px'}, 1000,function() {
  //     currentSlide++;
  //     console.log(currentSlide);

  //     if(currentSlide === $('.img_property').length) {
  //       currentSlide = 1;
  //       $('.slide-wrap').css('margin-left', '0px');
  //     }
  //   });
  // }, 3000,);

  setInterval(animateFunction, 3000);

  function animateFunction(){
    if(currentSlide < totalImages){
      $('.slide-wrap').animate({'margin-left': '-=740px'}, 1000);
      currentSlide++;
    }else{
      currentSlide = 1;
      $('.slide-wrap').css('margin-left', '0px');
    }
  }

})