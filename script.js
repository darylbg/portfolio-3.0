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
  var windowWidth;
  var elWidth;
  var elHeight;
  var selectedField;

  function workOnLoad() {
    windowWidth = window.innerWidth;
    elWidth = workFieldHeaderEl.width();
    elHeight = workFieldHeaderEl.height();
    selectedField = 0;

    selectedFieldToggle(selectedField);
  }
  workOnLoad();

  // Function to toggle selected work field
  function selectedFieldToggle(newSelectedField) {
    selectedField = newSelectedField;
    [technicalEl, freelanceEl, nonTechnicalEl].forEach((el) => {
      if (el.attr("data-index") == selectedField) {
        el.addClass("work-expanded").removeClass("work-collapsed").css({
          width: "auto",
          height: "auto",
        });
      } else {
        el.addClass("work-collapsed")
          .removeClass("work-expanded")
          .css(
            windowWidth > 768
              ? {
                  width: elWidth,
                  height: "auto",
                }
              : { width: "auto", 
                  height: elHeight 
                }
          );
      }
    });
  }

  window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
    elWidth = workFieldHeaderEl.width();
    elHeight = workFieldHeaderEl.height();
    selectedFieldToggle(selectedField);
  });

  // Event listener for work field header clicks
  workFieldHeaderEl.click(function () {
    var clickedIndex = $(this).parent().attr("data-index");
    selectedFieldToggle(clickedIndex);
  });
});
