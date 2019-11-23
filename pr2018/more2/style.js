var $win = $(window);

$(document).ready(function(){
    
    var timeClock = setInterval(function(){time();},1000);
    $('.main .intro a').on('click',function(){
        clearInterval(timeClock);
        $(this).parents('.intro').fadeOut(function(){
            $('.content').fadeIn(function(){
                $(this).find('.content_box').addClass('on');
            });
        });
    });
});

function time(){
    var nowT = new Date();
    var nowTime = ["",nowT.getHours(),nowT.getMinutes(),nowT.getSeconds()]

    if(nowTime[1]<12)nowTime[0] = "AM";
    else if(nowTime[1]>=12){
        nowTime[0] = "PM";
        if(nowTime[1]>12)nowTime[1]-=12;
    }
    $('.main .time').children().each(function(e){
        if(!e==0 &&nowTime[e] <10)$(this).text("0"+nowTime[e])
            else $(this).text(nowTime[e])
    });
}