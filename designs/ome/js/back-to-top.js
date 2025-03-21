
document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM Loaded');
	scrollButton.addEventListener('click', function(e) { 
		if( e.scrollTop > offset) {
			scrollTop();
		}
	});
  });

const offset = 220;
const duration = 500;

const scrollButton = document.getElementById('.back-to-top');
const scrollTarget = document.window;

function scrollTop() {
	//scrollButton.classList.toggle("scrolltop");
	scrollTarget.scrollTo({
		top: 0,
		behavior: "smooth",
	  });
}