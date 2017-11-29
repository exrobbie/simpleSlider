; (function ($) {
    $.fn.extend({
        carousel: function (options) {
            var $carousel = this;
            $.each(options.imgList, function (index, item) {
                $carousel.children('li').eq(index).css({"background": "url(" + item + ") center no-repeat", "backgroundSize":"100%"});
            });

            $carousel.css({
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                height: '600px',
                padding: '0',
                margin: '0'
            });

            $carousel.children('li').css({
                position: 'absolute',
                top: '0',
                left: '0',
                listStyle: 'none',
                textAlign: 'center',
                width: '100%',
                height: '100%'
            })

            var defaults = {
                interval: 5000,
                duration: 1200
            }
            var settings = $.extend(defaults, options);
            var carouselWidth = $carousel.innerWidth(),
                carouselHeight = $carousel.innerHeight(),
                carouselLength = options.imgList.length,
                currentShow = 0,
                prevShow,
                nextShow;

            function moveFoward() {
                $carousel.children('li').eq(currentShow).animate({ 'left': '0px' }, settings.duration);
                if (currentShow == 0) {
                    prevShow = carouselLength - 1;
                } else {
                    prevShow = currentShow - 1;
                }

                if (currentShow == carouselLength - 1) {
                    nextShow = 0;
                    //set currentShow for next interval
                    currentShow = 0;
                } else {
                    nextShow = currentShow + 1;
                    //set currentShow for next interval
                    currentShow++;
                }
                $carousel.children('li').eq(prevShow).animate({ 'left': -carouselWidth + 'px' }, settings.duration);
                $carousel.children('li').eq(nextShow).css({ 'left': carouselWidth + 'px' });
            }

            function moveBackward() {
                $carousel.children('li').eq(currentShow).animate({ 'left': '0px' }, settings.duration);
                console.log('current', currentShow, 'previous', prevShow, 'next', nextShow)
                if (currentShow == carouselLength - 1) {
                    prevShow = 0;
                } else {
                    prevShow = currentShow + 1;
                }
                if (currentShow == 0) {
                    nextShow == carouselLength - 1;
                    //set currentShow for next interval
                    currentShow = carouselLength - 1;
                } else {
                    nextShow = currentShow - 1;
                    //set currentShow for next interval
                    currentShow--;
                }
                $carousel.children('li').eq(prevShow).animate({ 'left': carouselWidth + 'px' }, settings.duration);
                $carousel.children('li').eq(nextShow).css({ 'left': -carouselWidth + 'px' });
            }

            function triggerFoward() {
                clearInterval(carouselInterval);
                moveFoward();
            }

            function triggerBackward() {
                clearInterval(carouselInterval);
                moveBackward();
            }

            moveFoward();
            var carouselInterval = setInterval(moveFoward, settings.interval);

            return this;
        }
    });

})(jQuery);