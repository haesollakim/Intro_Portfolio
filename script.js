$('svg text').attr('y', '70%');

setTimeout(function () {
    $('.myNameIsHaesollaKim').css({
        'height': '200px'
    });
    $('.intro_section').fadeIn(1000);
}, 3000);

setTimeout(function () {
    $('body').css({
        'display': 'grid',
        'grid-template-rows': '200px 1fr'
    });
}, 5000);