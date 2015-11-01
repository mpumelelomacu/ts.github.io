jQuery(document).ready(function() {

	jQuery(".menu-trigger").click(function() {
	
		jQuery(".nav-menu").slideToggle(400,function () {
			jQuery(this).toogleClass("nav-expanded").css('display','');
		
		});
	
	}
	



}