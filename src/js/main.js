console.log('Hello angularjs')

function hamburger() {
	var hamburger = document.getElementById('hamburger');
	var nav = document.getElementById('nav-wrapper');

	hamburger.addEventListener('click', function(event) {
		event.preventDefault();
		toggleShow();
	});

	hamburger.addEventListener('touchstart', function(event) {
		event.preventDefault();
		toggleShow();
	});

	function toggleShow() {
	    if (nav.classList.contains('hm-active')) {
	        nav.classList.remove("hm-active");
	    } else {
	        nav.classList.add("hm-active");
	    }
	}
}

hamburger();
