$(function() {
    $('.scrollspy-example').smoothScroll({
        duration: 1000
    });
});


function moveing() {
	var fragment = document.createDocumentFragment();
	fragment.appendChild(document.getElementById('thisContentLeft'));
	document.getElementById('body-canvas').appendChild(fragment);
}

$(document).ready(function (){
    
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })
})
