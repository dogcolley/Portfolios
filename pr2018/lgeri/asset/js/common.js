$(document).ready(function (){
	var prevClass;
	var nowClass;

	//네비게이션 gnb 처리
	function gnb () {
		var $gnb = $("#gnb");
		var $btn_open = $gnb.find(".btn_open");		//a
		var $gnb_menu = $gnb.find(".gnb_menu");
		var $pbtn_close = $gnb.find(".pbtn_close");	//a
		var $mbtn_close = $gnb.find(".mbtn_close");//a
		var $btn_menu = $("#header .head_top .btn_menu"); //a
		
		//데스크탑 : gnb열기버튼 클릭 : .gnb_menu를 none에서 block -> animate() left:70px -> .gnb_list li를 투명도 1과 margin-top:0으로 animate()
		$btn_open.on("click",function () {
			$gnb_menu.css("display","block").stop().animate({left:70}, 200, function () {
				$(this).find(".gnb_list li").each(function (idx) {
					$(this).stop().delay(idx*50).animate({opacity:1, filter:"Alpha(opacity=100)", marginTop:0}, 300);
				});
			});

			//데스크탑 : gnb닫기버튼 클릭 : .gnb_menu를 animate() left:-160px -> display:none -> .gnb_list li를 투명도 0과 margin-top:-10으로 변경
			$pbtn_close.on("click", function () {
				$gnb_menu.stop().animate({left:-160}, 200, function () {
					$(this).css("display", "none").find(".gnb_list li").css({opacity:0, filter:"Alpha(opacity=0)", marginTop:-10});
				});
				
				return false;
			});

			return false;
		});

		//모바일, 태블릿 gnb 제어
		//M, T 열기 버튼 클릭 : #gnb=>slideDown() -> .gnb_list와 .linkbox li 가 투명도 1과 margin-top:0으로 animate()
		$btn_menu.on("click", function () {
			$gnb.stop().slideDown(function  () {
				$(this).attr("tabIndex",0).focus();
				$(this).on("blur",function () {
					$(this).removeAttr("tabIndex");
				});

				//.gnb_list 먼저 동작후
				$(this).find(".gnb_list li").each(function (idx) {
					$(this).stop().delay(idx*50).animate({opacity:1, filter:"Alpha(opacity=100)", marginTop:0}, 300);
				});

				//.linkbox li를 2개씩 동작시키기
				setTimeout(function () {
					$gnb.find(".linkbox li").each(function (idx) {
						idx=Math.floor(idx/2);
						$(this).stop().delay(idx*50).animate({opacity:1,filter:"Alpha(opacity=100)",marginTop:0},300);
					});	
				}, 550);	//0,50,100,150,200=>300(animate걸리는 시간)=>지연시간 50 추가
			});

			//M, T 닫기 버튼 클릭: #gnb slideUp()은 display:none -> #gnb  ul li:투명도과 margin-top:-10 
			$mbtn_close.on("click",function () {
				$gnb.stop().slideUp(function () {
					$(this).find("ul li").css({opacity:0, filter:"Alpha(opacity=0)", marginTop:-10});
				});
				return false;
			});

			return false;
		});

		//포커스 제어
		$gnb.find(".gnb_menu p a, .mbtn_close").on("blur", function () {
			setTimeout(function () {
				if (!$("#gnb a").is(":focus")) $mbtn_close.click();
			}, 10);
		});
	}
	gnb ();

	//디바이스별 해상도 체크 - 클래스명 지정
	function viewportChk () {
		var $body = $("body");
		var $gnb = $("#gnb");

		$(window).on("load resize", function () {
			prevClass = $body.attr("class");
			//console.log(prevClass); load되면 undefined가 찍힘
			var winWidth = $(this).width();

			//해상도별 body에 클래스명 추가하기
			if (winWidth<768) $body.removeClass().addClass("mobile");
			else if (winWidth<=1024) $body.removeClass().addClass("tablet");
			else $body.removeClass().addClass("pc");
			
			nowClass = $body.attr("class");
			//console.log(prevClass, nowClass);

			//디바이스의 변경 체크 : 스크립트로 추가한 스타일을 removeAttrr("style")로 제거해서 디바이스의 충돌이 일어나지 않게 제어한다
			if (prevClass != nowClass && prevClass != "undefined") {
				$gnb.removeAttr("style").find(".gnb_menu").removeAttr("style").find("ul li").removeAttr("style");
				//$("#header *").removeAttr("style");
			}

			//디바이스가 변경되어 데스크탑이 될때 자동으로 네비게이션 열렸다 닫기기
			//조건1) 인덱스만 가능할것
			//조건2) 디바이스가 변경되어 nowClass에 pc 가 있을 경우
			if ($("#wrap").hasClass("main") && (prevClass != nowClass && nowClass == "pc")) {
				setTimeout(function () {
					$("#gnb .btn_open").trigger("click");
				},500);

				//자동으로 닫기
				setTimeout(function () {
					$gnb.find(".pbtn_close").trigger("click");
				}, 3000);
			}
		});
	}
	viewportChk ();

	//모바일 top search
	function mSearch () {
		$(".head_top .m_search .open_search").on("click", function () {
			$(this).next().stop().show();

			$(this).next().children(".close_btn").on("click", function () {
				$(this).parent().hide();
			});
		});
	}
	mSearch ();

	//패밀리사이트
	function familySite () {
		var $family = $("#footer .family");
		$family.find(">a").on("click",function  () {
			$(this).next().stop().slideToggle();

			$family.find("a:first , a:last").on("blur",function  () {
				setTimeout(function  () {
					if (!$family.find("a").is(":focus")) $family.children("ul").stop().slideUp();
				}, 10);
			});
			return false;
		});
	}
	familySite();

	//글자 말줄임표 : index에서 사용됨 => prevClass 와 nowClass 변수 사용하기 위해 common.js 에서 선언
	function ellipsis () {
		var _linkDocTit = $("#content .shadow .link li a strong");
		//최초 작성글 배열에 저장
		var basicArr = new Array();
		_linkDocTit.each(function () {
			//배열명.push(삽입할 새 데이터); 배열객체의 마지막 인덱스에 새 데이터를 삽입
			basicArr.push($(this).text());
		});
		//console.log(basicArr);

		$(window).on("load resize", function () {
			_linkDocTit.each(function (idx) {
				var basicTxt = basicArr[idx]
				var num= basicTxt.length;			//글자수 세어오기
				var limitArr = [27, 30, 35];	//보여질 최대 글자수 제한
				var choice; //배열 인덱스 번호 0-모바일, 1-태블릿, 2-데스크탑
				//console.log(basicTxt, num);

				if (nowClass == "mobile") choice = 0
				else if (nowClass == "tablet") choice = 1
				else if (nowClass == "pc") choice = 2
				//console.log(limitArr[choice], prevClass,nowClass);

				//문자객체(내장객체)  substring(시작인덱스, 종료인덱스)
				if (prevClass !=nowClass && num >= limitArr[choice]) {
					var txt=basicTxt.substring(0,limitArr[choice]);
					console.log(limitArr[choice], txt);
					$(this).text(txt+"...");
				}
			});
		});
	}
	ellipsis ();
});