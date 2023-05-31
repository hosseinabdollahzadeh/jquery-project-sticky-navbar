$(document).ready(function() {

    $(window).scroll(function() {

        let scrollDist = $(document).scrollTop();
        if(scrollDist > 500) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }

    });

});