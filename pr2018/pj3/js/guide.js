$(document).ready(function () {
    //    $win.css({scrollTop:0})
    var h = 0;
    var $cnt = new Array;
    var cntTopIn = new Array;
    resizeContent();
    $win.on('resize', function () {
        resizeContent();
    });
    $win.on('scroll', function () {
        var nowscroll = $win.scrollTop();
        var $guide = $('#guide');
        if (nowscroll > 0) $('#mainMask').css({height: h - nowscroll},400);
        else if(nowscroll == 0){ $('#mainMask').css({height:'100%'}),300}
        if (nowscroll > cntTopIn[0] && nowscroll < cntTopIn[1]) cntTop($cnt[0]);
        else if (nowscroll > cntTopIn[1] && nowscroll < cntTopIn[2]) {cntTop($cnt[1]);}
        else if (nowscroll > cntTopIn[2] && nowscroll < cntTopIn[3]) cntTop($cnt[2]);
        else if (nowscroll > cntTopIn[3] && nowscroll < cntTopIn[4]) cntTop($cnt[3]);
        else if (nowscroll > cntTopIn[4] && nowscroll < cntTopIn[5]) cntTop($cnt[4]);
        else if (nowscroll > cntTopIn[5]) cntTop($cnt[5]);
    });

    function resizeContent() {
        h = $('#mainMask').height() - 500;
        
        if($win.width()>765){
          $("#content article").each(function (e) {
            cntTopIn[e] = $(this).offset().top-100;
            $cnt[e] = $(this).attr('id')
            }); 
        }else{
            $("#content article").each(function (e) {
            cntTopIn[e] = $(this).offset().top;
            $cnt[e] = $(this).attr('id')
            });
        }
        console.log(cntTopIn);
        console.log($cnt);
        console.log(h);

    }

    function cntTop($cnt) {
        if (!$('#' + $cnt).hasClass('on')) {
            $('#' + $cnt).addClass('on').siblings().removeClass('on');
        }
    }

});
