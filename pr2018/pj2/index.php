<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>웨일 리조트</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="icon" href="images/common/icon.png">
    <script  src="js/jquery-1.12.4.min.js"></script>
    <script  src="js/main.js"></script>
    <script  src="js/common.js"></script>
</head>

<body id="page0_0">
    <div id=skipnav><a href="#mainSnb">본문 바로가기</a></div>
    <header id="mainHeader">
        <h1 id="tit"><a href="/pj2/index.php"><img alt="Whale Resort" width="175" height="105" src="images/common/main_log.png"></a></h1>
        <a id="btnQ" href="/pj2/reservation/reservation.html">예약하기</a>
        <button id="btnM" type="button">몌뉴열기</button>
    </header>
    <div id="menuModal">
        <?php
            echo file_get_contents("include/modalMenu.txt");
        ?>
    </div>
    <section id="content">
        <div id="mainSnb">
            <ul>
                <li class="on"><a href="#cnt1">인사말</a></li>
                <li><a href="#cnt2">이벤트</a></li>
                <li><a href="#cnt3">이용안내</a></li>
                <li><a href="#cnt4">포토존</a></li>
            </ul>
        </div>
        <article id="cnt1" class="main_st1" tabindex="0">
            <div class="bg">
                <div>
                    <div></div>
                </div>
            </div>
            <h3 class="blind">인사말</h3>
            <div class="txt">
                <strong>바다와 함께 하는 힐링 리조트</strong>
                <span>소중한 사람과 함께 특별한 추억을 만들어 보세요!</span>
            </div>
        </article>
        <article id="cnt2" class="main_st1">
            <h3 class="blind">이벤트</h3>
            <div class="txt">
                <strong>웨일 리조트만의 이벤트!</strong>
                <span>계절과특별한 날에 만나볼수있는 이벤트</span>
            </div>
            <ul>
                <li class="ev1"><a href="#"><span></span><em>불꽃 축제</em></a></li>
                <li class="ev2"><a href="#"><span></span><em>수영장 파티</em></a></li>
                <li class="ev3"><a href="#"><span></span><em>바베큐 파티</em></a></li>
                <li class="ev4"><a href="#"><span></span><em>악기 연주회</em></a></li>
            </ul>
        </article>
        <article id="cnt3" class="main_st1">
            <h3 class="blind">이용안내</h3>
            <div class="txt">
                <strong>리조트를 한눈에!</strong>
                <span>주요 시설만을 담은 고객님을 위한 페이지</span>
            </div>
            <ul>
                <li class="list1">
                    <a href="/room/room.html">
                        <strong>오시는 길</strong>
                        <span>바로가기</span>
                    </a>
                </li>
                <li class="list2">
                    <a href="/room/room.html">
                        <strong>객실안내</strong>
                        <span>바로가기</span>
                    </a>
                </li>
                <li class="list3">
                    <a href="/info/convenience.html">
                        <strong>편의시설</strong>
                        <span>바로가기</span>
                    </a>
                </li>
                <li class="list4">
                    <a href="/info/convenience.html">
                        <strong>운영시간</strong>
                        <span>바로가기</span>
                    </a>
                </li>
            </ul>
        </article>
        <article id="cnt4" tabindex="0">
            <div class="area">
                <div id="main4">
                    <h3>
                        <span>SPECIAL</span>
                        <span>WHALE</span>
                    </h3>
                    <p class="lineH1">들은것은 곧잊어버린다 <br> 본것은 기억된다 <br> 해본것은 내것이 된다</p>
                    <p class="lineH2">웨일과 함꼐 좋은 추억 <br> 만들어 가세요</p>
                </div>
                <div class="img1 img">
                    <div>
                        <img alt="감섬 풍만한 사진 한장" width="145" height="120" src="images/main/main4_img01.jpg">
                    </div>
                    <p aria-hidden="true">감섬 풍만한 사진 한장</p>
                </div>
                <div class="img2 img">
                    <div>
                        <img alt="노을이 지는 바다에서" width="180" height="180" src="images/main/main4_img02.jpg">
                    </div>
                    <p aria-hidden="true">노을이 지는 바다에서</p>
                </div>
                <div class="img3 img">
                    <div>
                        <img alt="연긴과 함께하는 불꽃놀이" width="180" height="180" src="images/main/main4_img03.jpg">
                    </div>
                    <p aria-hidden="true">연긴과 함께하는 불꽃놀이</p>
                </div>
                <div class="img4 img">
                    <div>
                        <img alt="모래사장과 바다" width="180" height="180" src="images/main/main4_img04.jpg">
                    </div>
                </div>
                <div class="img5 img">
                    <div>
                        <img alt="해변에서 인생컷 한장" width="180" height="180" src="images/main/main4_img05.jpg">
                    </div>
                    <p aria-hidden="true">해변에서 인생컷 한장</p>
                </div>
                <div class="img6 img">
                    <div>
                        <img alt="헬리켐으로 찍은 부산 야경" width="180" height="180" src="images/main/main4_img06.jpg">
                    </div>
                    <p aria-hidden="true">헬리켐으로 찍은 부산 야경</p>
                </div>
                <div class="img7 img">
                    <div>
                        <img alt="어두운 바다를 환하게 비추는" width="180" height="180" src="images/main/main4_img07.jpg">
                    </div>
                    <p aria-hidden="true">어두운 바다를 환하게 비추는</p>
                </div>
                <div class="img8 img">
                    <div>
                        <img alt="어두운 바다를 환하게 비추는" width="180" height="180" src="images/main/main4_img08.jpg">
                    </div>
                    <p aria-hidden="true">더베이 101의 야경</p>
                </div>
                <div class="img9 img">
                    <div>
                        <img alt="요트와 함께 떠나는 힐링캠프" width="180" height="180" src="images/main/main4_img09.jpg">
                    </div>
                    <p aria-hidden="true">요트와 함께 떠나는 힐링캠프</p>
                </div>
                <div class="img10 img">
                    <div>
                        <img alt=">감천문화마을에서 감성 사진 한장 겟" width="180" height="180" src="images/main/main4_img10.jpg">
                    </div>
                    <p aria-hidden="true">감천문화마을에서 감성 사진 한장 겟</p>
                </div>
            </div>
        </article>
    </section>

    <footer id="mainFooter">
        <?php include("include/footer.php"); ?>
    </footer>
</body>

</html>
