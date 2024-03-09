$(document).ready(function () {
  var mobileMenuTriggerEl = $("#m-menu-trigger");
  var mobileMenuTriggerIconEl = $("#m-menu-trigger-icon");
  var mobileNavbarMenuEl = $("#m-navbar-menu");
  var navbarEl = $(".navbar");

  var prevScrollPosition = 0;
  $(window).scroll(function () {
    var lastScrollPosition = $(window).scrollTop();
    if (lastScrollPosition > prevScrollPosition) {
      prevScrollPosition = lastScrollPosition;
      navbarEl.css("top", "-100%");
    } else if (lastScrollPosition < prevScrollPosition) {
      prevScrollPosition = lastScrollPosition;
      navbarEl.css("top", "0");
    }
    // console.log(prevScrollPosition);
  });

  mobileMenuTriggerEl.click(function () {
    if (mobileMenuTriggerIconEl.text() === "menu") {
      mobileNavbarMenuEl.animate({
        left: "0",
        right: "0",
        duration: 100,
        easing: "swing",
      });
      mobileMenuTriggerIconEl.text("close");
      $("#body").css("overflow", "hidden");
    } else {
      mobileNavbarMenuEl.animate({
        left: "100%",
        duration: 100,
        easing: "swing",
      });
      mobileMenuTriggerIconEl.text("menu");
      $("#body").css("overflow-y", "scroll");
    }
  });

  // hide mobile menu to allow scrolling when menu-item selected
  $("#m-navbar-menu").find("li").click(function() {
    mobileNavbarMenuEl.css({
      left: "100%",
      duration: 0,
      easing: "swing",
    });
    mobileMenuTriggerIconEl.text("menu");
  });


  // work sections toggle
  $(".work-field-header").click(function () {
    $(".work-field-header").parent().removeClass("work-expanded");
    $(".work-field-header").parent().addClass("work-collapsed");

    $(this).parent().addClass("work-expanded");
    $(this).parent().removeClass("work-collapsed");
  });

  // education expand / collapse
  $(".level-header").click(function () {
    var selectedLevelEl = $(this).parent();
    var selectedLevelIconEl = $(this).find(".material-symbols-outlined");

    if (selectedLevelEl.hasClass("level-expand")) {
      selectedLevelEl.removeClass("level-expand").addClass("level-collapse");
      selectedLevelIconEl.text("add");
    } else if (selectedLevelEl.hasClass("level-collapse")) {
      selectedLevelEl.removeClass("level-collapse").addClass("level-expand");
      selectedLevelIconEl.text("remove");
    }
  });

  // footer history toggle
  var triggerState = false;
  $(".history-trigger").click(function () {
    if (!triggerState) {
      $(".history").css("display", "flex");
    } else {
      $(".history").css("display", "none");
    }
    triggerState = !triggerState;
  });
});
