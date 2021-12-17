$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false,
		isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
	var randomRange = function(n1, n2) {
		return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
	};

	let candidate_start;
	let candidate_end;
	let _10scenes_start;
	let said_start;
	let details_start;
	let declare_start;
	let cand_list_width = $(".candidates-list").width();
	// $(".a-candidate").width((cand_list_width-80)/4-0.1);
	if ($(window).width()>800) {
		$(".a-candidate-circle-wrap").width((cand_list_width-100)/5-0.1);
	} else {
		console.log((cand_list_width-100)/4-0.1);
		$(".cand-cir").width((cand_list_width-40)/4-0.1);
	}
	let info_navi_width = $(".info-navi-wrap").width();
	let info_navi_height= $(".info-navi-wrap").height();
	$(".each-info-navi").width((info_navi_width)/4-0.1);

	let candidate_length;
	let progress_bar_per;
	let progress_bar_width;
	let declareSummaryY = $(".declare-summary").offset().top + $(".declare-summary").outerHeight();

	// 내비게이션 offset 할당
	if ($(".a-candidate-info").offset() != undefined) {
		candidate_start = $(".a-candidate-info").offset().top;
		candidate_end = $(".a-candidate-info").offset().top + $(".a-candidate-info").height() + 100;
		candidate_length = candidate_end - candidate_start;
		_10scenes_start = $(".info-10scenes-wrap").offset().top;
		said_start = $(".info-said-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
		declare_start = $(".info-declare-wrap").offset().top;
		// console.log(declare_start)
		// rumors_start = $(".info-rumors-wrap").offset().top;
	} else {
		console.log("not in here")
	}
	
	// 화면 크기 바뀔 때마다 재계산
	$(window).resize(function() {
		var nowScroll_re = $(window).scrollTop();
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		info_navi_height= $(".info-navi-wrap").height();
		cand_list_width = $(".candidates-list").width();
		$(".info-navi-wrap").width(screenWidth);
		if ($(window).width()>800) {
			$(".a-candidate-circle-wrap").width((cand_list_width-100)/5-0.1);
		} else {
			console.log((cand_list_width-100)/4-0.1);
			$(".cand-cir").width((cand_list_width-40)/4-0.1);
		}
		$(".each-info-navi").width((screenWidth)/4-0.1);

		candidate_start = $(".a-candidate-info").offset().top;
		candidate_end = $(".a-candidate-info").offset().top + $(".a-candidate-info").height() + 100;
		candidate_length = candidate_end - candidate_start;
		progress_bar_per = (nowScroll_re-candidate_start) / candidate_length;
		progress_bar_width = screenWidth * progress_bar_per;
		$(".navi-progress-bar").width(progress_bar_width);

		_10scenes_start = $(".info-10scenes-wrap").offset().top;
		said_start = $(".info-said-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
		declare_start = $(".info-declare-wrap").offset().top;

		declareSummaryY = $(".declare-summary").offset().top + $(".declare-summary").outerHeight();
    });

	// 내비게이션 offset 스크롤시 재계산
	let cal_start = function(){
		_10scenes_start = $(".info-10scenes-wrap").offset().top;
		said_start = $(".info-said-wrap").offset().top;
		// rumors_start = $(".info-rumors-wrap").offset().top;
		declare_strat = $(".info-declare-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
	}
	
	$(".info-10scenes").click(function() {
		$(window).scrollTop(_10scenes_start-100);
	})
	$(".info-said").click(function() {
		$(window).scrollTop(said_start-100);
	})
	$(".info-details").click(function() {
		$(window).scrollTop(details_start-100);
	})
	$(".info-declare").click(function() {
		console.log("hi");
		$(window).scrollTop(declare_start-100);
	})

	if($(window).width()>800) {
		$(".main-summary img").animate({"left":"0", "opacity":"1"}, 1500, "easeInSine", function(){
			$(".a-candidate-main-name-wrap").fadeIn("slow");
		});
	} else {
		$(".main-summary img").animate({"opacity":"1"}, 1500, "easeInSine", function(){
			$(".a-candidate-main-name-wrap").fadeIn("slow");
		});
		$(".message-arrow").css("left", $(window).width()/2 -25);
		$(".each-message-box").css("padding", "0 " + ($(window).width() -300)/2 +"px");
	}
	
	$(".main-intro-lines").animate({"top": "50px", "left": "50px", "opacity":"1"}, 1500, "easeInSine");
	$(".sns-homepage img").hover(function(){
		$(".sns-homepage p").stop().fadeIn();
	}, function(){
		$(".sns-homepage p").stop().fadeOut();
	})
	$(".sns-youtube img").hover(function(){
		$(".sns-youtube p").stop().fadeIn();
	}, function(){
		$(".sns-youtube p").stop().fadeOut();
	})
	$(".sns-facebook img").hover(function(){
		$(".sns-facebook p").stop().fadeIn();
	}, function(){
		$(".sns-facebook p").stop().fadeOut();
	})

	$(".declare-more-btn").click(function() {
		if($('.declare-original').is(":visible")){
			$(".declare-original").slideUp('slow');
			$(".declare-more-btn p").html("전문보기");
			// console.log($(".declare-summary").offset().top + $(".declare-summary").outerHeight());
			$('html').animate({scrollTop : declareSummaryY - 50}, 500);
		} else {
			$(".declare-original").slideDown('slow');
			$(".declare-more-btn p").html("닫기");
		}

	})

	let messageWidth;
	let nowLeft;
	// 말말말 좌우 버튼
	$(".message-going-to-right").click(function(){
		$(".message-going-to-right").css("pointer-events", "none");
		$(".message-going-to-left").css("pointer-events", "none");
		if ($(window).width()>800) {
			messageWidth = 800;
		} else {
			messageWidth = $(window).width();
		}
   
		nowLeft = $(".message-box-wrap").css("left").split("px");
		if(parseInt(nowLeft[0]) < -(messageWidth+2)) {
			$(".message-going-to-right").css("pointer-events", "auto");
			$(".message-going-to-left").css("pointer-events", "auto");
		} else {
			let strLeft = parseInt(nowLeft[0]) - messageWidth;
			$(".message-box-wrap").stop().animate({"left": strLeft+"px"}, 700, "easeInSine", function() {
				$(".message-going-to-right").css("pointer-events", "auto");
				$(".message-going-to-left").css("pointer-events", "auto");
			})
		}
	})
	$(".message-going-to-left").click(function(){
		$(".message-going-to-right").css("pointer-events", "none");
		$(".message-going-to-left").css("pointer-events", "none");

		if ($(window).width()>800) {
			messageWidth = 800;
		} else {
			messageWidth = $(window).width();
		}
		nowLeft = $(".message-box-wrap").css("left").split("px");
		if(parseInt(nowLeft[0]) > -2) {
			$(".message-going-to-right").css("pointer-events", "auto");
			$(".message-going-to-left").css("pointer-events", "auto");
		} else {
			let strLeft = parseInt(nowLeft[0]) + messageWidth;
			$(".message-box-wrap").stop().animate({"left": strLeft+"px"}, 700, "easeInSine", function() {
				$(".message-going-to-right").css("pointer-events", "auto");
				$(".message-going-to-left").css("pointer-events", "auto");
			});
		}
	})

	// 카드 애니메이션
	$(".option").click(function(){
		$(".option").removeClass("active");
		$(".option").addClass("non-active");
		$(this).removeClass("non-active");
		$(this).addClass("active");

		$(".active .each-scene-img-detail").delay(500).animate({"opacity":"1"}, 500, "easeInSine");
		$(".active .each-scene-year").delay(500).animate({"opacity":"1"}, 500, "easeInSine");
		$(".active .each-scene-year p").delay(100).animate({"font-size":"24px"}, 500, "swing");
		$(".non-active .each-scene-img-detail").animate({"opacity":"0"}, 0, "easeInSine");
		$(".non-active .each-scene-year").animate({"opacity":"0.8"}, 300, "easeInSine");
		$(".non-active .each-scene-year p").animate({"font-size":"11px"}, 300, "easeInSine");
	 });
	
	$(".up-top-arrow").click(function() {
		$(window).scrollTop(0);
	})

	// 색 지정
	let lee_color = '#3599ff';
	let yun_color = '#d92b37';
	let ahn_color = '#e56b2e';
	let sim_color = '#fccd32';
	let whos_color = '#111';
	let img_name = '';
	let person_name = $('.main-person-name');

	if (person_name.html() === '이재명') {
		$(".a-candidate-main").removeClass('sim-main');
		$(".a-candidate-main").addClass('lee-main');
		whos_color = lee_color;
		img_name = 'img/lee-background.png';
	} else if (person_name.html() === '윤석열') {
		whos_color = yun_color;
		img_name = 'img/yun-background.png';
	} else if (person_name.html() === '안철수') {
		whos_color = ahn_color;
		img_name = 'img/ahn-background.png';
	} else if (person_name.html() === '심상정') {
		$(".a-candidate-main").removeClass('lee-main');
		$(".a-candidate-main").addClass('sim-main');
		whos_color = sim_color;
		img_name = 'img/sim-background.png';
	} else {
		console.log("can't find this person.");
	}
	// $(".main-party-name").css("color", whos_color);
	$(".navi-progress-bar").css("background-color", whos_color);
	$(".scene-title").css("color", whos_color);
	$(".right-message").css("border", "2px solid " + whos_color);
	$(".main-background-img").attr("src", img_name);
	$(".main-intro-lines-line").css("border-bottom", "1px solid " + whos_color);

	/******** 모바일 전용 조정 ********/
	if(isMobile==true){
		
	}
	/******** 모바일 전용 조정 ********/
	function init(){

	}

	

	$(".loading-page").fadeOut(700, function(){
		init();

	});

	
	var offsetCalculated = false;
	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();
		if (candidate_start && info_navi_height) {
			if (nowScroll >= (candidate_start -info_navi_height) && nowScroll <= (candidate_end - (info_navi_height*2))) {
				$(".info-navi-wrap").css("position", "fixed");
				$(".info-navi-wrap").css("top", "0");
				$(".interactive-header").css("display", "none");
				$(".navi-progress-bar-back").css("opacity", "80%");
			} else {
				$(".info-navi-wrap").css("position", "relative");
				$(".interactive-header").css("display", "inherit");
				$(".navi-progress-bar-back").css("opacity", "100%");
			}
			
			if (nowScroll >= candidate_start && nowScroll <= candidate_end) {
				progress_bar_per = (nowScroll-candidate_start) / candidate_length;
				progress_bar_width = screenWidth * progress_bar_per;
				$(".navi-progress-bar").width(progress_bar_width);
			} else {
				$(".navi-progress-bar").width(0);
			}
		}

		if(!offsetCalculated){ 
			cal_start();
			$(".info-10scenes-line").height($(".info-10scenes-wrap").height()-200);
			offsetCalculated = true;
		}

		$(".hideme").each( function(){

			var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.5;
			var bottom_of_window = nowScroll + $(window).height();
	  
			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){
				$(this).animate({'opacity':'1'},1000);
			}
	  
		});
	});

	


});

function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
