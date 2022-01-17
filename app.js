let topBtn = document.getElementById("top-btn");

window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
};

let topFunction = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
