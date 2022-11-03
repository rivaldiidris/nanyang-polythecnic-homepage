$(document).ready(function() {
    var owl = $('#video');
    owl.owlCarousel({
      nav: false,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  });

  function openTab(evt, tabNumber) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("servicecontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("servicelinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += " active";
  };

  function myFunction() {
    var x = document.getElementById("hamburgerMenu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

(function (window, $, fx) {
    $(function () {
        
    });
}(window, jQuery, FXM));

$(function () {
  FXM.bsAccordion();
});
