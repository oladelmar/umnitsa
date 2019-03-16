$(document).ready(function() {
    
    var checkbx = document.querySelector('.navigation__checkbox');
    var menuItems = document.querySelectorAll('.navigation__item');
    var xMedia = window.matchMedia("(max-width: 600px)");
    var naviElement = document.querySelector('.navigation');
            
    function closeMenu() {
        if (xMedia.matches) {
            checkbx.checked = false;
        }
    }
            
    function checkCloseMenu(e) {
        var targetElement = e.target;
                
        while(targetElement) {
            if (targetElement === naviElement) {
                return;
            }
            targetElement = targetElement.parentNode;  
        }
        checkbx.checked = false;
                    
    }
            
    menuItems.forEach(function(item) {
        item.addEventListener('click', closeMenu) 
    }); 
            
    document.addEventListener('click', checkCloseMenu);
    
        
   // Popup gallery
    
    $('.gallery-photos').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
    
    
})
