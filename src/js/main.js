$(document).ready(function () {
   /******************************
       BOTTOM SCROLL TOP BUTTON
    ******************************/

   // declare variable
   var scrollTop = $(".scrollTop");

   //Click event to scroll to top
   $(scrollTop).click(function(event) {
      event.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
      return false;
   }); // click() scroll top EMD

}); // ready() END