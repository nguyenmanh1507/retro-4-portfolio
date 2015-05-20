// My jquery code
jQuery(document).ready(function($) {

	// Filter portfolio
	$container = $('.portfolios');
	$container.isotope();

	var $filterButton = $('.filter-buttons');

	$filterButton.on('click', 'a', function(e){
		e.preventDefault();
		var $this = $(this);
		$filterButton.find('a').removeClass('active');
		$this.addClass('active');
		var filterValue = $this.data('filter');
  	$container.isotope({ filter: filterValue });
	});

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

	// This var use for both detect scroll and animate when click nav
	var $navbar = $('.navbar');
	var $siteLogo = $('.site-logo');
	
	// Detect scroll for optimize fixed navbar
	var lastScrollTop = 0;
	$(window).scroll(function(){

		var $this = $(this);
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

	// Animate scroll
	var mainNav = $('#main-navigation a[href^="#"]');
	mainNav.on('click', function(e){

		e.preventDefault();
		
		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function(){
			window.location.hash = target;
			$navbar.addClass('retro-hidden');
			$siteLogo.addClass('retro-hidden');
		});

	});

});