$(document).ready(function () {
  var mobileMenuTriggerEl = $("#m-menu-trigger");
  var mobileMenuTriggerIconEl = $("#m-menu-trigger-icon");
  var mobileNavbarMenuEl = $("#m-navbar-menu");
  var navbarEl = $(".navbar");
  var technicalEl = $("#technical");
  var freelanceEl = $("#freelance");
  var nonTechnicalEl = $("#non-technical");
  var workFieldHeaderEl = $(".work-field-header");

  // console.log(workFieldEl);

  // set navbar hide on scroll down, appear on scroll up
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
    console.log(prevScrollPosition);
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

  // initially set technical work field open
  var elWidth = workFieldHeaderEl.width();
  technicalEl.css({
    flex: "1",
    width: "auto",
  });
  freelanceEl.css({
    flex: "0",
    width: elWidth,
  });
  nonTechnicalEl.css({
    flex: "0",
    width: elWidth,
  });

  //  set selected work field to
  workFieldHeaderEl.click(function() {
    const dataIndex = $(this).parent().attr("data-index");
    [technicalEl, freelanceEl, nonTechnicalEl].forEach((el) => {
      if (el.attr("data-index") == dataIndex) {
        el.css({
          flex: "1",
          width: "auto"
        });
      } else {
        el.css({
          flex: "0",
          width: elWidth
        });
      }
    });
  });
});
