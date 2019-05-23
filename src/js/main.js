$(document).ready(function () {
   /******************************
       BOTTOM SCROLL TOP BUTTON
    ******************************/
   var scrollTop = $(".scrollTop");

   $(scrollTop).click(function (event) {
      event.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
      return false;
   });
});

/******************************
 BASIC FORM VALIDATION
******************************/

var main = function () {
   $('form').submit(function () {
      var firstName = $('#firstname').val();

      if (firstName === "") {
         $('.firstname-error').text('Please enter your first name.')
      }

      return false;
   });

   $('form').submit(function () {
      var lastName = $('#lastname').val();

      if (lastName === "") {
         $('.lastname-error').text('Please enter your last name.')
      }

      return false;
   });

   $('form').submit(function () {
      var email = $('#email').val();

      if (email === "") {
         $('.email-error').text('Please enter your email address.')
      };
      return false;
   })
}

$(document).ready(main);