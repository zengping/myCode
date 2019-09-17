$(document).ready(function () {

  $.get('nav.html', function(data) {
    $('#sys-menu ul').empty().append(data);
    var urlstr = location.href;
    var urlstatus = false;
    urlstr = urlstr.substring(urlstr.lastIndexOf("/") + 1);

    $("#sys-menu ul.sys-menu-child li a").each(function() {
       if (urlstr.split(/[.]/)[0] === $(this).attr('href').split(/[.]/)[0]) {
        $(this).parent().parent().parent().addClass('active');
        $(this).parent().addClass('active');
        urlstatus = true;
      } else {
        $(this).parent().removeClass('active');
      }
    });

    $("#sys-menu > ul > li > a").each(function () {
    if ((urlstr).indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
     $(this).parent().addClass('active'); urlstatus = true;
   }
   else if(urlstr.split(/[.]|-/)[0]==$(this).attr('href').split(/[.]|-/)[0]) {
    $(this).parent().addClass('active'); urlstatus = true;
  }
  else {
   $(this).parent().removeClass('active');
 }
});


    if (!urlstatus) {
      $("#sys-menu ul li").eq(0).addClass('active');
    }
    $(".curLine").css({
      "width": $("#sys-menu ul li.active").width(),
      "left": $("#sys-menu ul li.active").position().left
    });
  })


  $("#sys-menu >ul > li").on("click", function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
  $("#sys-menu").on("mouseover", "li", function() {
    $(".curLine").stop(true).animate({
      left: $(this).position().left,
      width: $(this).width()
    }, 200);
  })

  $("#sys-menu").on("mouseout", "li", function() {
    $(".curLine").animate({
      left: $(".active").position().left,
      width: $(".active").width()
    }, 200)
  })


  $(".check-radio").on("click", "li", function() {
    $(this).siblings().removeClass('active').end().addClass('active');
  })
  $(".check-toggle").on("click", "li", function() {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
  })

  $(".tableclick").on("click", "tr", function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  $(".serachmore").click(function () {
    $(".searchinfo").slideToggle();
  })

  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function () {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function () {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().click(function () {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd", "active", ".tab-bd");


})