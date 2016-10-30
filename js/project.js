function preloader() {
	if (document.images) {

		var img1 = new Image();

		img1.src = "../images/profile1.jpg";
		img1.src = "../images/nyneon001.jpg";
		img1.src = "../images/bridal001.jpg";
		img1.src = "../images/wedding001.jpg";
	}

}

document.getElementById("mobile").onclick = function() {
    document.querySelector(".small").classList.toggle("open");
};
