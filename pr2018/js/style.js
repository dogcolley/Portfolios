var $win = $(window);
var toggle = false;
var shifton = false;

$(document).ready(function () {
    var num = 1;

    //load function
    makelog();
    loadlog();
    timemake();
    keyControl();
    setInterval(timemake, 1000);
    $win.load(function(){
        setTimeout(respone,500)
    });
    //window function 
    $win.on('resize', function (){
        makelog();
        respone();
        delaylog();
    });

    //main cuntrol button cuntrol
    $('#skip a').on('click',function(){
       var content = $(this).attr('href');
        if(content == "#PJ") $('#OP_PJ').trigger('click');
        else if(content == "#Skill")$('#OP_Skill').trigger('click');
        else $('#OP_AC').trigger('click');
        return false;
    });
    $('#main section').find('button:first').on('focusout',function(){
       if(shifton){
           $(this).closest('section').find('button:last').focus();
       }
    });
    $('.tab_cl').on('focusout',function(){
        if(!shifton){
            var tabsection = $(this).closest('section');
            tabsection.find('button:first').focus();
        }
         //   var key  = e.keyCode;
    });
    $('#round6 button').on('click', function () {
        if (num !== 4) num++;
        else num = 1;
        $('#main').removeClass().addClass('mode' + num)
        return false;
    });
    $('#OP_Skill').on('click', function () {
        var thisSection = $('#Skill');
        var nowOnbtn = "";
        var thisbtn = $(this);
        thisSection.addClass('on');
        $(thisSection).find('.tab_btn li').addClass('on')
        thisSection.css({zIndex: 90}).animate({top:'0%'},function(){
            $(thisSection).find('h2').attr({tabIndex:0}).focus().removeAttr('tabIndex');
            stopanimation();
        });
        thisSection.find('.tab_btn button').on('click', function () {
            var z = $(this).parent().index();
            nowOnbtn = $(this);
            thisSection.children('.tab_cl').addClass('on');
            $(this).addClass('on').parent().siblings().each(function(){
               $(this).children().removeClass('on'); 
            });
            thisSection.children('article').eq(z).siblings('article').fadeOut().removeClass('on');
            thisSection.children('article').eq(z).fadeIn().addClass('on');
            if (!$(this).parents('.tab_btn').hasClass('on')) $(this).parents('.tab_btn').addClass('on')
        });
        if(!toggle){
            toggle=true;
            thisSection.children('.tab_cl').on('click', function () {
                moveanimation()
                thisSection.animate({top:'100%'},function(){
                        thisSection.children('.tab_cl').removeClass('on');
                        thisSection.removeClass('on');
                        thisSection.find('.tab_btn').removeClass('on');
                        if(!nowOnbtn=="" && nowOnbtn.hasClass('on'))nowOnbtn.removeClass('on');
                        thisbtn.focus();
                    toggle=false;
                });
                thisSection.children('article').fadeOut();
            });
        }
    });
    $('#OP_PJ').on('click', function () {
        var thisSection = $('#PJ');
        var thisbtn = $(this);
        thisSection.addClass('on').css({zIndex: 90}).animate({right:0},function(){
            $(thisSection).find('h2').attr({tabIndex:0}).focus().removeAttr('tabIndex');
            stopanimation();
        });
        thisSection.children('.tab_cl').on('click', function () {
            moveanimation()
            thisSection.css({zIndex: 80}).animate({right: '-100%'},function(){
                thisSection.removeClass('on');
                thisbtn.focus();
            });
        });
        $('.tab_btn button').on('click',function(){
            var thisnum= $(this).parent().index();
           $(this).parent().addClass('on').siblings().removeClass('on');
            thisSection.find('article').eq(thisnum).addClass('on').siblings().removeClass('on move');
            setTimeout(function(){
                thisSection.find('article').eq(thisnum).addClass('move');
            },60)
        });
    });
    $('#OP_AC').on('click', function () {
        var thisSection = $('#AC');
        var thisbtn = $(this);
        thisSection.addClass('on').css({zIndex: 90}).animate({right:0},function(){
            $(thisSection).find('h2').attr({tabIndex:0}).focus().removeAttr('tabIndex');
            stopanimation();
            if(thisSection.find('article').eq(0).hasClass('on')){
                setTimeout(function(){
                    thisSection.find('article').eq(0).addClass('move');
                },60);
            }
        });
        thisSection.children('.tab_cl').on('click', function () {
            moveanimation()
            thisSection.css({zIndex: 80}).animate({right: '-100%'},function(){
                thisSection.removeClass('on');
                thisbtn.focus();
            });
        });
        
        thisSection.find('.tab_btn button').on('click',function(){
            var $thisnum = $(this).parent().index()
           $(this).addClass('on').parent().siblings().children().removeClass('on');
            thisSection.find('article').eq($thisnum).siblings().removeClass('on , move').end().addClass('on')
            setTimeout(function(){
                thisSection.find('article').eq($thisnum).addClass('move');                
            },60)
        });
    });
    $('#footer button').on('click',function(){
       $(this).next().slideDown();
    });
    $('#footer .cl_ft').on('click',function(){
        $(this).parent().slideUp();
        return false;
    });
});

//functions 

function timemake() {
    var Nowtime = new Date;
    var nalsu = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var StartMon = 3
    var StarDay = 19
    var NowMon = Nowtime.getMonth();
    var NowDay = Nowtime.getDay() - 1;
    var NowHour = Nowtime.getHours();
    var NowMM = Nowtime.getMinutes();
    var NowSS = Nowtime.getSeconds();
    var totalDay = 0;

    for (var i = StartMon; i <= NowMon; i++) {
        if (i == StartMon) {
            var day = nalsu[i];
            day -= 19
        } else if (i == NowMon) {
            day = NowDay;
        } else {
            var day = nalsu[i];
        }
        totalDay += day;
    }
    //    console.log(NowHour,NowMM,NowSS);

    $('#DD').text(totalDay);
    $('#HH').text(NowHour);
    $('#MM').text(NowHour);
    $('#SS').text(NowSS);
} //time cuntorl function

function makelog() {
        var $body = $('body , html');
        var $mainLog = $('#mainLog');
        var bgbox = $('#bgbox');
        if ($win.height() > $win.width()) {
            $mainLog.width($body.width() / 100 * 80).height($body.width() / 100 * 80);
            bgbox.find('>div').eq(0).width($body.width() / 100 * 20);
            bgbox.find('>div').eq(1).width($body.width() / 100 * 20);
            bgbox.find('>div div').height(bgbox.find('>div div').width())
        } else if ($win.height() < $win.width()) {
            $mainLog.height($body.height() / 100 * 80).width($body.height() / 100 * 80);
            bgbox.find('>div').eq(0).width($body.width() / 100 * 20);
            bgbox.find('>div').eq(1).width($body.width() / 100 * 20);
            bgbox.find('>div div').height(bgbox.find('>div div').width())
        }
} //main log cuntrol

function keyControl() {
    $(window).on({
        keyup: function (e) {
            if (e.keyCode == 16) shifton = false
        },
        keydown: function (e) {
            if (e.keyCode == 16) shifton = true
        }
    });
} //win key cuntrol funtion

function stopanimation(){
    $('#mainLog').removeClass('on');
    $('#bgbox').removeClass('on');
}

function moveanimation(){
    $('#mainLog').addClass('on');
    $('#bgbox').addClass('on');
}

function respone(){
    var WinWD = $win.width();
        if(WinWD < 765){
            var sam = 0;
            $('#AC').find('.tab_btn ul li').each(function(){
               sam += $(this).outerWidth()+20; 
            });
            $('#AC').find('.tab_btn ul').width(sam);
        }
        else $('#AC').find('.tab_btn ul').removeAttr('style');
}

function delaylog(){
    setTimeout(function(){        
        var border_size = $('#round').height() / 20;           $('#round6').width($('#round6').height());
        $('#round > div').each(function () {
            $(this).width($(this).height());
            $(this).find('.cover1').css({
                borderLeft: border_size + 'px solid',
                borderTop: border_size + 'px solid'
            })
            $(this).find('.cover2').css({
                borderRight: border_size + 'px solid',
                borderBottom: border_size + 'px solid'
            });
        });
    },2000);
}

function loadlog(){
        var border_size = $('#round').height() / 20;           $('#round6').width($('#round6').height());
        $('#round > div').each(function () {
            $(this).width($(this).height());
            $(this).find('.cover1').css({
                borderLeft: border_size + 'px solid',
                borderTop: border_size + 'px solid'
            })
            $(this).find('.cover2').css({
                borderRight: border_size + 'px solid',
                borderBottom: border_size + 'px solid'
            });
        });
}