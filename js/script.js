document.addEventListener('DOMContentLoaded', function () { // запуск функции только после полной загрузки контента страницы
//=============Кнопка пуска видео================
    var overlay = document.querySelector('.header__overlay'); //блок с кнопочкой
    var vid = document.querySelector('.header__video'); // тег видео


    $('.header__overlay').click(function () {
        $('.header__video_text').css({display: 'none'});
    });


    if (overlay.addEventListener) {
        overlay.addEventListener("click", play, false)


    } else if (overlay.attachEvent) {
        overlay.attachEvent("onclick", play)
    }

    function play() {
        if (vid.paused) {
            vid.play();
            overlay.classList.add("o");
        } else {
            vid.pause();
            overlay.classList.remove("o");
        }
    }

    //=============счетчик ================

    $(window).scroll(function () {

        if ($('.counts').offset().top <= $(window).scrollTop() + 350) {

            a.start();
            b.start();
            c.start();
            d.start();
        }

    });

    var a = new CountUp("counter1", 0, 12000, 0, 3, {
        separator: ''
    });
    var b = new CountUp("counter2", 0, 60000, 0, 3, {
        separator: ''
    });
    var c = new CountUp("counter3", 0, 30000, 0, 3, {
        separator: ''
    });
    var d = new CountUp("counter4", 0, 40000, 0, 3,{
        separator: ''
    });





    //=============Расширяющиеся блоки ================


    $('.services__block').find(".services__top").on('click', function () {

        if ($(this).closest('.services__block').hasClass('some_1')) {

            $(this).closest('.services__block').removeClass('some_1');

            var heres = $(this).closest('.services__block').find(".services__content").height();// получение размера экрана в случае изменения размера окна


            $(this).closest('.services__block').css('height', heres); //замена высоты окна с "auto" на размер в пикселях


            $(this).closest('.services__block').animate({height: 50}, 300);

        } else {

            $(this).closest('.services__block').addClass('some_1');

            var he = $(this).closest('.services__block').find(".services__content").height(); //считываем размер блока с текстом и картинкой

            $(this).closest('.services__block').animate({height: he + 50}, 500); //увеличиваем родительский блок на размер дочернего
            //$(this).closest('.work__block').css('color', 'red');


        }
    });

    $(window).resize(function () { // отслеживание изменение экрана. для того чтобы текст не выходил за пределы блока

        if ($(".services__block").hasClass('some_1')) { // имеет ли класс ".work__block" класс 'some_1'
            //alert("have");
            $('.services__block').filter('.some_1').css('height', 'auto');
        }

    });
//=============Слайдер КЛиентов ================


    var areaHeight = 0;
    var topMargin = 0;
    addAreaHeight();
    addStyle();
    function addAreaHeight() {
        var comentFirst = $(".customers__block:nth-child(1)").height(); // ширина верхнего блока с коментарием 
        var comentSecond = $(".customers__block:nth-child(2)").height(); //  // ширина нижнего блока с коментарием 
        var twoComent = comentFirst + comentSecond;//общая сумма двух блоков с коментариями

        if (twoComent > 380) { //если два блока больше 380пх, то увеличить площадь слайдера
            areaHeight = twoComent + 20;
            $(".customers__area").css({"height": "" + areaHeight + "px"});
        }
        else if (twoComent < 380) {//else если меньше 380пх
            areaHeight = 390;
            $(".customers__area").css({"height": "" + areaHeight + "px"});
        }
    }

    $(window).resize(function () { // отслеживание изменение экрана. для того чтобы текст не выходил за пределы блока
        addAreaHeight();
        var heres = $(".customers__block:nth-child(2)").height(); // нахождение размера блока при изменении экрана
        topMargin = areaHeight - heres;
        addStyle();

    });

    function addStyle() {
        addAreaHeight();
        var col = $('.customers__area').find('.customers__block').length; //количество потомков
        var comentSecond = $(".customers__block:nth-child(2)").height(); // начальная ширина блока
        var topMargin = areaHeight - comentSecond; // вычисление значения топ
        $(".customers__block:nth-child(1)").css({"top": "0px"});
        $(".customers__block:nth-child(2)").css({"top": "" + topMargin + "px"});
        var top = 1600;
        for (var i = 3; i <= col; i++) {
            $(".customers__block:nth-child(" + i + ")").css("top", "" + top + "px");
            top = top + 200;
        }
    }


    document.querySelector(".customers__wrap_slider").addEventListener("click", function (e) {
        var parent = document.querySelector(".customers__area"),
            first = parent.querySelector(".customers__block"),
            last = parent.querySelector(".customers__block:last-child");
        if (e.target.classList.contains("customers__arrow-top")) {
            parent.appendChild(first);
            addStyle();
        }
        if (e.target.classList.contains("customers__arrow-bottom")) {
            parent.insertBefore(last, first);
            addStyle();
        }
    });


}, false);

