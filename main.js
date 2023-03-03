$('.hide').hide();
$('.mobile-menu-item').hide();



$('.show').click(function(){
  $('.show').hide();
  $('.hide').show();
  $('.mobile-menu-item').show();
  $('.mobile-menu-item').toggleClass('toggle-class');
});


$('.hide').click(function(){
  $('.hide').hide();
  $('.show').show();

  $('.mobile-menu-item').toggleClass('toggle-class');
});


// faq start


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

$('.faq1-hide').hide();

$('.faq1-show').click(function(){
  $('.faq1-hide').show();
  $('.faq1-show').hide();
  $('.panel1').slideDown();
});

$('.faq1-hide').click(function(){
  $('.faq1-show').show();
  $('.faq1-hide').hide();
  $('.panel1').slideUp();
});




$('.faq2-hide').hide();

$('.faq2-show').click(function(){
  $('.faq2-hide').show();
  $('.faq2-show').hide();
  $('.panel2').slideDown();
});

$('.faq2-hide').click(function(){
  $('.faq2-show').show();
  $('.faq2-hide').hide();
  $('.panel2').slideUp();
});



$('.faq3-hide').hide();

$('.faq3-show').click(function(){
  $('.faq3-hide').show();
  $('.faq3-show').hide();
  $('.panel3').slideDown();
});

$('.faq3-hide').click(function(){
  $('.faq3-show').show();
  $('.faq3-hide').hide();
  $('.panel3').slideUp();
});





$('.faq4-hide').hide();

$('.faq4-show').click(function(){
  $('.faq4-hide').show();
  $('.faq4-show').hide();
  $('.panel4').slideDown();
});

$('.faq4-hide').click(function(){
  $('.faq4-show').show();
  $('.faq4-hide').hide();
  $('.panel4').slideUp();
});


// faq end