$(document).ready(function(){

    $('.client-testimonial-carousal').owlCarousel({
        items:  3,
        margin: 30,
        nav:    false,
        dots:   true,
        loop:   true,
        autoplay: 1000,
        slideSpeed : 200,
        paginationSpeed : 800,

        /* responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        } */

    })

});