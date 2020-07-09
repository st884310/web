$(document).ready(function(){
		if ($("#back-to-top").length) {
		    var scrollTrigger = 100, // px
		        backToTop = function () {
		            var scrollTop = $(window).scrollTop();
		            if (scrollTop > scrollTrigger) {
		                $("#back-to-top").addClass("show").removeClass("d-none");
				$( "#back-to-top" ).show( "slow" );
		            } else {
		                $("#back-to-top").removeClass("show").addClass("d-none");
		            }
		        };
		    backToTop();
		    $(window).on('scroll', function () {
		        backToTop();
		    });
		    $("#back-to-top").on('click', function (e) {
			$( "#back-to-top" ).fadeOut( "slow" );
		        e.preventDefault();
		        $('html,body').animate({
		            scrollTop: 0
	       	 }, 700);
	    });
	}
});
