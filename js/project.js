document.getElementById("mobile").onclick = function() {
    document.querySelector(".small").classList.toggle("open");
};

$(".carousel a").click(function() {
    $(".carousel a.current").removeClass("current");
    $(this).addClass("current");
    var whichSlide = $(this).index();
    $(".slide.current").removeClass("current");
    $(".slide").eq(whichSlide).addClass("current");
});
