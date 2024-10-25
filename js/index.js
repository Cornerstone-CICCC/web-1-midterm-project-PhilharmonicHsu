const FADE_IN_FROM_LEFT = 'fade-in-and-moving-from-left';
const FADE_IN_FROM_BOTTOM = 'fade-in-and-moving-from-bottom'

$(document).ready(function () {
    ['portfolios', 'experience', 'skills', 'contact'].forEach(setClickEventByName)

    $(window).scroll(function () {
        if (getWindowBottomLine() >= getScrollOffset('#portfolios')) {
            $('#portfolios .card-content .github').addClass(FADE_IN_FROM_LEFT)
            $('#portfolios .card-content .describe').addClass(FADE_IN_FROM_BOTTOM)
        }

        if (getWindowBottomLine() >= getScrollOffset('#experience')) {
            $('.career-component').addClass(FADE_IN_FROM_BOTTOM)
        }

        if (getWindowBottomLine() >= getScrollOffset('#skills')) {
            let iconComponents = $('#skills .icon-component')

            iconComponents.filter(function (index, element) {
                    return element.classList.contains('right')
                }).addClass(FADE_IN_FROM_BOTTOM)

            iconComponents.filter(function (index, element) {
                    return element.classList.contains('left')
                }).addClass(FADE_IN_FROM_LEFT)
        }

        if (getWindowBottomLine() >= getScrollOffset('#contact') - 30) {
            $('#contact .card-content .info').addClass(FADE_IN_FROM_LEFT)
            $('#contact .card-content .picture').addClass(FADE_IN_FROM_BOTTOM)
        }
    })
})

function setClickEventByName(name) {
    let obj = {};

    switch (name) {
        case 'portfolios':
            obj = {btnId: '#btn-portfolios', contextId: '#portfolios'};
            break;
        case 'experience':
            obj = {btnId: '#btn-experience', contextId: '#experience'};
            break;
        case 'skills':
            obj = {btnId: '#btn-skills', contextId: '#skills'};
            break;
        case 'contact':
            obj = {btnId: '#btn-contact', contextId: '#contact'};
            break;
    }

    $(obj.btnId).click(function () {
        $('html, body').animate({
            scrollTop: getScrollTopValueByDomId(obj.contextId)
        }, 600)
    })
}

function getScrollTopValueByDomId(domId) {
    const nav_height = $('.nav').height();
    const regular_offset = 60;

    return getScrollOffset(domId) - 15 - nav_height - regular_offset;
}

function getScrollOffset(element) {
    return $(element).offset().top;
}

function getWindowBottomLine() {
    return $(window).scrollTop() + $(window).innerHeight();
}