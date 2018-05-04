$(document).ready(function() {
  $('body').scrollspy({target: "#navbar", offset: 90});
  $('#home').css('height', $(window).height());

  scrollTo();
  navbarScroll();
});

$(window).on('load', function() {
  console.log($(window).width());
  if ( $(window).width() <= 768 )
    $('.navbar').addClass('bg-light');
  else if( ($(window).width() > 768) && ($("html, body").scrollTop() > 110) )
    $('.navbar').addClass('bg-light');
  else
    $('.navbar').removeClass('bg-light');
});

function navbarScroll() {
  $(document, "html, body").on('scroll touchmove', function() {
    console.log($(window).width());
    if ( $(window).width() <= 768 )
      $('.navbar').addClass('bg-light');
    else if( ($(window).width() > 768) && ($("html, body").scrollTop() > 110) )
      $('.navbar').addClass('bg-light');
    else
      $('.navbar').removeClass('bg-light');
  });
};

function scrollTo() {
  $('#navbar a').click(function() {
    $("html, body").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
}
