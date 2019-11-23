<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>Metro See</title>
    <meta name="viewport" content="width=device-width, maximum-scale=1.0 , minimum-scale=1.0 , user-scalable=no">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/index.css">
    <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</head>

<body id="main">
    <a href="#content" id="skip">본문 바로가기</a>
    <header id="header">
        <?php 
         echo file_get_contents("include/header.txt"); 
         ?>
    </header>
    <nav id="gnb">
        <?php 
         echo file_get_contents("include/gnb.txt"); 
         ?>
    </nav>
    <article id="content">
        <iframe id="bgVideo" width="560" height="315" src="https://www.youtube.com/embed/l3hz_KP-Ucg?rel=0&amp;autoplay=1;controls=0&amp;showinfo=0" allow="autoplay; encrypted-media" allowfullscreen title="배경용 YOU TOUBE 동영상"></iframe>
        <div id="cover1" class="cover"></div>
        <div id="cover2" class="cover"></div>
        <div id="Mcover"></div>

        <div class="area">
            <div class="txt_indent">.</div>
            <div class="content_box">
                <div class="main_1">
                    <h2>멀리 가지말자 Metro See</h2>
                    <strong class="bs"> 지하철로 찾아보는 여행코스</strong>
                    <div class="such_box1">
                        <h3 class="blind">역 검색 입력</h3>
                        <strong>역을 검색하거나 노선 버튼을 눌러주세요!</strong>
                        <input type="text" title="역검색 입력창" value="" id="ch1">
                        <button type="button" class="txt_indent such_btn">검색하기</button>
                    </div>
                </div>
                <div id="location">
                    <h3 class="blind">노선 보기 버튼모음</h3>
                    <ul>
                        <li class="list1"><button type="button">1<span class="blind">호선</span></button></li>
                        <li class="list2"><button type="button">2<span class="blind">호선</span></button></li>
                        <li class="list3"><button type="button">분당<span class="blind">노선</span></button></li>
                    </ul>
                </div>
                <div id="sectionBox">
                    <section id="cnt1">
                        <h3>1호선 : 16개의 추천역</h3>
                        <div class="route">
                            <div class="route_line">
                                <div class="line1 cpo_auto">
                                    <a href="station/sub1.php">인천역</a>
                                    <a href=station/sub1.php>제물포역</a>
                                    <a href=station/sub1.php>부평역</a>
                                    <a href=station/sub1.php>부천역</a>
                                    <a href=station/sub1.php>온수역</a>
                                    <div class="line1_1"></div>
                                    <div class="line1_2">
                                        <a href=station/sub1.php>서울역</a>
                                        <a href=station/sub1.php>노량진역</a>
                                        <a href=station/sub1.php>광명역</a>
                                        <a href=station/sub1.php>안양역</a>
                                    </div>
                                </div>
                                <div class="line2 cpo_auto">
                                    <div class="line2_1"></div>
                                    <a href=station/sub1.php>의정부역</a>
                                    <a href=station/sub1.php>천량리역</a>
                                    <a href=station/sub1.php>동대문역</a>
                                    <a href=station/sub1.php>종로3가</a>
                                </div>
                                <div class="line3 cpo_auto">
                                    <div class="line3_1"></div>
                                    <a href=station/sub1.php>아산</a>
                                    <a href=station/sub1.php>병점역</a>
                                    <a href=station/sub1.php>수원역</a>
                                </div>
                            </div>
                            <ul class="line_listm">
                                <li><a href=station/sub1.php>의정부역</a></li>
                                <li><a href=station/sub1.php>천량리역</a></li>
                                <li><a href=station/sub1.php>동대문역</a></li>
                                <li><a href=station/sub1.php>종로3가역</a></li>
                                <li><a href=station/sub1.php>서울역</a></li>
                                <li><a href=station/sub1.php>노량진역</a></li>
                                <!-- 오른쪽 아래 -->
                                <li><a href=station/sub1.php>광명역</a></li>
                                <li><a href=station/sub1.php>안양역</a></li>
                                <li><a href=station/sub1.php>수원역</a></li>
                                <li><a href=station/sub1.php>병점역</a></li>
                                <li><a href=station/sub1.php>아산</a></li>
                                <!-- 왼쪽 -->
                                <li><a href=station/sub1.php>온수역</a></li>
                                <li><a href=station/sub1.php>부천역</a></li>
                                <li><a href=station/sub1.php>부평역</a></li>
                                <li><a href=station/sub1.php>제물포역</a></li>
                                <li><a href=station/sub1.php>인천역</a></li>
                            </ul>

                        </div>
                    </section>
                    <section id="cnt2">
                        <h3>2호선 : 11개의 추천역</h3>
                        <div class="route">
                            <div class="route_line">
                                <div class="line1">
                                    <div class="line1_1"></div>
                                </div>
                                <div class="line2">
                                <div class="line2_bottom cpo_auto">
                                    <a href=station/sub1.php>신림역</a>
                                    <a href=station/sub1.php>방배역</a>
                                    <a href=station/sub1.php>강남역</a>
                                    <a href=station/sub1.php>삼성역</a>
                                </div>
                                <div class="line2_right">
                                    <a href=station/sub1.php>건대입구</a>
                                    <a href=station/sub1.php>잠실역</a>
                                    <a href=station/sub1.php class="font_12">종합운동장</a>
                                </div>
                                <div class="line2_top cpo_auto">
                                    <a href=station/sub1.php>충정로</a>
                                    <a href=station/sub1.php>을지로</a>
                                    <a href=station/sub1.php>동대문</a>
                                    <a href=station/sub1.php>왕십리역</a>
                                </div>
                                <div class="line2_left">
                                    <a href=station/sub1.php>이대역</a>
                                    <a href=station/sub1.php>신촌역</a>
                                    <a href=station/sub1.php>홍대역</a>
                                    <a href=station/sub1.php>합청역</a>
                                </div>
                                </div>
                                <div class="line3">
                                    <div class="line3_1"></div>
                                </div>
                            </div>
                            <ul class="line_listm">
                                <li><a href=station/sub1.php>신림역</a></li>
                                <li><a href=station/sub1.php>방배역</a></li>
                                <li><a href=station/sub1.php>강남역</a></li>
                                <li><a href=station/sub1.php>삼성역</a></li>
                                <li><a href=station/sub1.php>잠실역</a></li>
                                <li><a href=station/sub1.php>건대입구</a></li>
                                <li><a href=station/sub1.php>왕십리역</a></li>
                                <li><a href=station/sub1.php>이대역</a></li>
                                <li><a href=station/sub1.php>신촌역</a></li>
                                <li><a href=station/sub1.php>홍대역</a></li>
                                <li><a href=station/sub1.php>합청역</a></li>
                            </ul>

                        </div>
                    </section>
                    <section id="cnt3">
                        <h3>분당선: 12개의 추천역</h3>
                        <div class="route">
                            <div class="route_line">
                                    <div class="line1">
                                        <a href=station/sub1.php class="po_auto">왕십리</a>
                                        <a href=station/sub1.php class="po_auto">서울숲</a>
                                        <a href=station/sub1.php class="po_auto">강남구청</a>
                                        <a href=station/sub1.php class="po_auto">선릉</a>
                                        <a href=station/sub1.php class="font_12 po_auto">대모산입구</a>
                                        <a href=station/sub1.php>수서</a>
                                        <a href=station/sub1.php>가천대</a>
                                    </div>
                                    <div class="line2">
                                        <a href=station/sub1.php >모란</a>
                                        <a href=station/sub1.php >이매</a>
                                        <a href=station/sub1.php class="po_auto">서현</a>
                                        <a href=station/sub1.php class="po_auto">정자</a>
                                        <a href=station/sub1.php class="po_auto">죽전</a>
                                    </div>
                            </div>
                            <ul class="line_listm">
                                <li><a href=station/sub1.php>왕십리</a></li>
                                <li><a href=station/sub1.php>서울숲</a></li>    
                                <li><a href=station/sub1.php>강남구청</a></li>
                                <li><a href=station/sub1.php>선릉</a></li>
                                <li><a href=station/sub1.php>대모산입구</a></li>
                                <li><a href=station/sub1.php>수서</a></li>
                                <li><a href=station/sub1.php>가천대</a></li>
                                <li><a href=station/sub1.php>모란</a></li>
                                <li><a href=station/sub1.php>이매</a></li>
                                <li><a href=station/sub1.php>서현</a></li>
                                <li><a href=station/sub1.php>정자</a></li>
                                <li><a href=station/sub1.php>죽전</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div class="main_2">
                    <h3 class="blind">역 검색 입력</h3>
                    <div class="such_box2">
                        <input type="text" title="역검색 입력창" value="찾고 싶은 역을 검색 해주세요" id="ch2">
                        <button type="button" class="txt_indent  such_btn">검색하기</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
</body>
</html>
