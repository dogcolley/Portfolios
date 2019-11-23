var shifton = 0;

$(window).load(function () {
    $(window).on({
        keyup: function (e) {
            if (e.keyCode == 16) shifton = 0;
        },
        keydown: function (e) {
            if (e.keyCode == 16) shifton++;
        }
    });
    modalM();
})
function modalM() {
        $('#btnM').on("click", function () {
            toggle = 1;
            $('#menuModal').addClass('on');
            $('#menuModal').show().stop().animate({
                right: 0
            }, 600, function () {
                $(this).focus();
                $('#menuModal #btnMC').on("keydown", function (e) {
                    if (shifton == 0 && e.keyCode == 9) $('#btnMC').trigger("click");
                    toggle = 0;
                });
                $('#menuModal a:first').on("keydown", function (e) {
                    if (shifton > 0 && e.keyCode == 9) $('#btnMC').trigger("click");
                    toggle = 0;
                })
                $('#btnMC').on("click", function () {
                    $('#menuModal').stop().animate({
                        right: '-100%'
                    }, function () {
                        $(this).hide();
                        $('#btnM').focus();
                    });
                    $('#menuModal').removeClass('on');
                    toggle = 0;
                });
                $('#menuModal header>ul>li').on('focusin mouseenter', function () {
                    var thisN = $(this).index();
                    var $li = $(this);
                    if (thisN >= 0 && thisN < 4) {
                        $(this).addClass('on').siblings().removeClass('on');
                        $(this).find('>a').prepend('<span></span>').children().css({
                            borderTop: '3px solid #333'
                        }).stop(false, true).animate({
                            width: 100
                        }, 100, function () {
                            if ($li.hasClass('on')) {
                                var lineH = [129.8, 195.3, 195, 130];
                                $li.find('ul').css({
                                    display: 'block'
                                });
                                $(this).css({
                                    borderRight: '3px solid #333'
                                }).stop().animate({
                                    height: lineH[thisN]
                                }, 200, function () {
                                    $li.find('ul li').append('<span></span>').find('span').animate({
                                        width: 30
                                    }, 200);
                                });
                            }
                        });
                    }
                });
                $('#menuModal header>ul>li').on('mouseleave', function () {
                    $(this).find('>a').children().remove();
                    $(this).find('ul li').find('span').remove();
                    $(this).find('ul').hide();
                    $(this).removeClass('on')
                });
                $('#menuModal header ul li ul li a').on('keydown', function (e) {
                    var a = $(this).parent().index();
                    var b = $(this).closest('ul').children().length - 1;
                    if (a == b && e.keyCode == 9 && shifton == 0) $('#menuModal header>ul>li').trigger('mouseleave');
                });
                $('#menuModal header>ul>li>a').on('focusout', function () {
                    if (shifton > 0) $('#menuModal header>ul>li').trigger('mouseleave');
                });
            });

        });
    }
    
