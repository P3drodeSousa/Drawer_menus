$('.toggle').click(function(){
  $(this).closest('.body').toggleClass('open');
});

$('.close').click(function(){
  $(this).closest('.body').removeClass('open');
});