$(window).load(function () {
    reservation();
});

function reservation() {
    /*기본 현재 날짜를 받아오는 친구들*/
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var nalsu = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    /* 현재 시작 달과 일을 만들어주는 친구들 selected에 저장을 해주는 친구들*/
    var $calendarSelect = $('#calendar select');
    var $seletCSY = $('#CSY');
    var $seletCSM = $('#CSM');
    var setDate = new Date(year, month, 1);
    var firstDay = setDate.getDate();
    var yoil = setDate.getDay();
    var checkCounter = 0;
    var checkIn = false;
    var checkOut = false;
    var nextToggle = false;
    var RoomData = "";
    var RoomName = "";
    var RoomMoney = 0;
    var sleep = 0;
    /* select years option 만들어주기  */
    $seletCSY.find('option').eq(0).text(year).val(year).attr({
        selected: 'selected'
    });
    $seletCSY.find('option').eq(1).text(year + 1).val(year + 1);
    $seletCSM.find('option').eq(month).attr({
        selected: 'selected'
    });
    var NowYear = $seletCSY.find('option[selected=' + "selected" + ']').val();
    var NowMonth = $seletCSM.find('option[selected=' + "selected" + ']').val();

    /* 윤년 만들어주는 친구들 */
    if (year % 4 === 0 % year % 100 !== 0 || year % 400 === 0) nalsu[1] = 28;

    /* 이전달 디스플레이 논*/
    $seletCSM.find('option[selected=' + "selected" + ']').prevAll().hide();
    /* 날짜를 만드는 친구들 : 초기에 옵션태그의 셀렉트 속성의 값을 시작으로 잡아준다.*/
    NowYear = parseInt(NowYear);
    NowMonth = parseInt(NowMonth);

    /* 달력안의 태그를 만들어주는 function*/
    function makeCalendar(nowYear, nowMonth, firstday, firstyoil) {
        var $nowCalendar = $('#nowCalendar');
        $nowCalendar.find('caption').text(nowYear + "년" + nowMonth + "월");
        var week = 0;

        while (firstDay <= nalsu[nowMonth - 1]) {
            for (firstyoil; firstyoil < 7 && firstDay <= nalsu[nowMonth - 1]; firstyoil++) {
                $nowCalendar.find('tbody tr').eq(week).find('td').eq(firstyoil).append('<button type="button" class=c_num' + firstDay + '>' + firstDay + '</button>')
                firstDay++
            }
            firstyoil = 0;
            week++;
        }
        if (year == nowYear && nowMonth - 1 == month) {
            $nowCalendar.find('tbody tr td button').each(function () {
                var txt = $(this).text();
                if (parseInt(txt) == day) $(this).before('<strong>현재 날짜<strong>').parent().css({
                    position: "relative"
                })
                if (parseInt(txt) < day + 7) $(this).parent().append('<span>' + txt + '</span>').end().remove();

            });
        }
        if (!(checkIn == false)) {
            var ddcheckIn = parseInt(String(checkIn).slice(6, 8));
            var mmcheckIn = parseInt(String(checkIn).slice(4, 6));
            var yycheckIn = parseInt(String(checkIn).slice(0, 4));
            if (nowYear == yycheckIn && nowMonth == mmcheckIn) {
                $nowCalendar.find('tbody tr td button[class="c_num' + ddcheckIn + '"]').addClass('start');
            }
        }
        if (!(checkOut == false) && !(checkIn == false)) {
            var ddcheckOut = parseInt(String(checkOut).slice(6, 8));
            var mmcheckOut = parseInt(String(checkOut).slice(4, 6));
            var yycheckOut = parseInt(String(checkOut).slice(0, 4));
            var ddcheckIn = parseInt(String(checkIn).slice(6, 8));
            var mmcheckIn = parseInt(String(checkIn).slice(4, 6));
            var yycheckIn = parseInt(String(checkIn).slice(0, 4));

            var d1 = new Date(yycheckIn, mmcheckIn, ddcheckIn);
            var d2 = new Date(yycheckOut, mmcheckOut, ddcheckOut);
            var samDay = (d2 - d1) / 1000 / 60 / 60 / 24;

            if (nowYear == yycheckOut && nowMonth == mmcheckOut) $nowCalendar.find('tbody tr td button[class="c_num' + ddcheckOut + '"]').addClass('end');

            var a = $nowCalendar.find('tbody tr td button').hasClass('end');
            var b = $nowCalendar.find('tbody tr td button').hasClass('start');
            if (a && b) {
                var $$this = $('#nowCalendar tbody tr td button:contains("' + ddcheckOut + '")')
                var tdIndex = $$this.parent().index();
                var trIndex = $$this.parent().parent().index();
                var TtrIndex = $$this.parent().parent().index();
                console.log($$this.parent().index());
                for (var i = 0; i < samDay; i++) {
                    if (tdIndex > 0 && TtrIndex == trIndex) {
                        $$this.parents('tbody').children().eq(trIndex).children().eq(tdIndex).prev().children().addClass('on');
                        tdIndex--;
                    } else if (tdIndex >= 0 && !(TtrIndex == trIndex)) {
                        $$this.parents('tbody').children().eq(trIndex).children().eq(tdIndex).children().addClass('on');
                        tdIndex--;
                    } else {
                        trIndex--;
                        tdIndex = 6
                    }
                }
            }
            if (a && !b) {
                var $$this = $('#nowCalendar tbody tr td button').filter('.c_num' + ddcheckOut)
                console.log($$this)
                $$this.parent().prevAll().children().addClass('on');
                $$this.closest('tr').prevAll().find('button').addClass('on');
            }
            if (!a && b) {
                var $$this = $('#nowCalendar tbody tr td button:contains("' + ddcheckIn + '")')
                $$this.parent().nextAll().children().addClass('on');
                $$this.closest('tr').nextAll().find('button').addClass('on');
            }
        }
        /* 달력 날짜 예약을 누를시 이벤트 */
        $("#nowCalendar button").on('click', function () {
            var dd = parseInt($(this).text());
            var mm = NowMonth;
            var yy = NowYear;
            if (mm < 10) mm * 10;
            if (dd < 10) dd * 10;
            var sam = (yy * 10000) + (mm * 100) + dd;
            if (checkCounter == 2) {
                var z = confirm("날짜 설정이 끝났습니다. 다시 설정하시겠습니까?");
                if (z) {
                    checkIn = false;
                    checkOut = false;
                    $("#nowCalendar button").removeClass()
                    checkCounter = 0;
                }
            }
            if (checkCounter == 1) {
                var ddcheckIn = parseInt(String(checkIn).slice(6, 8));
                var mmcheckIn = parseInt(String(checkIn).slice(4, 6));
                var yycheckIn = parseInt(String(checkIn).slice(0, 4));
                var d1 = new Date(yy, mm, dd);
                var d2 = new Date(yycheckIn, mmcheckIn, ddcheckIn);
                var samDay = (d1 - d2) / 1000 / 60 / 60 / 24;
                sleep = samDay;
                if (samDay >= 1 && samDay < 16) {
                    $(this).addClass('end');
                    var tdIndex = $(this).parent().index();
                    var trIndex = $(this).parent().parent().index();
                    var TtrIndex = $(this).parent().parent().index();

                    for (var i = 0; i < samDay; i++) {
                        if (tdIndex > 0 && TtrIndex == trIndex) {
                            $(this).parents('tbody').children().eq(trIndex).children().eq(tdIndex).prev().children().addClass('on');
                            tdIndex--;
                        } else if (tdIndex >= 0 && !(TtrIndex == trIndex)) {
                            $(this).parents('tbody').children().eq(trIndex).children().eq(tdIndex).children().addClass('on');
                            tdIndex--;
                        } else {
                            trIndex--;
                            tdIndex = 6
                        }
                    }
                    checkOut = sam;
                    checkCounter++;
                } else {
                    alert('예약은 최소 1박 부터 최대 15박 까지 가능합니다. 장기예약은 02-3777-2100으로 문의 바랍니다.')
                }
            }
            if (checkCounter == 0) {
                $(this).addClass('start')
                checkIn = sam;
                checkCounter++;
            }

        });
    }
    /* 달력 reset function*/
    function removeCalendar() {
        $('#nowCalendar').find('tbody tr td').empty();
    }

    makeCalendar(NowYear, NowMonth, firstDay, yoil);

    /* select 이벤트 */
    $calendarSelect.on('change', function () {
        if ($(this).attr('id') == 'CSM') NowMonth = parseInt($(this).val());
        if ($(this).attr('id') == 'CSY') NowYear = parseInt($(this).val());

        setDate = new Date(NowYear, NowMonth - 1, 1)
        firstDay = setDate.getDate();
        yoil = setDate.getDay();

        if (NowYear == year) {
            $seletCSM.find('option[selected=' + "selected" + ']').prevAll().hide();
            if (NowMonth < month) {
                NowMonth = month + 1;
                $seletCSM.val(month + 1);
            };
        } else if (NowYear > year) {
            $seletCSM.find('option[selected=' + "selected" + ']').prevAll().show();
        }

        removeCalendar();
        makeCalendar(NowYear, NowMonth, firstDay, yoil);
    });
    /* next prev 클릭시 발생하는 이벤트 */
    $("#calendar > div > button").on('click', function () {
        if ($(this).hasClass('next') && NowMonth < 12) {
            NowMonth++;
            $seletCSM.val(NowMonth);
            $calendarSelect.trigger('change');
        } else if ($(this).hasClass('next') && NowYear == year && NowMonth == 12) {
            NowYear++;
            NowMonth = 1;
            $seletCSY.val(NowYear);
            $seletCSM.val(NowMonth);
            $calendarSelect.trigger('change');
        }
        if ($(this).hasClass('prev') && NowMonth > 1) {
            if (!(NowYear == year && NowMonth - 2 < month)) {
                NowMonth--;
                $seletCSM.val(NowMonth);
                $calendarSelect.trigger('change');
            }
        } else if ($(this).hasClass('prev') && NowYear > year && NowMonth == 1) {
            NowYear--;
            NowMonth = 12;
            $seletCSY.val(NowYear);
            $seletCSM.val(NowMonth);
            $calendarSelect.trigger('change');
        }
    })

    /* 객실 선택 이벤트 클릭시 발생하는 이벤트 */
    var $room = $('#room');
    $room.find('>ul>li>button').on('click', function () {
        $(this).parent().addClass('on').append('<div class="mask_room">예약 선택<span>예약당 하나의 객실만 예약가능합니다.<br> 단체예약은 상담연락 부탁드립니다.<span><div>').siblings().removeClass('on').find('.mask_room').remove();
        nextToggle = true;
        RoomData = $(this).prev().find('span').text();
        RoomName = $(this).siblings("h5").text();
        RoomMoney = (parseInt($(this).siblings("h5").children().text()));
    })
    $room.find('>ul>li>ul>li button').on('click', function () {
        $(this).next().next().show().find('li button:last').on("keydown", function (e) {
            if (shifton == 0 && e.keyCode == 9) $(this).closest('ul').trigger("mouseleave");
        }).closest('ul').find('button:first').on("keydown", function (e) {
            if (shifton > 0 && e.keyCode == 9) $(this).closest('ul').trigger("mouseleave");
        }).closest('ul').find('button').on('click', function () {
            var txt = $(this).text();
            $(this).closest('ul').hide().prev().text(txt);
        });
        $(this).parent().find('ul').on('mouseleave', function () {
            $(this).hide();
        });

    });

    /* 홈 & 부가서비스 선택 이벤트 */
    var $cnt2 = $('#cnt2')
    $cnt2.find('>div ul li .i_add').on("click", function () {
        var making = $(this).siblings().hasClass('i_remove');
        var zon = $(this).closest('ul').attr('id') == 'sv1M3' && $(this).parent().index() == 0;
        var result = "";
        result += '<button type=button class="i_num" data-num="1"><span class="blind">수량선택</span><span>1</span></button>';
        result += '<ul>';
        for (var i = 1; i < 7; i++) {
            result += '<li><button type=button>' + i + '</button></li>'
        }
        result += '</ul>';
        result += '<button type="button" class="i_remove">취소</button>';

        if (!making) $(this).text('수량').after(result).parents('li').addClass('on');
        if (making) {}
        $cnt2.find('div ul li .i_num').on('click', function () {
            $(this).siblings('ul').show();
        });
        $cnt2.find('div ul li ul').on('mouseleave', function () {
            $(this).hide();
        });
        $cnt2.find('div ul>li>ul button:last').on('keydown', function (e) {
            if (shifton == 0 && e.keyCode == 9) $(this).closest('ul').hide();
        });
        $cnt2.find('div ul>li>ul button:first').on('keydown', function (e) {
            if (shifton > 0 && e.keyCode == 9) $(this).closest('ul').hide();
        });
        $cnt2.find('div ul li ul li button').on('click', function () {
            $(this).closest('ul').siblings('.i_num').text($(this).text()).attr('data-num', $(this).text());
            $(this).closest('ul').trigger('mouseleave')
        });
    });
    $(document).on("click", ".i_remove", function () {
        $(this).parents('li').removeClass('on');
        $(this).siblings('.i_add').text('선택').nextAll().remove();

    });

    /* form 태그 정보 전달 */
    var uData = $('#uData') 
    
    /* 다음 단계를 누를시에 발생 되는 이벤트 */
    $('#content.reservation article > button').on('click', function () {
        if ($(this).parent().index() == 0) {
            if (!checkOut) {
                alert("객실 날짜를 예약하여주세요");
                $('#nowCalendar button:first').focus();
            } else if (!nextToggle) {
                console.log(nextToggle)
                alert("객실을 선택하여주세요");
                $room.find('button:first').focus();
            } else {
                var z = confirm("다음단계로 넘어갑니다.")
                if (z) {
                    uData.find('#checkIn').val(checkIn);
                    uData.find('#checkOut').val(checkOut).parent().css({
                        position: "relative"
                    }).append('<span id="roomTxt">(' + sleep + '박' + (sleep + 1) + '일' + ')</span>');
                    uData.find('#ch').val(RoomData).parent().css({
                        position: "relative"
                    }).append('<span id="roomTxt">(' + RoomName + ')</span>');
                    uData.find(".select_room div div div").append('<label for="Money1">룸 이용 요금</label><input type="text" id="Money1" name="Money1" readonly value="' + (sleep * RoomMoney) + '">')
                    $('#reserSnb').find('ul li').eq(1).addClass('on').siblings().removeClass('on')
                    $('#cnt1').fadeOut(function () {
                        $(this).next().fadeIn()
                    });
                }
            }
        }
        if ($(this).parent().index() == 1) {
            var z = confirm("다음단계로 넘어갑니다.");
            var allsame = sleep * RoomMoney;
            if (z) {
                var x1 = $cnt2.find('.service1 ul li');
                var x2 = $cnt2.find('.service2 ul li')
                x1.each(function () {
                    var toggle = 0;
                    if ($(this).hasClass('on') && toggle == 0) {
                        toggle++;
                        var id1 = $(this).parent().attr('id') + $(this).index()
                        var resulte = '<div>';
                        resulte += '<label for="' + id1 + '" class="label1">' + '상품:' + $(this).children('span').text() + '</label><input type="text" id="' + id1 + '" readonly value="' + $(this).data('money') + '" name="' + id1 + '" class="num1">'

                        resulte += '<label for="' + id1 + 'E' + '" class="label2">수량</label><input type="text" id="' + id1 + 'E' + '" readonly value="' + $(this).children('.i_num').data('num') + '" name="' + id1 + 'E' + '" class="num2">'
                        resulte += '</div>'
                        uData.find(".select_room>div>div>div").append(resulte);
                        allsame += $(this).data('money')*$(this).children('.i_num').data('num')
                        toggle = 0;
                    }
                })
                x2.each(function () {
                    var toggle = 0;
                    if ($(this).hasClass('on') && toggle == 0) {
                        toggle++;
                        $(this).removeClass('on');
                        var id1 = $(this).attr('class') + $(this).index()
                        var resulte = '<div>';
                        resulte += '<label for="' + id1 + '" class="label1">' + '상품:' + $(this).find('h5').text() + $(this).find('div>span').text() + '</label><input type="text" id="' + id1 + '" readonly value="' + $(this).find('span').data('money') + '" name="' + id1 + '" class="num1">'

                        resulte += '<label for="' + id1 + 'E' + '" class="label2">수량</label><input type="text" id="' + id1 + 'E' + '" readonly value="' + $(this).find('.i_num').data('num') + '" name="' + id1 + 'E' + '" class="num2">'
                        resulte += '</div>'
                        uData.find(".select_room>div>div>div").append(resulte);
                        allsame += $(this).find('span').data('money')*$(this).find('.i_num').data('num')
                        toggle = 0;
                    }
                });
                uData.find(".select_room>div>div>div").append('<label for="">총 금액</label><input type="text" readonly value="'+allsame+'" id="totalMoney" name="totalMoney">')
                $('#reserSnb').find('ul li').eq(2).addClass('on').siblings().removeClass('on')
                    $('#cnt2').fadeOut(function () {
                        $(this).next().fadeIn()
                    });
            }
        }
    })
    /* 다음 단계를 누를시에 발생 되는 이벤트 */
    $('#content.reservation #cnt3 form>button[type="button"]').on('click',function(){
         var z = confirm("처음부터 다시 예약하시겠습니까?")
         if(z){
             window.location.reload();
         }
    });
    $('#content.reservation #cnt3 form>button[type="submit"]').on('click',function(){
        var z = confirm("예약을 마치시겠습니까?")
        if(z){
            document.uData.submit();
        }
        return false;
    });
}
