<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>소개 역 전체보기</title>
    <meta name="viewport" content="width=device-width, maximum-scale=1.0 , minimum-scale=1.0 , user-scalable=no">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/sub.css">
    <script type="text/javascript" src="../js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/HScroll.js"></script>
    <script type="text/javascript" src="../js/sub.js"></script>
</head>

<body id="stationMenu">
    <div id="bgMS"></div>
    <a href="#content" id="skip">본문 바로가기</a>
    <header id="header">
        <?php 
         echo file_get_contents("../include/header.txt"); 
         ?>
    </header>
    <nav id="gnb">
        <?php 
         echo file_get_contents("../include/gnb.txt"); 
         ?>
    </nav>
    <section id="content">
        <h2 class="area">Metro See의 모든소개역</h2>
        <div class="area">
            <article id="cnt1">
                <h3>1호선</h3>
                <ul>
                    <li><a href="../station/sub1.php">의정부역</a></li>
                    <li><a href="../station/sub1.php">천량리역</a></li>
                    <li><a href="../station/sub1.php">동대문역</a></li>
                    <li><a href="../station/sub1.php">종로3가역</a></li>
                    <li><a href="../station/sub1.php">서울역</a></li>
                    <li><a href="../station/sub1.php">노량진역</a></li>
                    <li><a href="../station/sub1.php">광명역</a></li>
                    <li><a href="../station/sub1.php">안양역</a></li>
                    <li><a href="../station/sub1.php">수원역</a></li>
                    <li><a href="../station/sub1.php">병점역</a></li>
                    <li><a href="../station/sub1.php">아산역</a></li>
                    <li><a href="../station/sub1.php">온수역</a></li>
                    <li><a href="../station/sub1.php">부천역</a></li>
                    <li><a href="../station/sub1.php">부평역</a></li>
                    <li><a href="../station/sub1.php">제물포역</a></li>
                    <li><a href="../station/sub1.php">인천역</a></li>
                </ul>
            </article>
            <article id="cnt2">
                <h3>2호선</h3>
                <ul>
                    <li><a href="../station/sub1.php">신림역</a></li>
                    <li><a href="../station/sub1.php">방배역</a></li>
                    <li><a href="../station/sub1.php">강남역</a></li>
                    <li><a href="../station/sub1.php">삼성역</a></li>
                    <li><a href="../station/sub1.php">잠실역</a></li>
                    <li><a href="../station/sub1.php">건대입구역</a></li>
                    <li><a href="../station/sub1.php">왕십리역</a></li>
                    <li><a href="../station/sub1.php">이대입구역</a></li>
                    <li><a href="../station/sub1.php">신촌역</a></li>
                    <li><a href="../station/sub1.php">홍대입구역</a></li>
                    <li><a href="../station/sub1.php">합정역</a></li>
                </ul>
            </article>
            <article id="cnt3">
               <h3>분당선</h3>
                <ul>
                    <li><a href="../station/sub1.php">왕십리역</a></li>
                    <li><a href="../station/sub1.php">서울숲역</a></li>
                    <li><a href="../station/sub1.php">강남구청역</a></li>
                    <li><a href="../station/sub1.php">선릉역</a></li>
                    <li><a href="../station/sub1.php">대모산입구역</a></li>
                    <li><a href="../station/sub1.php">수서역</a></li>
                    <li><a href="../station/sub1.php">가천대역</a></li>
                    <li><a href="../station/sub1.php">모란역</a></li>
                    <li><a href="../station/sub1.php">이매역</a></li>
                    <li><a href="../station/sub1.php">서현역</a></li>
                    <li><a href="../station/sub1.php">정자역</a></li>
                    <li><a href="../station/sub1.php">죽전역</a></li>
                </ul>
            </article>
        </div>
    </section>
    <footer id="footer">
        <?php 
                echo file_get_contents("../include/footer.txt"); 
            ?>
    </footer>
</body>

</html>
