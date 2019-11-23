var $win = $(window);
var toggle = 1;


$(document).ready(function () {
    loding(); //loding pr
    if ($('body').height() <= 780){
        $('#mainFooter').css({fontSize:12,height:50})
    }else {
        $('#mainFooter').css({fontSize:14,height:120})
    }
    
    onepage();
});



function page1() {
    var $cnt1 = $('#content #cnt1');
    var num = 1;
    resizeC();
    if ($cnt1.hasClass('on')) {
        $cnt1.find('.bg').fadeOut(1000, function () {
            toggle = 0;
        });
        $cnt1.find('.txt strong,.txt span').animate({
            top: 0,
            bottom: 0,
            opacity: 1
        }, 1500);

    }
}

function page2() {}

function page3() {}

function page4() {}

function loding() {
    $('#page0_0').prepend('<div id="loding"></div>');
    var txtCounter = 0;
    var conunter1 = 0;
    var conunter2 = 19;
    var next = 0;
    var lodingTxt = ['W', 'h', 'a', 'l', 'e', 'R', 'e', 's', 'o', 'r', 't'];
    var making = setInterval(function () {
        if (conunter1 < 19) {
            $('#loding').append('<div></div>');
            $('#loding>div').eq(conunter1).css({
                width: $('#loding div').height(),
                top: (10 * conunter1 + '%')
            })
            for (var j = 0; j <= conunter1; j++) {
                $('#loding>div').eq(conunter1).append('<div></div>');
                $('#loding>div').eq(conunter1).find('div').eq(j).css({
                    width: '100%',
                    height: '100%',
                    top: (-$('#loding>div').outerHeight() * j) / 2,
                    left: $('#loding>div').outerHeight(true) * j
                }).fadeIn()
            }
            conunter1++;
            if (txtCounter < 5 && conunter1 > 3) {
                var nowTxt = $('#loding h2').find('span').eq(0).text() + lodingTxt[txtCounter]
                $('#loding h2').find('span').eq(0).text(nowTxt)
                txtCounter++;
            } else if (txtCounter < 11 && conunter1 > 3) {
                var nowTxt = $('#loding h2').find('span').eq(1).text() + lodingTxt[txtCounter]
                $('#loding h2').find('span').eq(1).text(nowTxt)
                txtCounter++;
            }
        }
        if (conunter1 == 19) {
            $('#loding>div>div').css({
                transition: "1s all"
            })
            next = 1;
        }
        if (next == 1) {
            $('#loding>div').eq(conunter2).find('div').css({
                background: "#0086e8"
            })
            $('#loding h2').css({
                color: "#48b2ff"
            })
            conunter2--;
        }
        if (conunter2 < 0) {
            $('#loding').fadeOut(function () {
                $(this).remove();
                clearInterval(making);
                $('#content #cnt1').addClass('on')
                page1();
            });
        }
    }, 100);
    $('#loding').append('<h2 aria-hidden="true"><span></span><span></span></h2>');
    $('#loding h2').fadeIn();
}

function onepage() {
    var nowPS = 0;
    var ht = $("body").height();
    $win.on("mousewheel DOMMouseScroll keydown click", function (e) {
        var keyC = e.keyCode;
        var whill = e.originalEvent.wheelDelta;
        var cntL = $('#content').find('article').length;
        
        $("#skipnav").on("click",function(){
            $('#cnt1').focus();
            $('body , html').scrollTop(0);
            return false;
        })
        
        if (toggle == 0 && !(keyC == 9)) {
            toggle++;
            if ((keyC == 40 || whill < 0) && nowPS < cntL - 1) {
                nowPS++;
            }
            if ((keyC == 38 || whill > 0) && nowPS > 0) {
                nowPS--;
            }
            $('#mainSnb ul li').eq(nowPS).addClass('on').siblings().removeClass('on');
            $('#content article').eq(nowPS).addClass('on').siblings().removeClass('on');
            $('#cnt1').animate({
                marginTop: -ht * nowPS
            }, 700, function () {
                toggle = 0
            });
        }

        if ($('#content article').eq(nowPS).index() == 2) {

        } else if ($('#content article').eq(nowPS).index() == 3) {

        }
        if ($('#content article').eq(nowPS).index() == 4) {
            setTimeout(function () {
                $('#mainFooter').css({
                    display: 'block'
                });
            }, 700)
        } else $('#mainFooter').css({
            display: 'none'
        });
    });
    $("#mainSnb ul li a").on("click", function () {
        $(this).parent().addClass('on').siblings().removeClass('on')
        nowPS = $(this).parent().index();
        $('#content article').eq(nowPS).addClass('on').siblings().removeClass('on');
        if ($('#content article').eq(nowPS).index() == 4) {
            setTimeout(function () {
                $('#mainFooter').css({
                    display: 'block'
                });
            }, 700)
        } else $('#mainFooter').css({
            display: 'none'
        });
        $('#cnt1').animate({
            marginTop: -ht * nowPS
        }, 500, function () {
            if ($('#content article').eq(nowPS).attr('tabindex') == 0) {
                $('#content article').eq(nowPS).focus();
            } else $('#content article').eq(nowPS).find('a:first').focus();
            toggle = 0;
        });
        return false;
    });
    $('#content article').on('focusin', function () {
        nowPS = $(this).index() - 1;
        $win.scrollTop(0);
        $('#content article').eq(nowPS).addClass('on').siblings().removeClass('on');
        $('#mainSnb ul li').eq(nowPS).addClass('on').siblings().removeClass('on');
        $('#cnt1').animate({
            marginTop: -ht * nowPS
        }, 500, function () {
            toggle = 0
        });
    });
    $(window).on("resize", function () {
        ht = $("body").height();
        $('#cnt1').css({
            marginTop: -ht * nowPS
        });
        resizeC();
    })
}

function resizeC() {
    if ($('body').width() < 1680) {
        $('#cnt1 .txt strong').css({
            fontSize: 45
        }).next().css({
            fontSize: 20
        })
    } else {
        $('#cnt1 .txt strong').css({
            fontSize: 60
        }).next().css({
            fontSize: 25
        })
    }
    if ($('body').height() <= 780){
        $('#mainFooter').css({fontSize:12,height:50})
    }else {
        $('#mainFooter').css({fontSize:14,height:120})
    }
}
