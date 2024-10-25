$(document).ready(function () {
    $('#btn-portfolios').click(function () {
        $('html, body').animate({
            scrollTop: getScrollTopValueByDomId('#portfolios')
        }, 600)
    })

    $('#btn-experience').click(function () {
        $('html, body').animate({
            scrollTop: getScrollTopValueByDomId('#experience')
        }, 600)
    })

    $('#btn-skills').click(function () {
        $('html, body').animate({
            scrollTop: getScrollTopValueByDomId('#skills')
        }, 600)
    })

    $('#btn-contact').click(function () {
        $('html, body').animate({
            scrollTop: getScrollTopValueByDomId('#contact')
        }, 600)
    })

    function getScrollTopValueByDomId(domId) {
        const nav_height = $('.nav').height();
        const regular_offset = 60;

        return $(domId).offset().top - 15 - nav_height - regular_offset;
    }

    function getScrollOffset(element) {
        return $(element).offset().top;
    }

    function getWindowBottomLine() {
        return $(window).scrollTop() + $(window).innerHeight();
    }

    // scroll event
    $(window).scroll(function () {
        const FADE_IN_FROM_LEFT = 'fade-in-and-moving-from-left';
        const FADE_IN_FROM_BOTTOM = 'fade-in-and-moving-from-bottom'

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