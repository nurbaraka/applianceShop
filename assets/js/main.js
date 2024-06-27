
$(document).ready(function () {


  $('.btn--arrow').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 300);
  });

  /* ---------------------------------------------------------------------- */
  /*  sidebar - start
  /* ---------------------------------------------------------------------- */
  $('.btn_close, .overlay').on('click', function () {
    $('.sidebar_mobile_menu').removeClass('active');
    $('.overlay').removeClass('active');
  });

  $('.mobile_menu_btn').on('click', function () {
    $('.sidebar_mobile_menu').addClass('active');
    $('.overlay').addClass('active');

  });

  /* ---------------------------------------------------------------------- */
  /*  3rd level dropdown menu
  /* ---------------------------------------------------------------------- */
  $('.dropdown > a').addClass('dropdown-toggle');
  $('.dropdown-menu .dropdown > a').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.dropdown.show').on('.dropdown', function (e) {
      $('.dropdown-menu > .dropdown .show').removeClass("show");
    });
    $('.dropdown-menu li a.dropdown-toggle').removeClass("show_dropdown");
    if ($(this).next().hasClass('show')) {
      // $(this).addClass("show_dropdown");
    }
    return false;
  });

  $('.dropdown').on('click', function () {
    $(this).children('.dropdown-menu').toggleClass('show')
      .end().find('span').toggleClass('show')
      .end().children('.dropdown-toggle').toggleClass('text-primary');
  });

  /* ---------------------------------------------------------------------- */
  /*  counter
  /* ---------------------------------------------------------------------- */
  $('.counter-plus').click(function () {

    var fieldID = $(this).attr('field'),
      fieldVal = parseInt($('input[name=' + fieldID + ']').val());

    if (!isNaN(fieldVal)) {
      $('input[name=' + fieldID + ']').val(fieldVal + 1);
    } else {
      $('input[name=' + fieldID + ']').val(0);
    }
  });
  $(".counter-minus").click(function () {

    var fieldID = $(this).attr('field'),
      fieldVal = parseInt($('input[name=' + fieldID + ']').val());

    if (!isNaN(fieldVal) && fieldVal > 0) {
      $('input[name=' + fieldID + ']').val(fieldVal - 1);
    } else {
      $('input[name=' + fieldID + ']').val(0);
    }
  });

})

$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $('.btn--arrow').fadeIn(300);
  } else {
    $('.btn--arrow').stop().fadeOut(300);
  }

  /* ---------------------------------------------------------------------- */
  /*  sticky header
  /* ---------------------------------------------------------------------- */

  if ($(this).scrollTop() > 120) {
    $('.header--sticky, .filter__outer').addClass("stuck");
  } else {
    $('.header--sticky, .filter__outer').removeClass("stuck");
  }

}).scroll();

/* ---------------------------------------------------------------------- */
/*  modal
/* ---------------------------------------------------------------------- */