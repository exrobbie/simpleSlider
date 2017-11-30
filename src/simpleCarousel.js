; (function ($) {
    $.fn.extend({
        slider: function (options) {
            var $slider = this;
            $.each(options.imgList, function (index, item) {
                $slider.children('li').eq(index).css({"background": "url(" + item + ") center no-repeat"});
            });

            $slider.css({
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                height: '600px',
                padding: '0',
                margin: '0'
            });

            $slider.children('li').css({
                position: 'absolute',
                top: '0',
                left: '0',
                listStyle: 'none',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                backgroundSize: '100%'
            })

            var defaults = {
                interval: 5000,
                duration: 1200
            }
            var settings = $.extend(defaults, options);
            var sliderWidth = $slider.innerWidth(),
                sliderHeight = $slider.innerHeight(),
                sliderLength = options.imgList.length,
                currentShow = 0,
                prevShow,
                nextShow;

            function moveFoward() {
                $slider.children('li').eq(currentShow).animate({ 'left': '0px' }, settings.duration);
                if (currentShow == 0) {
                    prevShow = sliderLength - 1;
                } else {
                    prevShow = currentShow - 1;
                }

                if (currentShow == sliderLength - 1) {
                    nextShow = 0;
                    //set currentShow for next interval
                    currentShow = 0;
                } else {
                    nextShow = currentShow + 1;
                    //set currentShow for next interval
                    currentShow++;
                }
                $slider.children('li').eq(prevShow).animate({ 'left': -sliderWidth + 'px' }, settings.duration);
                $slider.children('li').eq(nextShow).css({ 'left': sliderWidth + 'px' });
            }

            function moveBackward() {
                $slider.children('li').eq(currentShow).animate({ 'left': '0px' }, settings.duration);
                console.log('current', currentShow, 'previous', prevShow, 'next', nextShow)
                if (currentShow == sliderLength - 1) {
                    prevShow = 0;
                } else {
                    prevShow = currentShow + 1;
                }
                if (currentShow == 0) {
                    nextShow == sliderLength - 1;
                    //set currentShow for next interval
                    currentShow = sliderLength - 1;
                } else {
                    nextShow = currentShow - 1;
                    //set currentShow for next interval
                    currentShow--;
                }
                $slider.children('li').eq(prevShow).animate({ 'left': sliderWidth + 'px' }, settings.duration);
                $slider.children('li').eq(nextShow).css({ 'left': -sliderWidth + 'px' });
            }

            function triggerFoward() {
                clearInterval(sliderInterval);
                moveFoward();
            }

            function triggerBackward() {
                clearInterval(sliderInterval);
                moveBackward();
            }

            moveFoward();
            var sliderInterval = setInterval(moveFoward, settings.interval);

            return this;
        }
    });

})(jQuery);
