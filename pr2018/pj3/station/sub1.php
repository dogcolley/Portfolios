<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>신촌역</title>
    <meta name="viewport" content="width=device-width, maximum-scale=1.0 , minimum-scale=1.0 , user-scalable=no">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/sub.css">
    <script type="text/javascript" src="../js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/stastion.js"></script>
	<script type="text/javascript" src="https://maps.google.com/maps/api/js?v=3.exp&region=KR"></script>
    <script type="text/javascript">
		window.onload = function initMap() {
			var map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 37.5551245, lng:126.9374646},		//구글지도 주소표시줄에서 위도, 경도를 복사해서 넣어주
				zoom: 17	//수치가 클수록 확대화면
			});
		}
    </script>

</head>

<body id="station">
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
    <div id="maskWrap">
        <section id="content">
            <h2 class="blind">신촌역 소개</h2>
            <div id="location" aria-hidden="true">
                <h3 class="blind">인디케이터</h3>
                <span class="now_p"><span class="blind">현재 페이지</span><span id="nowNum">1</span></span>
                <span>/</span>
                <span class="total_p"><span class="blind">전체 페이지</span>5</span>
                <button type="button" id="indBtn">&lsaquo;<span class="blind">인디케이터 목록 열기</span></button>
                <div class="ind_menu">
                    <h4 class="blind">인디케이터 선택</h4>
                    <ul>
                        <li><button type="button">1</button></li>
                        <li><button type="button">2</button></li>
                        <li><button type="button">3</button></li>
                        <li><button type="button">4</button></li>
                        <li><button type="button">5</button></li>
                    </ul>
                    <button type="button" id="indCl">&rsaquo;<span class="blind">인디케이터 목록 닫기</span></button>
                </div>
            </div>
            <div id="pageMove" aria-hidden="true">
                <button type="button" id="prevBtn">이전페이지</button>
                <button type="button" id="nextBtn">다음페이지</button>
            </div>
            <article id="cnt1">
                <div class="area">
                    <div class="col1">
                        <h3>
                            <strong>신촌역</strong>
                            <span>Shinchon Station</span>
                            <span class="blind">역정보</span>
                        </h3>
                        <span>2호선 : 서울시 마포구 신천로터리</span>
                    </div>
                    <div class="col2">
                        <p><span>서울특별시의 부도심 가운데 하나인 신촌의 중심부인 신촌 로터리의 지하철역</span>연세로 차 없는거리부터 현대백화점,연세대,세브란스병원이 있고<br>주변 (홍대 이화여대) 등이주변에 있습니다.<span>다양한 편의 시설, 볼거리가 있고 많은 20대가 왕복하는 역으로 젊을 느끼실 수 있습니다.</span></p>
                        <a href="https://map.naver.com/local/siteview.nhn?code=11636653&_ts=1536814357509"><span>NAVER</span>운행정보 보기</a>
                        <ul id="QBtn">
                            <li class="list1"><button type="button"><span>먹거리</span></button></li>
                            <li class="list2"><button type="button"><span>볼거리</span></button></li>
                            <li class="list3"><button type="button"><span>이벤트</span></button></li>
                            <li class="list4"><button type="button"><span>역지도</span></button></li>
                        </ul>
                    </div>
                </div>
            </article>
            <article id="cnt2">
                <div class="col1">
                    <div class="area">
                        <div class="top_style">
                            <h3>주변 먹거리</h3>
                            <ul>
                                <li class="on"><button type="button">#술집</button></li>
                                <li><button type="button">#밥집&amp;고기집</button></li>
                                <li><button type="button">#양식</button></li>
                                <li><button type="button">#이자카야</button></li>
                                <li><button type="button">#카페&amp;디저트</button></li>
                            </ul>
                        </div>
                        <div class="bottom_style">
                            <div class="list1">
                                <h4 class="blind">술집</h4>
                                <ul>
                                    <li class="num1">
                                        <div class="bg"></div>
                                        <strong>술익는마을</strong>
                                        <p> 조용한하고 아늑한 술집입니다., 70,80분위기를 느낄수있습니다.</p>
                                        <span>운영시간 : 오후 3시 - 오전 5시 (연중무휴.)</span>
                                        <span>위치 : 서울시 서대문구 창천동 52-66</span>
                                        <span>문의번호 : 02-338-1190</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>해물파전</span><span>16,500원</span></li>
                                                <li><span>김치삼겹살</span><span>17,500원</span></li>
                                                <li><span>해물떡볶이</span><span>15,500원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num2">
                                        <div class="bg"></div>
                                        <strong>녹스</strong>
                                        <p>아늑하고 분위기좋은 칵테일 바입니다. 소개팅,데이트하기좋은 술집입니다.</p>
                                        <span>운영시간 : 오후 6시 ~ 오전 2시</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 52-144 2층</span>
                                        <span>문의번호 : 02-3144-4806</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>각종 칵테일</span><span>5,400원</span></li>
                                                <li><span>스트레이트</span><span>4,700원</span></li>
                                                <li><span>칵테일 안주</span><span>12,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num3">
                                        <div class="bg"></div>
                                        <strong>막걸리싸롱</strong>
                                        <p>이색적인 맛술집이입니다. 비오는날 특히 분위기가 좋으며 특별한 술들 만나보세요.</p>
                                        <span>운영시간 : 오후 4시 30분 - 오전 2시 (월요일휴무)</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 52-8</span>
                                        <span>문의번호 : 02-324-0998</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>딸바스막걸리</span><span>12,000원</span></li>
                                                <li><span>치즈김치전</span><span>16,000원</span></li>
                                                <li><span>삼겹김치전</span><span>16,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="list2">
                                <h4 class="blind">밥집&amp;고기집</h4>
                                <ul>
                                    <li class="num1">
                                        <div class="bg"></div>
                                        <strong>통큰갈비</strong>
                                        <p>티비에나온 저렴한 갈비집입니다. 회식 , 데이트 장소로 좋은 맛집입니다.</p>
                                        <span>매일 : 오후 4:30 ~ 오전 2:00</span>
                                        <span>위치: 서울특별시 서대문구 창천동 72-10</span>
                                        <span>문의번호: 02-3141-1397</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>갈비 무한리필</span><span>11,000원</span></li>
                                                <li><span>소금등갈비</span><span>10,000원</span></li>
                                                <li><span>항정살</span><span>8,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num2">
                                        <div class="bg"></div>
                                        <strong>바오밥 신촌점</strong>
                                        <p>김치찌개, 제육볶음 식사를 하기 좋은 바오밥 신촌점 입니다.</p>
                                        <span>운영시간 : 오전 11시 - 오후 10시</span>
                                        <span>위치 :서울특별시 서대문구 창천동 13-77</span>
                                        <span>문의번호 :</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>직화제육볶음</span><span>7,500원</span></li>
                                                <li><span>직화불고기</span><span>7,500원</span></li>
                                                <li><span>소갈비한판</span><span>14,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="list3">
                                <h4 class="blind">양식</h4>
                                <ul>
                                    <li class="num1">
                                        <div class="bg"></div>
                                        <strong>파르미 이탈리아노</strong>
                                        <p>분위기 좋은 이탈리아 음식점입니다. 소개팅,데이트,여자성들이 선호하는 곳이며 런치세트또한 매우 맛있고 저렴합니다.</p>
                                        <span>운영시간 : 오전 11시 30분 - 오후 10시 (주문마감 21:10)</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 31-36</span>
                                        <span>문의번호 : 02-365-1080</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>펜네고르곤졸라</span><span>13,500원</span></li>
                                                <li><span>리코타샐러드</span><span>11,500원</span></li>
                                                <li><span>까르네샐러드</span><span>17,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num2">
                                        <div class="bg"></div>
                                        <strong>버거펠라즈</strong>
                                        <p>미국스타일의 푸드플라이, 넓은실내 이국적이고 불맛이 느껴지는 숨은 맛집입니다.</p>
                                        <span>운영시간 : 오전 11시 30분 - 오후 10시 30분 (15~16시 휴식//오더컷 21:30)</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 5-42</span>
                                        <span>문의번호 : 02-365-0616</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>치즈버거</span><span>7,000원</span></li>
                                                <li><span>펠라즈 버거</span><span>9,000원</span></li>
                                                <li><span>바베큐치킨버거</span><span>9,500원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num3">
                                        <div class="bg"></div>
                                        <strong>라구식당</strong>
                                        <p>파스타와 라자냐 유럽식 음식을 먹고 싶다면 추천드리는 식당입니다. 런치,데이트 코스로 추천드립니다.</p>
                                        <span>운영시간 : 오전 11시 30분 - 오후 10시 (3~5시 브레이크타임</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 50-19</span>
                                        <span>문의번호 : 02-364-2224</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>라구파스타</span><span>13,000원</span></li>
                                                <li><span>라자냐</span><span>14,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="list4">
                                <h4 class="blind">일식</h4>
                                <ul>
                                    <li class="num1">
                                        <div class="bg"></div>
                                        <strong>돈부리모노</strong>
                                        <p>줄서서먹는 신촌의 일식 밥집입니다. 가성비좋고 다양한메뉴로 혼밥,런치하기 좋고 술안주로 재격입니다.</p>
                                        <span>운영시간 : 오전 11:30 ~ 오후 09:30</span>
                                        <span>위치: 서울특별시 서대문구 창천동 5-95</span>
                                        <span>문의번호: 02-392-8231</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>가츠동</span><span>7,000원</span></li>
                                                <li><span>에비동</span><span>7,500원</span></li>
                                                <li><span>유케동</span><span>9,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num2">
                                        <div class="bg"></div>
                                        <strong>야바이</strong>
                                        <p>일식형 철판 맛집이다.각종 티비에 나온 맛집으로 유쾌한 분위와 이색적인 분위기가 매력입니다.</p>
                                        <span>운영시간: 월~목,일: 오후 4:00 ~ 오후 11시 - 금,토 오후 4:00 ~ 오전 1:00</span>
                                        <span>위치: 서울특별시 서대문구 창천동 53-20</span>
                                        <span>문의번호: 070-8875-1024</span>
                                        <button type="button" >사진보기</button>
                                        <ul>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>돼지고기오코</span><span>8,000원</span></li>
                                                <li><span>해물오코</span><span>9,500원</span></li>
                                                <li><span>고기소바</span><span>8,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="list5">
                                <h4 class="blind">카페&amp;디저트</h4>
                                <ul>
                                    <li class="num1">
                                        <div class="bg"></div>
                                        <strong>고르드</strong>
                                        <p>아늑한 카페 아이와같이 오기 좋은 카페입니다. 건강빵,힐링푸드를 느껴보세요.</p>
                                        <span>운영시간 : 오전 8시 - 오후 10시 30분</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 31-15</span>
                                        <span>문의번호 : 02-365-9566</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>딸기프레지에</span><span>5,500원</span></li>
                                                <li><span>청포도타르트</span><span>7,500원</span></li>
                                                <li><span>청포도타르트</span><span>28,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num2">
                                        <div class="bg"></div>
                                        <strong>클로리스</strong>
                                        <p>유럽식의 고풍스러운 카페입니다. 각종 홍차의 질이 높으며 디저트또한 맛있답니다.</p>
                                        <span>운영시간 : 오후 1시 - 자정 12시</span>
                                        <span>위치 : 서울특별시 서대문구 창천동 13-35</span>
                                        <span>문의번호 : 02-392-7523</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>아쌈밀크티</span><span>7,000원</span></li>
                                                <li><span>레이디그레이</span><span>7,500원</span></li>
                                                <li><span>마르코폴로</span><span>8,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num3">
                                        <div class="bg"></div>
                                        <strong>수카라</strong>
                                        <p>친환경 재료로 만든 음식과 디저트를 파는 카페입니다. 채식주의자를 위한 다양한 메뉴가 있으며 식사또한 간단하게 할수있는 카페입니다. 칼로리가 낮은 다이어트 음식들이 일품입니다.</p>
                                        <span>운영시간 : 오전 11시 - 오후 11시 (food order 12:00~15:30 / 16:30~22:00)</span>
                                        <span>위치 : 서울시 마포구 서교동 327-9</span>
                                        <span>문의번호 : 02-334-5919</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>구운채소커리</span><span>12,000원</span></li>
                                                <li><span>천연효모빵</span><span>13,000원</span></li>
                                                <li><span>수제햄</span><span>14,000원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="num4">
                                        <div class="bg"></div>
                                        <strong>에이투지</strong>
                                        <p>모던한 분위기의 아늑한 카페입니다. 빈티지가 나는 느낌도 매우 매력적입니다. 메뉴들은 케이크와 센드위등 브런치에 어울리는 음식들이 많습니다.</p>
                                        <span>운영시간 : 오전 11:30 ~ 오후 12:00</span>
                                        <span>위치 : 서울 서대문구 창천동 13-42</span>
                                        <span>문의번호 : 02-313-7523</span>
                                        <button type="button" >사진보기</button>
                                        <ul class="poto_list" >
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                            <li><button type="button"></button></li>
                                        </ul>
                                        <div class="menu_box">
                                            <span>대표메뉴</span>
                                            <ul class="menu_list">
                                                <li><span>치즈케이크</span><span>4,500원</span></li>
                                                <li><span>햄치즈 샌드위치</span><span>8,000원</span></li>
                                                <li><span>치즈 샌드위치</span><span>8,500원</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="cnt3">
                <div class="col1">
                    <h3>주변 볼거리: 사진을 눌러주세요</h3>
                    <div class="box">
                        <div class="tab_box">
                            <ul class="tab_btn">
                                <li class="list1"><button type="button"><span>연세로</span></button></li>
                                <li class="list2"><button type="button"><span>신촌 플레이버스</span></button></li>
                                <li class="list3"><button type="button"><span>마포아트 센터</span></button></li>
                                <li class="list4"><button type="button"><span>소극장 산울림</span></button></li>
                                <li class="list5"><button type="button"><span>근현대디자인박물관</span></button></li>
                            </ul>
                        </div>
                        <button type="button" aria-hidden="true" id="tabNext"></button>
                        <button type="button" aria-hidden="true" id="tabPrev"></button>
                        <div class="tab_list">
                            <div id="modalBtn">
                                <button type="button">next</button>
                                <button type="button">prev</button>
                            </div>
                            <ul>
                                <li class="list1">
                                    <div class="modal">
                                        <div class="tab_bg"></div>
                                        <div class="tab_txt">
                                            <h4>연세로</h4>
                                            <p>신촌전철역에서 연세대학교까지 이어지는 연세로는 신촌 중심거리입니다.<br> 1999년 서울시가 '걷고 싶은 거리'로 지정한 이후 가로수 정비, 신촌거리 지도 부착등의 조성사업을 했답니다. 연세대학교 도로 맞은편에는 아름다운 펵화가 그려져있답니다.</p>
                                            <span>위치: 서울특별시 서대문구 연세로 일대 (창천동)</span>
                                            <span>문의: 문화체육과 02-3300-1003</span>
                                            <a href=""><span class="blind">연세로</span>대표사이트 바로가기</a>
                                            <button type="button">닫기</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list2">
                                    <div class="modal">
                                        <div class="tab_bg"></div>
                                        <div class="tab_txt">
                                            <h4>신촌 플레이버스</h4>
                                            <p>이야기를 실은 음악버스,신촌 플레이버스는 신촌 연세로 스타광장 내에 위차한 이색체험 버스입니다.<br>2층으로 이루어졌으며 버스에선 신촌 문화 체험과 음악감상 및 다양한 체험을 할 수 있습니다.<br>공연장, 디제이박스, 관광안내, 음악감상실을 갖춘 이색체험을 경험하고 싶은 분들에게 추천드립니다.</p>
                                            <span>위치: 서울특별시 서대문구 연세로5길 11(참천동)</span>
                                            <span>문의: 서대문구청 지역활성화과 02-3330-1809</span>
                                            <span>이용시기: 휴일을 제외한 전 기간 이용가능</span>
                                            <span>이용시간 11:00 ~ 21:00</span>
                                            <span>휴일: 매주 월요일</span>
                                            <a href=""><span class="blind">신촌 플레이버스</span>대표사이트 바로가기</a>
                                            <button type="button">닫기</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list3">
                                    <div class="modal">
                                        <div class="tab_bg"></div>
                                        <div class="tab_txt">
                                            <h4>마포아트 센터</h4>
                                            <p>2008년 개관한 마포아트센터는 홍대,센촌,서강대 등 대학가에 둘러싸인 새로운 복합 문화예술공간입니다.<br>특히, 마포아트센터에서 운영하고 있는'아트홀맥'은 훌륭하고 멋진 걸축물의 종합공연장으로 수려한 외관은 물론 공연장 내부도 다양한 장르의 공연을 편안하게 감상할 수있도록 하였답니다.</p>
                                            <span>위치: 서울특별시 마포구 대흥로20길 28(대흥동)</span>
                                            <span>문의/안내: 공연문의 02-3274-8600</span>
                                            <span>이용시간: 06:00~22:00</span>
                                            <span>휴일: 매월 마지막주 일요일</span>
                                            <a href=""><span class="blind">마포아트 센터</span>대표사이트 바로가기</a>
                                            <button type="button">닫기</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list4">
                                    <div class="modal">
                                        <div class="tab_bg"></div>
                                        <div class="tab_txt">
                                            <h4>소극장 산울림</h4>
                                            <p>보수 속의 진보정신으로, 좋은 연극을 열심히 만들어온 극단 산울림은 한국에서 유일하게 자체 전용극장을 소유한 극단입니다.<br>1969년 12월 노벨문학상을 수상한 사무엘 베케트의&lt;고도를 기다리며&gt; 한국초연으로 어렵고 난해한 연극으로만 알았던&lt;고도&gt;를 관객들에게 연극을 재미를 만끽할 수 있게 만들어 신극의 고정관렴을 깨고, <br>한국 연극사에 한 획을 그었던 이 공연을 계기로 탄생한 극단이 바로 산울림이랍니다.<br>신촌 여행을 준비 중이시라면 꼭 포함시켜야 할 신촌 여행 코스입니다.</p>
                                            <span>위치: 서울특별시 마포구 와우산로 157 (서교동)</span>
                                            <span>문의/안내:02-334-5915, 5925</span>
                                            <span>이용시간: 공연에 따라 다름</span>
                                            <span>휴일: 매주 월요일</span>
                                            <a href=""><span class="blind">소극장 산울림</span>대표사이트 바로가기</a>
                                            <button type="button">닫기</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list5">
                                    <div class="modal">
                                        <div class="tab_bg"></div>
                                        <div class="tab_txt">
                                            <h4>근현대디자인박물관</h4>
                                            <p>근현대디자인박물관은 국내 디자인 사료들을 1만 5천여 점 이상 소장하고 있는 우리나라 최초의 본격 디자인전문박물관입니다.<br>박암종 관장이 20여 년 동안 수집한 개화기 이후 2000년대 초까지의 한국디자인 관련 사료들 중 1,600여 점을 엄선하여 2개 층 7개 섹션으로 구분하여 전시하고 있답니다.<br>근현대디자인박물관에서는 신수자료를 수시로 교체전시하고,특별기획전을 통해 상설전시에서 볼 수 없는 좀더 다양한 디자인 유물을 감상할 수 있도록 하였습니다.</p>
                                            <span>위치:서울특별시 마포구 와우산로30길 36(창정동)</span>
                                            <span>문의/안내:070-7010-4346-7</span>
                                            <span>이용시간:수~일 10:00~18:00</span>
                                            <span>휴일:매주 월요일,화요일,신정,설/추석 연휴</span>
                                            <span>관람소요시간: 약 2~3시간 </span>
                                            <a href=""><span class="blind">근현대디자인박물관</span>대표사이트 바로가기</a>
                                            <button type="button">닫기</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <article id="cnt4">
                <div class="col1">
                    <div class="area">
                        <h3>이벤트 &amp; 가이드</h3>
                        <div class="event">
                            <ul>
                                <li class="list1">
                                    <strong>신촌맥주축제</strong>
                                    <p>아직 무더운 늦 여름, 도심 속에서 신촌만의 감성을 느끼며 수제맥주를 즐길 수 있는 축제이다.<br>수백여 종의 Craft beer와 EDM, 락 등 다양한 장르의 음악 공연, 맥주와 어울리는 맛있는 먹거리들, 이벤트와 대형 젠가 등 다양한 체험행사들에 누구나 참여해서 다 함께 즐길 수 있는 맥주 축제이다.</p>
                                    <em>아직 무더운 늦 여름, 도심 속에서 신촌만의 감성을 느끼며 수제맥주를 즐길 수 있는 축제이다.</em>
                                    <span>기간:2018.09.07(금)~2018.09.09(일)</span>
                                    <span>위치:서울특별시 서대문구 창천동 연세로</span>
                                    <span>주체:무언가, GMEG(㈜글로벌마이스전문가그룹)</span>
                                    <a href="http://korean.visitseoul.net/event-festival/3th-sichon-beer-festival-kr_/22997">사이트 바로가기</a>
                                </li>
                                <li class="list2">
                                    <strong>신촌물총축제</strong>
                                    <p>클럽과 시원한 물놀이 합친 분위기 신촌 물총 축제입니다.<br> 올해 6번째를 맞이하며 많은 행사와 볼거리로 사람들의 더위를 날려주고 있습니다.<br> 지인과 혹은 남과 썩여 더위를 날려보세요!</p>
                                    <em>클럽과 시원한 물놀이 합친 분위기 신촌 물총 축제입니다.</em>
                                    <span>기간:2018.07.7(토) - 8(일)</span>
                                    <span>위치:연세로</span>
                                    <span>주체:신촌을 점령한 안드로이드</span>
                                    <a href="http://watergunfestival.co.kr/main/main.html">사이트 바로가기</a>
                                </li>
                            </ul>
                            <a href="">이벤트 전체보기</a>
                        </div>
                    </div>
                </div>
            </article>
            <article id="cnt5">
                <div class="col1">
                    <div class="area">
                        <div class="txt">
                            <h3>MAP : 역지도</h3>
                            <span>2호선 : 서울시 마포구 신천로터리</span>
                            <strong>주변역</strong>
                            <ul>
                                <li><a href="">홍대입구역</a></li>
                                <li><a href="">신촌역:경의선</a></li>
                                <li><a href="">서강대역</a></li>
                                <li><a href="">이대역</a></li>
                                <li><a href="">합정역</a></li>
                            </ul>
                        </div>
                        <div id="map"></div>
                    </div>
                </div>
            </article>
        </section>
        <footer id="footer">
            <?php 
                echo file_get_contents("../include/footer.txt"); 
            ?>
        </footer>
    </div>
</body>

</html>
