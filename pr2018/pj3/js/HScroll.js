$(document).ready(function(){
    $win.on('scroll',function(){
       if($(this).scrollTop()==0)$('#header').removeClass('on');
        else{
            if(!$("#header").hasClass('on'))$('#header').addClass('on');
        }
    });    
});