// text animation
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Graphic Designer','Software Developer'],
    typeSpeed: 50,
});




$(window).on('scroll', function() {
    $('.vertical-scrollable-timeline li').each(function(index, elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
            $(elem).addClass('active');
        } else {
            $(elem).removeClass('active');
        }
    });
});