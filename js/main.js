function mute() {
    music();
    var e = document.getElementById("audio"),
        t = document.getElementById("mute");
    1 == e.muted ? (e.muted = !1, t.innerHTML = '<i class="bi bi-volume-up"></i>') : 0 == e.muted && (e.muted = !0, t.innerHTML = '<i class="bi bi-volume-mute"></i>')
}

function music() {
    $(".menu").css("display", "block"), $(".musik").css("display", "block"), $("body").css("overflow", "auto"), $("body").css("height", "auto");
    var e = $("#audio")[0];
    e.duration > 0 && !e.paused || e.play()
}
$(".ucapan").owlCarousel({
    center: !0,
    lazyLoad: !0,
    loop: !0,
    autoplay: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    margin: 10,
    items: 1.15
}), document.addEventListener("DOMContentLoaded", (function () {
    document.getElementById("loading").style.display = "none"
})), $(".open-invite").on("click", (function (e) {
    var t = $(this).attr("href");
    music(), $("html, body").animate({
        scrollTop: $(t).offset().top
    }, "300"), e.preventDefault()
}));


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.bg-cover .bgcov');
    let currentImageIndex = 0;
  
    function changeImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }
  
    // Set the first image as active
    images[currentImageIndex].classList.add('active');
  
    // Change image every 5 seconds
    setInterval(changeImage, 5000);
  });