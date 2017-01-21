var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 1000);

    $('body').animate({
      left: "1000px"
    }, 1000);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-250px"
    }, 1000);

    $('body').animate({
      left: "0px"
    }, 1000);
  });
  
  window.alert("Get 10% OFF your initial consultation when you download and print a brochure!"); 
};

$(document).ready(main);