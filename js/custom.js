$(function () {
	$('[data-scroll="smooth"] a[href*="#"]:not([href="#contact"])').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 20
				}, {
					duration: 250,
					easing: 'swing'
				});
				return false;
			}
		}
	});
	var backToTop = $('.back-to-top'),
	threshold = $('#header').height();
	if (backToTop.length === 0 || $(document).height() < threshold) {
		return;
	}
	backToTop.affix({
		offset: {
			top: threshold
		}
	});
	backToTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, {
			duration: 250,
			easing: 'swing'
		});
		return false;
	});
	$('#sidenav').affix({
		offset: {
			top: $('#header').outerHeight(true),
		}
	});
});
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-121883915-1');
