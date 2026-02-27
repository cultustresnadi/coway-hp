$(document).ready(function () {

  /* =========================
     LOAD PARTIAL HTML
  ========================== */
  function loadHTML(id, file) {
    $("#" + id).load(file);
  }

  //loadHTML('navbar', 'partials/navbar.html');
  loadHTML('navbar', 'partials/navbarfixed.html');
  loadHTML('footer', 'partials/footer.html');


  /* =========================
     INIT AOS
  ========================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      mirror: true,
      once: false
    });
  }

  /* =========================
     Audio backsound
  ========================== */
  var audio = document.getElementById("bgAudio");
  var isPlaying = false;

  $("#toggleAudio").click(function(){

    if(!isPlaying){
      audio.play();
      $(this).html('<i class="bi bi-volume-mute-fill"></i>');
      isPlaying = true;
    } else {
      audio.pause();
      $(this).html('<i class="bi bi-volume-up-fill"></i>');
      isPlaying = false;
    }

  });


  /* =========================
     TRACKING FUNCTIONS
  ========================== */

  window.trackCTA = function (label) {
    if (typeof gtag !== "undefined") {
      gtag('event', 'click_whatsapp', {
        event_category: 'CTA',
        event_label: label
      });
    }
  };

  window.trackWhatsApp = function (source) {
    if (typeof gtag !== "undefined") {
      gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: source
      });
    }
  };

  /* =========================
     AUTO CLOSE NAVBAR (Mobile)
  ========================== */
  $(document).on('click', '.navbar-collapse .nav-link', function () {

    var navbarCollapse = $('.navbar-collapse');
    var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse[0]);

    if (bsCollapse) {
      bsCollapse.hide();
    }

  });
  
  $(window).on("scroll", function() {
    
    if ($(this).scrollTop() > 50) {
      $("#mainNavbar").addClass("scrolled");
    } else {
      $("#mainNavbar").removeClass("scrolled");
    }

  });


  /* =========================
     FORMAT RUPIAH
  ========================== */
  function formatRupiah(value) {
    if (!value) return "-";
    return "Rp " + value.toLocaleString("id-ID");
  }

});


