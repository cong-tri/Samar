(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, 
		scrollDuration = 700,
		scrolling = false;
	if( backTop ) {
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});
		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}
	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();
$(".counter").counterUp({
    delay: 10,
    time: 3000,
});
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
        	items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});
function checkForm(){
	var email = document.getElementById("email").value;
	if (!email) {
        alert(
          "Email must be required!"
        );
        return false;
    }
    alert("Congratulation! Your Email has been sent successfully!");
    return true;
}
