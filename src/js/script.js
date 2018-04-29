$(document).ready(function() {
  $('body').scrollspy({target: "#navbar", offset: 90});

  scrollTo();
  navbarScroll();
  centerHome();
});

$(document).reload(navbarScroll());

function navbarScroll() {
  $(document).scroll(function() {
    if( $("html, body").scrollTop() > 110 )
      $('.navbar').addClass('bg-light');
    else
      $('.navbar').removeClass('bg-light');
  });
};

function centerHome() {
  if(  $(window).height() > 400) {
    $('.center').children().css('top', -( ($('.home').height() / 2) - ($(window).height() / 2)));
  }
  else $('.center').children().css('top', '-295px');
};

function scrollTo() {
  $('#navbar a').click(function() {
    $("html, body").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
}
