		$(document).ready(function () {

			//스크롤 제어=============================================================================

			var $win = $(window);
			var winHei = $win.height();

			$win.resize(function () {
				winHei = $win.height();
				//$win.trigger("scroll");
			});

			function headClass() {
				var scrollT = $win.scrollTop();
				var $header = $("#header");
				if (scrollT > 0) $header.addClass("notop");
				else $header.removeClass("notop");
			}

			function fadeIn() {
				var tgHei; //outerHeight 현재 스코롤의 높이값
				var tgTop; //offset().top0
				var start;
				var end;

				$win.on("scroll", function () {
					var $fade = $(".fade");
					var $one_fade = $(".one_fade");
					var scrollT = $(this).scrollTop();
					var headHei = 100;
					var ftHei = $("#footer").outerHeight();
					var ftTop = $("#footer").offset().top;
					var $topLink = $("#topLink");
					var $btnAppDown = $("#btnAppDown");
					//console.log("scrollT:", scrollT, "tgHei:", tgHei, "tgTop", tgTop, "winHei", winHei)
					//console.log($(".fade"));
					$fade.each(function () {
						tgHei = $(this).outerHeight();
						tgTop = $(this).offset().top;
						//console.log("tgHei", tgHei, "tgTop", tgTop,"winHei",winHei,$("body").height() )
						//console.log("start", start, "end", end)
						start = tgTop + tgHei * 0.5 - winHei; //window 창의 높이 값을 받아와서 빼준다.
						end = tgTop + tgHei * 0.5 - headHei;; //header의 높이 값을 빼준값
						if (start < scrollT && end > scrollT) $(this).addClass("on")
						  else {
							if (!$(this).hasClass("issue")) $(this).removeClass("on");
							
						}
					});

					start = ftHei + ftTop - winHei - 200;
					if (start < scrollT) {
						$topLink.css("position", "absolute")
						$btnAppDown.css("position", "absolute")
					} else {
						$topLink.css("position", "fixed")
						$btnAppDown.css("position", "fixed")
					}
					headClass()
					//start = $one_fade.outerHeight();
					//end = $one_fade.offset().top;

				});
			}
			fadeIn();


			//BUSINESS================================================================================

			$win.on("load", function () {
				function issue() {
					var $img = $("#main_issue img");
					//console.log($img.length)
					for (var i = 0; i < $img.length; i++) {
						var liWidth = $img.parent().width();
						var imgWidth = $img.eq(i).width();
						var sam = (imgWidth - liWidth) / 2
						//console.log(liWidth, imgWidth)
						//console.log(sam)
						$img.eq(i).css({
							marginLeft: -sam
						})
					}
					//                $img.each(function(){
					//                var liWidth=$img.parent().width();
					//                var imgWidth=$img.eq($(this)).width();
					//                var sam=(imgWidth-liWidth)/2
					//                    console.log(liWidth,imgWidth)
					//                    console.log(sam,$(this).index())
					//                $(this).css({marginLeft:-sam})
					//                })
				}
				issue();
			})

			//familysite==============================================================================

			function familysite() {
				var $family = $("#footer .family")
				var $fs = $("#footer .family button")
				var $list = $("#footer .family ul")
				var $go = $("#footer .family>a")
				var $link = $("#footer .family ul li a")
				$family.find("ul").hide();

				$fs.on("click mousendter", function () {
					$(this).addClass("on").parent().find("ul").slideDown();
					$link.addClass("lock")
					$family.addClass("on")
					$fs.addClass('on')
					$family.on("mouseleave", function () {
						$list.stop().slideUp();
						$(this).removeClass("on")
						$fs.removeClass('on')
					})
					$link.on("focusout", function () {
						//if($(this).is(":focus"))
						$(this).removeClass("lock")
						var i = $link.hasClass("lock")
						if (!i) {
							$list.slideUp();
							$family.removeClass("on");
							$fs.removeClass('on')
						}
					})
				});

				$link.on("click", function () {
					$fs.text($(this).text())
					console.log($fs.text());
					$go.attr("href", $(this).attr("href"))
					$family.find("ul").stop().slideUp(500);
					return false;
				})
			}
			familysite();

			//go btn==================================================================================
			function go() {
				var $go = $("#footer .go");

				$go.on("click", function () {
					console.log($(".family button em").text());
					if ($(".family .fs em").text() == "Family site") {
						return false;
					}

				})
			}
			go();
			//click move btn==========================================================================

			function move() {
				var $move = $(".move");

				$move.on("click", function () {
					var link = $(this).attr("href");
					var linkscoll = $(link).offset().top;
					$("html , body").animate({
						scrollTop: linkscoll
					}, 500)
					return false;
				})
			}
			move();



		})
