<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>웹 테스트</title>
    <meta name="viewport" content="width=device-width, maximum-scale=1.0 , minimum-scale=1.0 , user-scalable=no">
    <script type="text/javascript" src="../js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            var $win = $(window);
            var $ct = $('#ct');
            setInterval(function(){
            move($ct)
            
            },1000)
            $win.on('keydown',function(e){
                console.log(e.keyCode)
                if(e.keyCode == 37){
                    move2($ct,-1)
                }
                if(e.keyCode == 39)
                    move2($ct,1)
            })
        });
        
        function move(move){
            console.log('ㅎㅇ')
            var ctTop = move.position().top;
            var top = 0;
            top = ctTop-100
            move.animate({top:top},400,function(){
                top=top+100;
                move.animate({top:top},400);
            });
        }
        function move2(move,num){
            var ctLeft = move.position().left;
            var left = 0;
            left = ctLeft + num;
            move.css({left:left})
            
        }
        function bsmove(){
            
            
            
        }
    </script>
    <style type="text/css">
        
        body,p,h1,h2,h3,h4,h5,ul,li,ol,button{margin: 0;padding: 0}
        html,body{width: 100%;height: 100%}
        li{list-style: none}
        a{text-decoration: none}
        a:link,a:visited,a:hover,a:active{color: inherit;font-size: inherit}
        #contentBox{width: 50%;height: 50%;background: #000;margin: 0 auto;position: relative}
        #ct{width: 10px;height: 10px;background: #fff;border-radius: 100%;position: absolute;bottom: 10%;left: 5%}
        #ct:after{width: 100%;height: 100%;content: ""}
        #btmblock{width: 100%;height: 10%;position: absolute;bottom: 0;background: #ffa142}
        #baseblock1{width: 40px;height: 40px;border: 5px solid #1c0900;background: #83541d;box-sizing: border-box;bottom: 10%;left: 30%;position: absolute}
        #baseblock2{width: 40px;height: 40px;border: 5px solid #1c0900;background: #83541d;box-sizing: border-box;bottom: 10%;left: 50%;position: absolute}
    </style>
</head>

<body id="" class="">
    <div id="contentBox">
        <div id="bg"></div>
        <div id="ct"></div>
        <div id="btmblock"></div>
        <div id="baseblock1"></div>
        <div id="baseblock2"></div>
    </div>
    <div class="guideBox">
        <h2>조작방법</h2>
    </div>
</body>

</html>
