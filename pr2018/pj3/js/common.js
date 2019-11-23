var toggle = 0;
var $win = $(window);

$(document).ready(function(){
    $('#header button').on('click', function () {
        if ($(this).hasClass('on')) {
            $(this).parent().children().removeClass('on');
            $('#header').removeClass('reset');
            $('#mask div').removeAttr('style');
            $('#gnb .txt_box').removeClass('on')
            setTimeout(function () {
                $('#gnb').removeClass('on');
                $('#header button').text('메뉴');
                toggle = 0;
            }, 500)
        } else {
            $(this).parent().children().addClass('on');
            toggle++;
            $('#header').addClass('reset');
            $('#gnb').addClass('on');
            setTimeout(function () {
                $('#mask .list1,#mask .list2').css({
                    height: '50%'
                })
                $('#mask .list3,#mask .list4').css({
                    width: '50%'
                })
                $('#header button').text('닫기')
                setTimeout(function(){
                    $('#gnb .txt_box').addClass('on')
                },500)
            }, 50)
        }
    });
    $('#header button').on('mouseenter focusin', function () {
        $('#gnb').addClass('on')
        setTimeout(function () {
            $('#mask').addClass('on')
        }, 50)
    });
    $('#header button').on('mouseleave focusout', function () {
        $('#mask').removeClass('on')
        if (!$('#header button').hasClass('on')) {
            setTimeout(function () {
                $('#gnb').removeClass('on')
            }, 10)
        }
    });
    $('#langBtn').on('click',function(){
       $(this).next().slideDown(); 
       });
    $('#footer .col2').on('mouseleave blur',function(){
        $(this).children('ul').slideUp();
    });
    $('#topBtn').on('click',function(){
        $('body,html').animate({scrollTop:0})
    });
});