$(document).ready(function () {
    /* working 야경7선*/
    var $circle = $('#night .circle_wrap');

    var pos = new Array(7);
    pos[0] = [150, 50, 324, 324, 0]
    pos[1] = [650, 250, 210, 210, 1000]
    pos[2] = [1000, 100, 307, 307, 2000]
    pos[3] = [1200, 600, 210, 210, 0]
    pos[4] = [1000, 950, 252, 252, 1500]
    pos[5] = [600, 1000, 324, 324, 0]
    pos[6] = [150, 1000, 252, 252, 1000]


    for (var i = 0; i < 7; i++) {
        $circle.children().eq(i).show().children('a').stop().delay(pos[i][4]).animate({
            top: pos[i][0],
            left: pos[i][1],
            width: pos[i][2],
            height: pos[i][3]
        }, 3000, 'easeOutBack', function () {
            $("#night .line_wrap").show()
        });
    }



    function model() {
        $circle.find('.open_btn').on('click', function (e) {
            e.preventDefault();

            var $tg = $(this)
            var $modalCnt = $($(this).attr('href'));
            var $closeBtn = $modalCnt.find('.close_btn');

            console.log($tg, $modalCnt)

            $(this).after('<div id="mask"></div>');

            $(window).on('resize', function () {
                var top = ($(this).height() - $modalCnt.outerHeight()) / 2;
                var left = ($(this).width() - $modalCnt.outerWidth()) / 2;
                //console.log(top, left)
                $modalCnt.css({
                    top: top,
                    left: left
                })
            });
            $(window).trigger('resize');

            var $mask = $('#mask');
            $modalCnt.add($mask).stop().fadeIn('fast');

            $modalCnt.attr('tabIndex', 0).focus();

            $closeBtn.on('click', function () {
                $modalCnt.add($mask).stop().fadeOut('fast', function () {
                    $modalCnt.removeAttr('tabIndex').prev('#mask').remove();
                    $tg.focus();
                });
            });
            $mask.on('click', function () {
                $closeBtn.click();
            });

        });
    }

    function slider() {
        var $slider = $('.modal_cnt').find('.slider');
        var nownum = 0;
        var nextnum;
        $slider.find('.prev_next button').on('click', function () {
            var num = $(this).index();
            //console.log(num);
            if (num == 0) {
                $slider.find('.prev_next .next').show();
                nextnum = nownum - 1
                $slider.find('ul li').eq(nownum).css({
                    left: 0
                }).stop().animate({
                    left: '100%'
                })
                $slider.find('ul li').eq(nextnum).css({
                    left: '-100%'
                }).stop().animate({
                    left: 0
                })
                //console.log(nextnum)
                if (nextnum == 0) $slider.find('.prev_next .prev').hide();
                nownum = nextnum
            } else {
                $slider.find('.prev_next .prev').show();
                nextnum = nownum + 1;
                $slider.find('ul li').eq(nownum).css({
                    left: 0
                }).stop().animate({
                    left: '-100%'
                })
                $slider.find('ul li').eq(nextnum).css({
                    left: '100%'
                }).stop().animate({
                    left: 0
                })
                //console.log(nextnum)
                if (nextnum == 2) $slider.find('.prev_next .next').hide();

                nownum = nextnum
            }

        });
    }

    /* convenience 편의시설*/
    function conveni() {
        var $convenience = $('#convenience');
        $convenience.find('.list1').css({
            opacity: 1
        }).delay(400).animate({
            left: 200
        });
        $convenience.find('.list2').css({
            opacity: 1
        })
        $convenience.find('.list3').css({
            opacity: 1
        }).delay(400).fadeIn().animate({
            left: 1000
        });
        $convenience.find('.list4').css({
            opacity: 1
        }).delay(800).fadeIn().animate({
            left: 400
        });
        $convenience.find('.list5').css({
            opacity: 1
        }).delay(800).fadeIn().animate({
            left: 800
        });
    }


    /* convenience_bar 편의시설_식당*/
    function banner() {
        var $visCnt = $('#banner .visual ul');
        var current = 0;
        var banWid = 500;

        $('#banner .prev_next button').on('click', function () {
            var num = $(this).index();

            num == 0 ? current-- : current++;
            if (current == -1) current = 3;
            else if (current >= 4) current = -1;


            var leftPos = -(current * banWid);
            $visCnt.stop().animate({
                left: leftPos
            }, 500);
        });
    }
    conveni()
    banner();
    slider();
    model();
});
