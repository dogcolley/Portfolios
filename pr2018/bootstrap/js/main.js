$(document).ready(function () {
    $("#gnb a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 89
            }, 400, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                //      window.location.hash = hash;
            });

        } // End if

    });
    $(window).on('scroll', function () {
        var $fade = $('.fadein');
        var scrollY = $(this).scrollTop();
        //console.log(scrollY);

        $fade.each(function () {
            if (scrollY > $(this).offset().top - 600) $(this).addClass('on');
        });
    });
    
    $('#portfolio .open_btn').on('click', function () {
        //$('#myModal').modal(); 하면 안됨
        var $tg = $($(this).attr('href'));
        //fadeIn되는 시간이 경과되므로 시간차를 주고 제어
        var timer = setTimeout(function () {
            $tg.find('button').focus();
        }, 500);

        $tg.find('[data-dismiss="modal"]').on('keydown', function (e) {
            if (e.keyCode == 9) {
                e.preventDefault();
                $tg.find('button').focus();
            }
        });

        //esc 키를 누르면 모달 닫기
        $(window).on('keydown', function (e) {
            if (e.keyCode == 27) $closeBtn.click();
        });

        $tg.find('[data-dismiss="modal"]').on('click', function () {
            clearTimeout(timer);
        });
    });
})
