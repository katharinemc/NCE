EOMS = {};
EOMS.UI = {};

EOMS.UI.Global = function() {
	
	var scroller; 
	var products;
	var scroll_position = 0;
	var scroll_width;
	
	var win;
	
	var init = function() {
		win = $(window);
		check_position();
		hijack_links();
		init_nav();
		resize();
		init_products();


	};

	var resize = function() {
		$(window).resize(function(){
			
			if(win.width()>700){
		  		$('.mainnav ul').css('width',$('.mainnav').width());
		  		$('.mainnav ul').css('position','fixed');
		  	}else{
		  		$('.mainnav ul').css('width','100%');
		  		$('.mainnav ul').css('position','static');
		  	}
		});
	};
	
	var check_position = function() {
		if (window.location.hash) {
			navigate_to(window.location.hash);
			$('.mainnav ul a[href="/'+window.location.hash+'"]').parent('li').addClass('selected');
		}
	};
	
	var hijack_links = function() {
		$('a').click(function(e){
			var self = $(this);
			if (window.location.pathname=='/' && self.attr('href').indexOf('#')==1) {
				e.preventDefault();
				navigate_to(self.attr('href').replace('/', ''));
			}
		});
	};
	 	
	var navigate_to = function(selector) {
		var _this = $(selector);
		$('body, html').animate({
        	scrollTop: _this.offset().top-$('header.head').height()
    	}, 600)
	};
	
	var init_nav = function() {
		if(win.width()>700){
		  $('.mainnav ul').css('width',$('.mainnav ul').width());
		  $('.mainnav ul').css('position','fixed');
		}
		$('.mainnav ul li a').click(function(e){
			$(this).parent('li').siblings('li').removeClass('selected').end().addClass('selected');
		});
	};


	var init_products = function() {
		my_slider = $(".projectscroller ul");
		if(my_slider.length && win.width()>700) {

		 my_slider.responsiveSlides({
			auto: false,
			nav: true,
			navContainer: "div.prevnext"
		});

		 $(".prevnext a").wrapInner("<span>");
		}
	}
		
	return {
		init: init
	};
}();

jQuery(function($){
	EOMS.UI.Global.init();
});