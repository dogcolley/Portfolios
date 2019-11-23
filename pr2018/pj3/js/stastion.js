//window.addEventListener("load",function  () {
//	//setTimeout(메서드, delay [, param1, param2, .......,])
//	setTimeout(scrollTo, 0, 0, 1)	//지연시간0, 가로좌표값0, 세로좌표값1
//}, false);
$(document).ready(function () {
    var counter = 1
    var counter_max = $('#content').children().length - 3;
    var touch_start = 0;
    var touch_end = 0;
    var touch_sum = 0;
    var stopOnepage = false
    cntMG();
    setTimeout(function(){
        $('#station #cnt1').addClass('on');
    },10);
 
    $('#ch1').on("onchange",function(){
    });
    $('#location>button').on('click', function () {
        var $this = $(this);
        $(this).next().show().stop().animate({
            width: 120
        }).end().hide();
        $(this).next().children('button').on('click', function () {
            $(this).parent().stop().animate({
                width: 0
            }, function () {
                $(this).hide();
                $this.show();
            });
        });
        $(this).next().find('ul li button').on('click', function () {
           pageMove(parseInt($(this).text()));
        });
    });
    $('#topBtn').on('click',function(){
        if($win.width()<765){
            $('#footer').css({display:'none'});
        }
        $('#cnt1').addClass('on').siblings().removeClass('on');
        $('#nowNum').text('1');
        $('#content').removeAttr('style');
        $('#content article').removeAttr('style');
        counter=1;    
    });
    $('#pageMove button').on('click', function (){
        var selects = 0;
        if($(this).index()==1) selects = -1;
        else selects = 1;
        mainMove(selects)
    });
    $('#QBtn button').click('click',function(){
        var moveNum = $(this).parent().index()+2
        pageMove(moveNum);
    });
        
    $('#station .tab_box').on('mousedown',function(e){
       /* 마아스를 꾸욱 눌렀을떄 발생하는 이벤트*/
       var startX = e.pageX; //마우스를 누른상태에서의 마우스의 좌표값을 받아오세요
       var stop = true; // 마우스를 때었을떄의 이벤트를 정지 시켜주는 변수
        console.log(startX);
        $win.on('mousemove',function(e2){ //누른상태의 마우스가 움직일때 발생하는 이벤트
            if(stop){ //정지가 true일 경우 움직이고 flase경우엔 실행 되지 않는다.
                var nowX = e2.pageX; //마우스가 왔다리 갔다리 할때의 자표값을 받아온다.
                var tab_btn = parseInt($('#station .tab_box .tab_btn').css('marginLeft')); // 우리가 가린 영역의 좌우로 움직이게 해주기 위한 변수
                var move = startX - nowX; // 누른 마우스에서 좌로 가는지 우로가는지 확인하는 변수
                var max_move = $('#station .tab_box .tab_btn').width() - $('#station .tab_box').width(); // 전체영역에서 가려진 영역의 값을 구해서 그이상은 움직이 않는 변수를 설정

                if(move <0){ // 마우스를 좌로 움직였을때
                    if(tab_btn>-max_move)tab_btn-=20; // max_move이상은 움직이지 않는다. 아닐경우 이동
                }else{ // 마우스를 우로 움직였을때
                    if(tab_btn<0)tab_btn+=20; // 0일때는 좌로 움직이지 않는다. 아닐경우 이동
                }
            }
                $('#station .tab_box .tab_btn').css({marginLeft:tab_btn}); // 움직인 좌표값을 반영
                $win.on('mouseup',function(){ //마우스를 땔경우에는 이벤트를 정지해라
                    stop =false; 
                });
            
        });
    });
    $('#station #tabPrev').on('click',function(){tabMove(1)});
    $('#station #tabNext').on('click',function(){tabMove(2)});
    $('#station .tab_btn button').on('click',function(){
       var num = $(this).parent().index();
       toggle =1;
       $('#maskWrap').css('z-index',99).css({position:'relative'})
       $('#station .tab_list').show();
       $('#cnt3').addClass('modalin')
       $('#station .tab_list ul li').eq(num).addClass('on');
       $('#station .tab_list ul li button').on('click',function(){
           $(this).closest('li').removeClass('on');
           $('#maskWrap').removeAttr('style');
           $('#station .tab_list').hide();
           $('#cnt3').removeClass('modalin');
           toggle=0;
       });
       $('#modalBtn button').on('click',function(){
           if($(this).index()==0){
               var $num =$('#station .tab_list ul li.on');
               if($num.index() ==0)                  $num.parent().children().last().addClass('on').siblings().removeClass('on');
               else $num.prev().addClass('on').siblings().removeClass('on');
           }
           else{
               var $num =$('#station .tab_list ul li.on');
               console.log($num.index() , $num.parent().children().length-1)
               if($num.index() == $num.parent().children().length-1)$num.parent().children().first().addClass('on').siblings().removeClass('on');
               else $num.next().addClass('on').siblings().removeClass('on');
           }
       });
        
    });
    $('#station #cnt2 .top_style button').on('click',function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('#station #cnt2 .bottom_style ').children().eq($(this).parent().index()).show().siblings().hide();
    });
    $('#station #cnt2 .bottom_style div .bg').each(function(){
        var bgurl = ""
        bgurl +=$(this).parents('div').attr('class')
        bgurl +=$(this).parent().attr('class');
        $(this).css({backgroundImage:'url("../img/station/Shinchon/'+bgurl+'_1.jpg")'});
    });
    $('#station #cnt2 .bottom_style .poto_list button').each(function(){
        var bgurl = ""
        bgurl +=$(this).parents('div').attr('class')
        bgurl +=$(this).parents('li').parents('li').attr('class')+'_'+($(this).parent().index()+1)
        $(this).css({backgroundImage:'url("../img/station/Shinchon/'+bgurl+'.jpg")'}) 
    });
    $('#station #cnt2 .bottom_style .poto_list').each(function(){
        var bgurl = ""
        bgurl +=$(this).parents('div').attr('class');
        bgurl +=$(this).parents('li').attr('class');
        $(this).css({backgroundImage:'url("../img/station/Shinchon/'+bgurl+'_1.jpg")'});
        $(this).children().eq(0).addClass('on')
    });
    $('#station #cnt2 .bottom_style>div>ul>li>button').on('click',function(){
        var btnthis= $(this);
        btnthis.next().show().after('<button type="button" class="pt_cl">닫기</button>')
        btnthis.siblings('.pt_cl').on('click',function(){
           btnthis.next().hide(); 
            $(this).remove();
        });
        btnthis.next().find('button').on('click',function(){
            var bgurl = ""
            bgurl +=$(this).parents('div').attr('class');
            bgurl +=$(this).parents('li').parents('li').attr('class')+'_'+($(this).parent().index()+1);
            $(this).parent().addClass('on').siblings().removeClass('on');
            console.log(bgurl)
            $(this).closest('ul').css({backgroundImage:'url("../img/station/Shinchon/'+bgurl+'.jpg")'}) 
        });
    });
    $win.on('resize',function(){
        cntMG();
    });
    $win.on('touchstart', function (e) {
        var event = e.originalEvent;
        touch_start = event.changedTouches[0].pageY;
    });
    $win.on('touchend', function (e) {
        var event = e.originalEvent;
        touch_end = event.changedTouches[0].pageY;
        touch_sum = touch_start - touch_end;
        console.log(stopOnepage)
        if(!stopOnepage)mainMove();
    });
    $('#station #cnt2 .bottom_style').on('mouseenter touchstart',function(){
       stopOnepage = true
        console.log(stopOnepage);
    });
    $('#station #cnt2 .bottom_style').on('mouseleave touchend',function(){
       setTimeout(function(){
           stopOnepage = false;
       },200);
    });
    $('#map').on('mouseenter touchstart',function(){
       stopOnepage = true
        console.log(stopOnepage);
    });
    $('#map').on('mouseleave touchend',function(){
       setTimeout(function(){
           stopOnepage = false;
       },200);
    });
    $win.on('mousewheel DOMMouseScroll keydown', function (e) {
        var Event = e.type;
        var E = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;;
        var E2 = e.keyCode;
        if(!stopOnepage)mainMove(E, E2)

    });

    function mainMove(E, E2) {
        var Nowcnt = '#cnt'
        if ((touch_sum > 100 || E2 == 40 || E < 0) && counter < counter_max && toggle == 0) {
            toggle++;
            var $cnt = '#cnt' + counter
            $($cnt).animate({
                bottom: $('#cnt' + counter).height()
            }, function () {
                toggle = 0;
            });
            counter++;
            Nowcnt += counter;
            $(Nowcnt).addClass('on').siblings().removeClass('on')
        } else if ((touch_sum > 100 || E2 == 40 || E < 0) && counter == counter_max && toggle == 0) {
            toggle++;
            $('#content #cnt5').css({
                height: $(this).height()
            })
            var x = $('#content').height() - $("#footer").outerHeight();
            $('#content').css({
                borderBottom: 'none'
            }).animate({
                height: x
            }, function () {
                $('#footer').css({display:'block'})
                toggle = 0;
            });
            counter++;
        } else if ((touch_sum < -100 || E2 == 38 || E > 0) && counter > counter_max && toggle == 0) {
            toggle++;
            $('#content').removeAttr('style');
            $('#content #cnt5').removeAttr('style');
                if($win.width()<765)$('#footer').slideDown(function(){
                    $(this).hide();
                });
                toggle = 0;
                counter--;
        } else if ((touch_sum < -100 || E2 == 38 || E > 0) && counter <= counter_max && toggle == 0 && counter !== 1) {
            toggle++;
            var $cnt = '#cnt' + (counter - 1);
            $($cnt).stop().animate({
                bottom: 0
            }, function () {
                toggle = 0;
            });
            counter--;
            Nowcnt += counter;
            $(Nowcnt).addClass('on').siblings().removeClass('on')
        }
        if (counter <= counter_max) $('#nowNum').text(counter);
        setTimeout(function(){
            if(counter==1) $('#prevBtn').css({display:'none'})
            else $('#prevBtn').css({display:'block'})
            if(counter==6) $('#nextBtn').css({display:'none'})
            else $('#nextBtn').css({display:'block'})
        },300);
    }
    function cntMG(){
        var a  = ($win.height()-$('#station #cnt1 .area').innerHeight())*0.5;
        var b  = ($win.height()-$('#station #cnt2 .col1').innerHeight())*0.5;
        var c  = ($win.height()-$('#station #cnt3 .col1').innerHeight())*0.5;
        var d  = ($win.height()-$('#station #cnt4 .col1').innerHeight())*0.5;
        var e  = ($win.height()-$('#station #cnt5 .col1').innerHeight())*0.5;
        $('#station #cnt1 .area').css({marginTop:a});
        $('#station #cnt2 .col1').css({marginTop:b});    
        $('#station #cnt3 .col1').css({marginTop:c});    
        $('#station #cnt4 .col1').css({marginTop:d});    
        $('#station #cnt5 .col1').css({marginTop:e});    
        if($win.width()>765){$('#station .tab_btn').removeClass('on')}
        else{
            $('#station .tab_btn').addClass('on')
        }
    }
    function tabMove(move){
        var tab_btn = parseInt($('#station .tab_box .tab_btn').css('marginLeft')); 
        var max_move = $('#station .tab_box .tab_btn').width() - $('#station .tab_box').width();
        var move_with = $('#station .tab_box li').outerWidth(true);
        if(move==1 && tab_btn <0){
            console.log("btn1");
            tab_btn+=move_with;
        }
        else if(move==2  && tab_btn>-max_move){
            console.log("brn2");
            tab_btn-=move_with;
        }
        $('#station .tab_box .tab_btn').stop().animate({marginLeft:tab_btn});
    }
    function pageMove(num){
            var Nowcnt = '#cnt'
            if (num > counter) {
                toggle++;
                var z = counter;
                for (var i = num; i > z; i--) {
                    var $cnt = '#cnt' + counter;
                    $($cnt).stop().animate({bottom: $('#cnt' + counter).height()}, function () {
                        toggle = 0;
                    });
                    counter++;
                }
                Nowcnt += counter;
                $(Nowcnt).addClass('on').siblings().removeClass('on');
            } else if (num < counter && !(counter > counter_max)) {
                var z = counter;
                for (var i = num; i < z; i++) {
                    toggle++;
                    var $cnt = '#cnt' + (counter - 1);
                    $($cnt).stop().animate({
                        bottom: 0
                    }, function () {
                        toggle = 0;
                    });
                    counter--;
                }
                Nowcnt += counter;
                $(Nowcnt).addClass('on').siblings().removeClass('on');
            } else if (num < counter && counter > counter_max) {
                var z = counter;
                $('#content').removeAttr('style');
                $('#content #cnt5').removeAttr('style');
                for (var i = num; i < z; i++) {
                    toggle++;
                    var $cnt = '#cnt' + (counter - 1);
                    $($cnt).stop().animate({
                        bottom: 0
                    }, function () {
                        toggle = 0;
                    });
                    counter--;
                }
                Nowcnt += counter;
                $(Nowcnt).addClass('on').siblings().removeClass('on');
            }
            if (counter <= counter_max) $('#nowNum').text(counter);
            setTimeout(function(){
                if(counter==1) $('#prevBtn').css({display:'none'})
                else $('#prevBtn').css({display:'block'})
                if(counter==6) $('#nextBtn').css({display:'none'})
                else $('#nextBtn').css({display:'block'})
            },300);
    }    
});

