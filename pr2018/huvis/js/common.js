$(document).ready(function (){
	//네비게이션
	function navOn () {
		var $gnb=$("#gnb > ul");
		var $gDep2Ul=$gnb.find("li div");	//gnb : depth2 div

		var active=$("body").attr("id").split("_");
		var dep1=active[1]-1;
		var dep2=active[2]-1;
		//console.log(active, dep1, dep2);  //["nav", "1", "4"] 0 3 0

		//1) depth2 ul  모두 숨기고 시작
		$gDep2Ul.hide();

		////////////////////gnb
		//2)depth1 ul에 마우스 진입과 나가기
		$gnb.hover(
			function  () {	//moseenter
				$gDep2Ul.stop().slideDown();
			},
			function  () {	//mouseleave
				$gDep2Ul.stop().slideUp(function  () {
					gnbReturn ()
				});		//초기화면 활성화 필요
			}
		);

		//3)depth1 li에 마우스, 포커스 진입
		$gnb.children().on("mouseenter focusin",function  () {
			$gDep2Ul.stop().slideDown();	//포커스제어 필요
			$(this).addClass("on").siblings().removeClass("on");
		});

		//4)초기화면 설정 : 문서로딩시 현재 서브페이지 활성화를 위해
		if (dep1>=0) gnbReturn ();

		function gnbReturn () {
			//열려진 컨텐츠 초기화, li.on 제거
			$gDep2Ul.stop().slideUp();
			$gnb.find(">li.on").removeClass("on");

			//현재페이지 활성화:depth1 li.on추가
			if (dep1>=0) $gnb.children().eq(dep1).addClass("on");
			if (dep2>=0) $gnb.children().eq(dep1).find("ul li").eq(dep2).addClass("on");
		}

		//5)첫번째와 마지막 a 에서 포커스가 떠나기
		$gnb.find("a:first, a:last").on("blur",function  () {
			setTimeout(function  () {
				if (!$gnb.find("a").is(":focus")) gnbReturn ();
			},10);
		});
	}
	navOn ();

	//언어 선택 focus
	function lang () {
		var $lang=$(".lang");
		$lang.hover(
			function  () {	//mouseenter
				$(this).stop().animate({height:78}, "fast");
			},
			function  () {	//mouseleave
				$(this).stop().animate({height:26}, "fast");
			}
		);

		$lang.find("a:first, a:last").on({
			focus : function  () {
				$(this).closest("ul").stop().animate({height:78}, "fast");
			}, 
			blur : function  () {
				setTimeout(function  () {
					if (!$lang.find("a").is(":focus")) $lang.stop().animate({height:26}, "fast");
				},10);
			}
		});
	}
	lang ();

	//snb 메뉴 슬라이딩
	function onePage () {
		var $menu=$("#snb ul li");
		var $cnt=$("#content article");
		var headHei=$("#header").outerHeight()+100;	
		//상단으로 100만큼 추가 여백제공, 만약 $cnt 상단에 header가 fixed 속성으로 고정되어 있지 않다면 불필요
		//console.log(headHei);

		//click
		$menu.children().on("click",function  () {
			//class 제어
			$(this).parent().addClass("on").siblings().removeClass("on");
			//animate
			var tg=$(this).attr("href");
			var posY=$(tg).offset().top-headHei;
			console.log(tg, posY);

			$(window).off("scroll");
			$("html, body").animate({scrollTop:posY}, 400, function  () {
				$(window).on("scroll", scrollMove);
			});
			
			return false;
		});

		//scroll
		$(window).on("scroll", scrollMove);

		function scrollMove () {
			var scrollY=$(window).scrollTop();
			//console.log(scrollY);

			$cnt.each(function  (idx) {
				if (scrollY>=$(this).offset().top-headHei) $menu.eq(idx).addClass("on").siblings().removeClass("on");
				else if (scrollY == $(document).height()-$(window).height()) $menu.eq(-1).addClass("on").siblings().removeClass("on");
			});
		}
	}
	onePage ();

	//slider
	function slider () {
		var $visual=$(".slider .visual > li");
		var total=$visual.length;		//슬라이더의 총 개수 2
		var nowNum=0;	//현재 보여지는 슬라이더의 인덱스 번호 0을 대입
		var nextNum;		//클릭한 인덱스번호, 다음에 보여질 인덱스 번호
		//console.log(total);

		//이전, 다음 버튼을 클릭하는 경우
		$(".slider .prev_next a").on("click",function  () {
			var num=$(this).index();
			console.log(num);

			//조건식? 참일경우 실행문(이전) : 거짓일경우 실행문(다음);
			num==0? nextNum=nowNum-1 : nextNum=nowNum+1;
			//현재 사용가능한 인덱스 번호는 0 ,1
			if (nextNum==-1) nextNum=total-1;
			else if (nextNum==total) nextNum=0;

			//$visual을 animate 시키기
			$visual.eq(nowNum).stop().fadeTo(400, 0);
			$visual.eq(nextNum).stop().fadeTo(400, 1);

			nowNum=nextNum;	//nowNum값을 0으로 고정시키지 말고 클릭한 인덱스 번호로 변경 시켜준다

			return false;
		});
	}
	slider ();

	//PRODUCTS :focus 활성화
	function mainProd () {
		var $list=$(".product_list > li");

		$list.hover(
			function  () {	//mouseenter
				$(this).addClass("on");
			},
			function  () {	//mouseleave
				$(this).removeClass("on");
			}
		);

		$list.find(".detail").on("focus",function  () {
			$(this).closest("li").addClass("on").siblings().removeClass("on");
		});
		$list.on("focusout",function  () {
			var tg=$(this);
			setTimeout(function  () {
				if (!tg.find("a").is(":focus")) {
					tg.removeClass("on");
				}
			})
		});
	}
	mainProd ();

	//탭브라우징과 동영상 보기
	function tabVideo () {
		$(".tab > ul > li > .tab_btn").on("click",function  () {
			$(this).closest(".tab").find("> ul > li").removeClass("on").children(".tab_btn").siblings().hide();

			$(this).siblings().show().parent().addClass("on");
		});

		var popupArr = new Array(3);
		popupArr[0] = "https://www.youtube-nocookie.com/embed/GXm9FPp5Vak?rel=0&amp;showinfo=0";
		popupArr[1] = "https://www.youtube.com/embed/Yzl5pLwSqwg?rel=0&showinfo=0";
		popupArr[2] = "https://www.youtube.com/embed/vj_dzmE_Qek?rel=0";

		$("#cnt4 .tab ul li .video a").on("click", function  () {
			var tg = $(this).closest("li").index();
			window.open(popupArr[tg], 'popup', 'left='+(screen.availWidth-853)/2+', top='+(screen.availHeight-480)/2+', width=853, height=480');
			return false;
		});
	}
	tabVideo ();

	//패밀리사이트
	function familysite () {
		var $family=$("#footer .family");
		var $btn=$family.find("a").first();		//depth1 a:familysite 텍스트가 담긴 링크
		var $go=$family.find("a").last();		//확인(새창열기 버튼)
		var tgHref;
		
		//1-1) $btn을 클릭해서 ul 태그 열어주기
		$btn.on("click",function  (e) {
			e.preventDefault();

			$(this).next().stop().slideDown();

			//1-2) ul 태그에서 마우스가 떠나면 닫아주기
			$(this).next().on("mouseleave",function  () {
				$(this).stop().slideUp();
			});

			//1-3) focus가 family 내부에 있지 않을 경우 닫아주기
			$family.find("a:first , a:last").on("blur",function  () {
				setTimeout(function  () {
					if (!$family.find("a").is(":focus")) $family.find(">ul").stop().slideUp();
				}, 1000);
			});

			//2) ul li a를 클릭하면 자신의 텍스트와 href를 변수에 담아 $btn에 글자를 강제로 바꾼다=> ul 태그 닫아주기
			$family.find(">ul>li>a").on("click",function  (e) {
				e.preventDefault();
				var tgTxt=$(this).text();
				tgHref=$(this).attr("href");
				//console.log(tgTxt, tgHref);

				$btn.text(tgTxt).focus().next().stop().slideUp();
			});
		});

		//3) 확인버튼 눌러 페이지 이동시키기
		$go.on("click",function  (e) {
			e.preventDefault();
			if ($btn.text()=="familysite") return false;

			//window.open("열려질 새창의 경로명","팝업창 이름","옵션");
			window.open(tgHref, "popup");
		});
	}
	familysite ();
});	
	