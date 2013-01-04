$('.boxed').fadeIn('slow');
setInterval( function() {
 $('.boxed').css({
   position:'absolute',
   display: 'block',
	left: ($(window).width() 
     - $('.boxed').width())/2 ,
   top: ($(window).height() 
     - $('.boxed').height())/2
  });	
}, 1);
setInterval( function() {
 $('#l').css({
   position:'relative',
   display: 'block',
   top: ($(window).height() 
     - $('#l').height())/2
  });	
}, 1);