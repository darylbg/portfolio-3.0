$(document).ready(function () {
  var mobileMenuTriggerEl = $("#m-menu-trigger");
  var mobileMenuTriggerIconEl = $("#m-menu-trigger-icon");
  var mobileNavbarMenuEl = $("#m-navbar-menu");
  var navbarEl = $(".navbar");

  // set navbar hide on scroll down, appear on scroll up
  var prevScrollPosition = 0;
  $(window).scroll(function() {
    var lastScrollPosition = $(window).scrollTop();
    if (lastScrollPosition > prevScrollPosition) {
        prevScrollPosition = lastScrollPosition; 
        navbarEl.css("top", "-100%");
    } else if (lastScrollPosition < prevScrollPosition) {
        prevScrollPosition = lastScrollPosition; 
        navbarEl.css("top", "0");
    }
    console.log(prevScrollPosition)
  });

  // mobile navbar
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
});
