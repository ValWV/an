/* Fancybox */
jQuery(document).ready(function() {
	
	var callme = $('.callme').attr('href');	

	jQuery('a.callme').fancybox({
		'transitionIn'	:	'normal',
		'transitionOut'	:	'elastic',
		'overlayShow'	:	true,
		'overlayOpacity':	0.5,
		'overlayColor'	:	'#000',
		'hideOnOverlayClick':true,
		'opacity'		:	false,
		'centerOnScroll':	true,
		'width'			:	560,
		'height'		:	400,
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'showCloseButton':	true,
		'padding'	    :40,
		'margin'		:	10,
		'href'			:	callme
		});
	jQuery("a.jq-pp").fancybox({
		'transitionIn'	:	'normal',
		'transitionOut'	:	'elastic',
		'overlayShow'	:	true,
		'overlayOpacity':	0.5,
		'overlayColor'	:	'#000',
		'hideOnOverlayClick':true,
		'opacity'		:	false,
		'centerOnScroll':	true,
		'width'			:	560,
		'height'		:	400,
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'showCloseButton':	true,
		'padding'		:	20,
		'margin'		:	20
	});	
});
    
/* ScrollUp */
jQuery(function () {
    jQuery.scrollUp({
        scrollName: 'scrollUp', 
        topDistance: '300', 
        topSpeed: 300,         
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: 'ZZZzzzz....', 
        scrollImg: { active: true, type: 'background'},
        activeOverlay: false,     
        });
});

/* Filter */
jQuery.expr[':'].regex = function(elem, index, match) {
   var matchParams = match[3].split(','),
   validLabels = /^(data|css):/,
   attr = {
      method: matchParams[0].match(validLabels) ? matchParams[0].split(':')[0] : 'attr',
      property: matchParams.shift().replace(validLabels,'')
   },
   regexFlags = 'ig',
   regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
   return regex.test(jQuery(elem)[attr.method](attr.property));
}

jQuery(document).ready(function(){	
	
	/* Filter more */
	var flip = 0;
	jQuery(".filter-more-button").click(function(){
		var filter = jQuery('.filter').height();
		jQuery(".filter-more").toggle(flip++ % 2 === 0);
			jQuery('.filter-more').css({top: filter});
	});
	
});

/* Fix Default menu & bottom footer */
jQuery(document).ready(function(){
	var header = jQuery('.header').height();
	var nav = jQuery('.nav').height();
	var cr = jQuery('.content-right').height();
	var panel = jQuery('#panel').height();
	var sum = (header+nav+panel)+20;
	var footerH = jQuery('footer').height();
	var winH = $(window).innerHeight()-(header+nav+panel+footerH+cr)-110;

	jQuery('.content').css({'min-height': winH+'px'});
	jQuery('.gp_sub-menu').css({top: sum});	
	
});
