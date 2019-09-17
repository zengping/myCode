$(document).ready(function(){
  $('.list-tree label').click(function(){
    $(this).next("ul").slideToggle();
	$(this).toggleClass("treeon");
  });
});
