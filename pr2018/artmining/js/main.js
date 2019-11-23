$(document).ready(function () {
	//slide===================================================================================
	var saveDate = 0;

	function slide() {
		var $slidelist = $("#main .slide>li");
		var total = $slidelist.length;
		var togle = 1;
		//console.log($("#main div ul li button").index());

		$("#main div ul li button").on("click", function () {
			var num = $(this).parent().index();
			var offset = saveDate
			var $this = $(this);
			var nowNum = ($this.parent().index())
			
			if (togle == 1) {
				togle++;
				$("#stop").hide().prev().show();
				if ($slidelist.hasClass("on") && !$slidelist.eq(nowNum).hasClass("on")) {
					clearInterval(autoplay);
					var i = $("#main ul").find(".on")
					i.addClass("off");
					setTimeout(show, 2000);
				} else {
					show()
				}

				function show() {

					$slidelist.removeClass("off")
					$slidelist.eq(saveDate).removeClass("on");
					$slidelist.eq(nowNum).addClass("on");

					$this.parent().addClass("on").siblings().removeClass("on")
					saveDate = num
					setTimeout(function () {
						togle--;
					}, 2000)
				}
			}

		});

	}
	setTimeout(function () {
		$("#main .slide>li").eq(0).addClass("on");
		$("#main div ul li button").parent().eq(0).addClass("on")
	}, 10)

	slide();

	function auto() {
		console.log("자동실행 콘솔");

		var $slidelist = $("#main .slide>li");
		var total = $slidelist.length;

		var nowNum;
		if ($slidelist.hasClass("on")) {
			var i = $("#main ul").find(".on")
			i.addClass("off");
			nowNum = i.index() + 1
			if (nowNum == 3) {
				nowNum = 0
			}
			setTimeout(show, 2000);
		} else show();

		function show() {
			console.log(saveDate)
			$slidelist.removeClass("off");
			$slidelist.eq(saveDate).removeClass("on");
			$slidelist.eq(nowNum).addClass("on");
			$("#main div ul li button").parent().eq(nowNum).addClass("on").siblings().removeClass("on");
			saveDate = nowNum;
		}
	}

	var autoplay = setInterval(auto, 6000);
	//console.log(autoplay);
	$("#stop").on("click", function () {
		$(this).hide().prev().show();
		clearInterval(autoplay)
	});

	$("#play").on("click", function () {
		$(this).hide().next().show();
		auto();
		autoplay = setInterval(auto, 6000)
	});
})
