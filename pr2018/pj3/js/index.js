$(document).ready(function () {
    contentBox();
    $('#bgVideo *').attr({
        tabIndex: -1
    });
    $('#bgVideo').attr({
        tabIndex: -1
    });
    //    for(var i=1;i<4;i++){
    //        var $cnt= $('#cnt'+i);
    //        console.log($cnt)
    //            $cnt.find('.route_line').find('a').each(function(e){
    //                var z = $(this).text();
    //            });
    //    }   
    $('#location ul li button').on('click', function () {
        var num = $(this).parent().index() + 1
        var $cnt = $('#cnt' + num);
        if (toggle == 0 && !$('#cnt' + num).hasClass('on')) {
            toggle++;
            $(this).parent().addClass('on').siblings().removeClass('on');
            $('#sectionBox .route').removeAttr('style').find('*').removeAttr('style').removeClass('on');
            $cnt.addClass('on').siblings().removeClass('on');
            setTimeout(function () {
                station(num);
            }, 800);
            if (!$('#content .main_1').hasClass('on')) {
                var $win_height = $win.height();
                var top = 0;
                if ($win_height > 568) top = -55;
                else top = -35;
                $('#content .main_1').addClass('on').animate({
                    right: '-20%',
                    opacity: 0
                }, 1000, function () {
                    $(this).hide()
                });
                $('#content .main_2').css('display', 'block').animate({
                    top: top,
                    opacity: 1
                });
            }
        }
    });
    $('#ch1 , #ch2').on('focusin', function () {
        if ($(this).val() == "찾고 싶은 역을 검색 해주세요")$(this).val("")
        $('.such_btn').on('click', function () {
            var thistxt = $(this).prev().val();
            var sam =true;
            $('#sectionBox a').each(function () {
                if(thistxt == $(this).text()) {
                    var z = $(this).closest('section').index()+1;
                    var thisTag = $(this);
                    var $cnt = $('#cnt' + z);
                    sam = false;
                    if (toggle == 0 && !$cnt.hasClass('on')) {
                        toggle++;
                        $('#location ul li').eq(z-1).addClass('on').siblings().removeClass('on');
                        $('#sectionBox .route').removeAttr('style').find('*').removeAttr('style').removeClass('on');
                        $cnt.addClass('on').siblings().removeClass('on');
                        setTimeout(function () {
                            station(z);
                        }, 800);
                        if (!$('#content .main_1').hasClass('on')) {
                            var $win_height = $win.height();
                            var top = 0;
                            if ($win_height > 568) top = -55;
                            else top = -35;
                            $('#content .main_1').addClass('on').animate({
                                right: '-20%',
                                opacity: 0
                            }, 1000, function () {
                                $(this).hide()
                            });
                            $('#content .main_2').css('display', 'block').animate({
                                top: top,
                                opacity: 1
                            });
                        }
                    }
                    setTimeout(function(){
                        thisTag.focus();
                    },800)
                }
            });
            if(sam)alert('일치하는 역이 없습니다.');
        });
    });

    $win.on('resize', function () {
var $win_height = $win.height();
if ($win_height > 568) $('#content .main_2').css({
    top: -55
});
else $('#content .main_2').css({
    top: -35
});
contentBox();
});

});

function contentBox() {
    var width = $('#content').find('.content_box').innerHeight();
    var win_height = $win.height();
    $('#content').find('.content_box').css({
        marginTop: (win_height - width) * 0.5
    });
}

function station(num) {
    var $this = $('#cnt' + num);
    $this.siblings().find('h3').removeClass('on');
    $this.find('h3').addClass('on');
    $this.find('.line_listm').css({
        opacity: 1
    })
    switch (num) {
        case 1:
            $this.find('.line1').animate({
                width: '40%'
            }, function () {
                $(this).find('.line1_1').css({
                    opacity: 1
                }).next().css({
                    borderTop: '125px solid #213487',
                    borderBottom: '125px solid #213487'
                });
                setTimeout(function () {
                    $this.find('.line3').animate({
                        width: '40%'
                    }, function () {
                        $(this).children().css({
                            opacity: 1
                        });
                        $this.find('a').each(function () {
                            $(this).addClass('on');
                        });
                        toggle = 0;
                    });
                }, 400)
            });
            $this.find('.line2').animate({
                width: '40%'
            }, function () {
                $(this).children().css({
                    opacity: 1
                })
            });
            break;
        case 2:
            $this.find('.line1 , .line3').animate({
                width: '10%'
            }, function () {
                $(this).children().css({
                    opacity: 1
                }).end().next().animate({
                    width: '60%'
                }, function () {
                    $this.find('a').each(function () {
                        $(this).addClass('on');
                    });
                    toggle = 0;
                });
            });
            break;
        case 3:
            setTimeout(function () {
                $this.find('.line1 , .line2').addClass('on');
                $this.find('a').each(function () {
                    $(this).addClass('on');
                });
                toggle = 0;
            }, 60);
    }
}
