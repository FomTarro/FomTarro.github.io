// Add some Javascript code here, to run on the front end.

//console.log("Welcome to assignment 2!")
//window.addEventListener("hashchange", function() { scrollBy(0, -125) })

(function($) {
	$(document).ready(function() {
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);

		    if($('.navbar-toggle').css('display') != 'none') {
	            $(".navbar-toggle").trigger("click");
	        }

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top - 150
		    }, 1500, 'swing', function () {});
		});
		
	});
}) (jQuery);

