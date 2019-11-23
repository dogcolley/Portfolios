$(document).ready(function(){
        
    var navOn = $('body').attr('id');
    console.log(navOn)
    if(!(navOn == "sub01")){
        $('#gnb>ul').children('li').eq(0).on('mouseenter',function(){
            $(this).children('ul').stop().slideDown();
        });
        $('#gnb>ul').children('li').eq(0).on('mouseleave',function(){
            $(this).children('ul').stop().slideUp();
        });
    }
    $('#gnb_m').css({height:$('#gnb_m').prev().height()})   
	$('#gnb_m ul li').css({lineHeight:($('#gnb_m').prev().height()*0.25)+"px"});
	$(window).on('resize',function(){
		$('#gnb_m').css({height:$('#gnb_m').prev().height()})   
		$('#gnb_m ul li').css({lineHeight:($('#gnb_m').prev().height()*0.25)+"px"});
	});
	$('#PCMode').on('click',function(){
		$('head meta[name="viewport"]').remove();
		$('body').width(1250)
	});
});
  
