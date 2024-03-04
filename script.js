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
        duration: 300,
        easing: "swing",
      });
      mobileMenuTriggerIconEl.text("close");
    } else {
      mobileNavbarMenuEl.animate({
        left: "100%",
        duration: 300,
        easing: "swing",
      });
      mobileMenuTriggerIconEl.text("menu");
    }
  });

  $(".work-field-header").click(function () {
    $(".work-field-header").parent().removeClass("work-expanded");
    $(".work-field-header").parent().addClass("work-collapsed");

    $(this).parent().addClass("work-expanded");
    $(this).parent().removeClass("work-collapsed");
  });

  // education expand / collapse
  var levelTriggerEl = $(".level-trigger");

  levelTriggerEl.click(function () {
    var educationLevelEl = $(this).parent().parent();
    var toggleState = $(this).find("span");
    var toggleStateText = toggleState.text();

    if (toggleStateText === "remove") {
      educationLevelEl.addClass("level-collapse").removeClass("level-expand");
      toggleState.text("add");
    } else if (toggleStateText === "add") {
      console.log("expand");
      educationLevelEl.addClass("level-expand").removeClass("level-collapse");
      toggleState.text("remove");
    }
  });
});
