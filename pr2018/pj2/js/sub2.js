    $(document).ready(function () {
        function slider() {
            var img = $('#wrap2');
            var ulimg = $('#wrap2 ul>li');
            var indi = $('#ind ul li');
            var nN = 0;
            var nxN;
            var plN;
            indi.children().on('click', function (e) {
                e.preventDefault();

                nxN = $(this).parent().index();

                clearInterval(plN);
                $('#ps .play').addClass('on').siblings().removeClass('on');
                if (nN == nxN) return false;
                active();
            });

            function active() {
                indi.eq(nxN).addClass('on').siblings().removeClass('on');
                ulimg.eq(nN).css('left', 0).stop().animate({
                    left: '-100%'
                });
                ulimg.eq(nxN).css({
                    left: '100%'
                }).stop().animate({
                    left: 0
                });
                //console.log(nN,nxN);
                nN = nxN;
            }

            function autop() {
                plN = setInterval(function () {
                    nxN = nN + 1;
                    if (nxN == 4) nxN = 0;
                    active();
                }, 3000);
            }
            autop();

            $('#ps button').on('click', function () {
                var num = $(this).index();
                //console.log(num);

                num == 0 ? autop() : clearInterval(plN);

                $(this).removeClass('on').siblings().addClass('on');
            });
        }
        slider();

        $('#top_bt').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            });
            return false;
        });

        //공지사항 title 애니메이션
        $('#notice51 #content h2 span').each(function (idx) {
            $(this).delay(idx * 500).fadeIn().animate({
                top: 0
            });
        });

        //공지사항 아코디언
        $('#notice tbody tr td a').on('click', function () {
            $(this).closest('tr').toggleClass('on').next().stop().toggle();
            return false;
        });

        //물고기2 마우스 따라 움직임
        var $fish2 = $('#fish2');
        var fish2x = $fish2.position().left;
        var fish2y = $fish2.position().top;
        $('#notice51 #content .title').on('mousemove', function (e) {
            var fx = e.offsetX;
            var fy = e.offsetY;
            //console.log(fx,fy);
            $fish2.delay(1000).stop(true, false).animate({
                left: fish2x + fx * 0.2,
                top: fish2y + fy * 0.045
            }, 'slow', 'easeOutBack');
            //console.log(fish2x+fx*0.025)
        });
    });
