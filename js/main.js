// My jquery code
jQuery(document).ready(function($) {
	// slickcarousel
	$('#slideshow').slick({
		autoplay: true,
		infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
	  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
	});

	// Filter portfolio
	$container = $('.portfolios');
	$container.isotope('layout');

	var $filterButton = $('.filter-buttons');

	$filterButton.on('click', 'a', function(e){
		e.preventDefault();
		var $this = $(this);
		$filterButton.find('a').removeClass('active');
		$this.addClass('active');
		var filterValue = $this.data('filter');
  	$container.isotope({ filter: filterValue });
	});

	// Detect scroll for optimize fixed navbar
	var lastScrollTop = 0;
	$(window).scroll(function(){

		var $this = $(this);
		var $navbar = $('.navbar');
		var $siteLogo = $('.site-logo');
		var navOffsetTop = $navbar.offset().top;
		var st = $(this).scrollTop();

		if(st > lastScrollTop) {
			// Scroll Down
			$navbar.addClass('retro-hidden');
			$siteLogo.addClass('retro-hidden');
		} else {
			// Scroll Up
			$navbar.removeClass('retro-hidden');
			$siteLogo.removeClass('retro-hidden');
		}

		lastScrollTop = st;

	});
});