	//Применем высоту для header как у размера окна браузера, но минимальная останется 640px 
	$(document).ready(function() {
		

	function wResize(){
		$("header").css("-min-height", $(window).height())
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	//Запуск stellar для паралакс эфекта фоновой картинки
	$.stellar({
		responsive: true //для обновления картинке при масштабировании
	});

	//подключаем карусель
	$(".carousel").owlCarousel({
		loop : true,
		responsive:{
        0 : {
            	items : 1,
        	    nav : true
        	}
    	},
    	navText : ""		//убирем стандартные надписи prev и next  
	});




	//Реализация для табов TabSort
	//Телефон top
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	//Телефон bottom
	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function() {
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	//header списки учащихся
	$(".tab_header .tab_item").not(":first").hide();
	$(".tab_header .wrapper .tab").click(function() {
	$(".tab_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	//адрес
	$(".contacts_top .tab_item").not(":first").hide();
	$(".contacts_top .tab").click(function() {
	$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".contacts_top .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});