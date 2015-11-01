$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
 
        
$(function() 
        {
            //for each .nav create a responsive version
            $(".nav").each(function()
            {
                //pass the nav element and set the break point.
                new ResponsiveNav($(this), 500);
            });
        });


$(document).ready(function(){
  $("#info").fitVids();
});