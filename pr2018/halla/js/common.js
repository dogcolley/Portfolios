$(document).ready(function (){
	//////////1)gnb
	function gnbOn () {
		var $gnb=$("#gnb > ul");

		$gnb.find("li ul").hide();	//뎁스2 ul 초기화면 숨기고 시작

		$gnb.find(">li>a").on("mouseenter focus",function  () {
			$gnb.find(">li.on").removeClass("on").children("ul").hide();	//초기화
			$(this).parent().addClass("on").children("ul").show();			//현재설정

			$(this).parents("#headerWeb").addClass("active").stop().animate({height:120});
		});

	}
	gnbOn ();

	/////////2)location : nav_3_1
	function snbOn () {
		var $snb=$("#location > ul");
		var navCurrent=$("body").attr("id").split("_"); 
		console.log(navCurrent);		//["nav", "4", "1"]
		var dep1=navCurrent[1]-1;	//3
		var dep2=navCurrent[2]-1;	//0
		console.log(dep1, dep2);

		$snb.find("li ul").hide();
			
		if (dep1==-1) {	//인덱스일 경우
			$snb.find(">li>a").on("click",function  () {
				$(this).next().toggle();
				return false;
			});
		}

		//.dep1>a 와 .dep2>a 의 페이지별로 적당한 텍스트를 변수에 저장
		var $snbDep1=$snb.find("li.dep1 ul li").eq(dep1);	//3
		var dep1Txt=$snbDep1.find(">a").text();
		var $snbDep2=$snb.find("li.dep2 ul li").eq(dep2);
		var dep2Txt=$snbDep2.find(">a").text();
		//console.log(dep1Txt+" : "+dep2Txt);

		$snbDep1.addClass("on").parent().prev().text(dep1Txt);
		$snbDep2.addClass("on").parent().prev().text(dep2Txt);

		$snb.find(">li.dep1>a, >li.dep2>a").on("click",function  () {
			if ($(this).parent().hasClass("on")) {	//열려진 링크를 클릭할 경우
				$(this).parent().removeClass("on").children("ul").hide();
			}else {	//닫겨진 링크를 클릭할 경우
				//초기화
				$snb.find(">li.on").removeClass("on").children("ul").hide();
				//재설정
				$(this).parent().addClass("on").children("ul").show();
			}

			$snb.find("a:first , a:last").on("blur",function  () {
				setTimeout(function  () {
					if (!$snb.find("a").is(":focus")) $snb.find(">li.on").removeClass("on").children("ul").hide();
				}, 10);
			});

			return false;
		});

	}
	snbOn ();

	/////////3) goTop
	$("#goTop").on("click",function  () {
		var locationPos=$("#location").offset().top;

		$("html, body").stop().animate({scrollTop:locationPos},function  () {
			//$("#location a:first").focus(); 첫번째 a인 홈버튼으로 바로 포커스이동

			/* http://naradesign.net/wp/2012/05/10/1786/
				tabindex=”0″
				키보드 초점을 받을 수 없는 div, span과 같은 요소도 초점을 받을 수 있도록 만들어 줍니다. 초점을 받되 초점을 받는 순서는 자연스러운 마크업 순서를 따릅니다.

				tabindex=”-1″
				키보드 초점을 받을 수 있는 요소도 초점을 받을 수 없도록 만들어 줍니다. 초점을 받을 수 없기 때문에 “-1” 이외의 다른 음의 정수 값은 사실상 의미가 없습니다.
			*/
			$("#location").attr("tabIndex",0).focus();
			// location 포커스가 떠날 경우 tabIndex 속성도 제거
			$("#location").on("blur", function () {
				$(this).removeAttr("tabIndex");
			});
		});
		return false;
	});

	////////4) familysite
	$(".family button").on("click",function  () {
		$(this).parent().toggleClass("on").children("dl").toggle();
	});
});






