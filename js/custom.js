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

	let cand_list_width = $(".candidates-list").width();
	$(".a-candidate").width((cand_list_width-80)/4-0.1);
	$(".a-candidate-circle-wrap").width((cand_list_width-100)/5-0.1);
	let info_navi_width = $(".info-navi-wrap").width();
	let info_navi_height= $(".info-navi-wrap").height();
	$(".each-info-navi").width((info_navi_width)/4-0.1);
	
	// 화면 크기 바뀔 때마다 후보 선택 재계산
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		info_navi_width = $(".info-navi-wrap").width();
		info_navi_height= $(".info-navi-wrap").height();
		cand_list_width = $(".candidates-list").width();
		$(".a-candidate-circle-wrap").width((cand_list_width-100)/5-0.1);
		$(".each-info-navi").width((info_navi_width)/4-0.1);
    });

	let candidate_start;
	let candidate_end;
	let _10scenes_start;
	let said_start;
	let details_start;
	let declare_start;
	let each_info_margin = 150;

	// 내비게이션 offset 스크롤시 재계산
	let cal_start = function(){
		_10scenes_start = $(".info-10scenes-wrap").offset().top;
		said_start = $(".info-said-wrap").offset().top;
		// rumors_start = $(".info-rumors-wrap").offset().top;
		declare_strat = $(".info-declare-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
	}

	// 내비게이션 offset 할당
	if ($(".a-candidate-info").offset() != undefined) {
		candidate_start = $(".a-candidate-info").offset().top;
		candidate_end = $(".a-candidate-info").offset().top + $(".a-candidate-info").height() + 100;
		_10scenes_start = $(".info-10scenes-wrap").offset().top;
		said_start = $(".info-said-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
		declare_start = $(".info-declare-wrap").offset().top;
		// console.log(declare_start)
		// rumors_start = $(".info-rumors-wrap").offset().top;
	} else {
		console.log("not in here")
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

	
	let detail01_width = $(".detail-desc01").width()+40+45.2;
	let detail01_height = $(".detail-desc01").height()+20;
	$(".detail01").width(detail01_width);
	$(".detail01").height(detail01_height);
	let detail02_width = $(".detail-desc02").width()+40+45.2;
	let detail02_height = $(".detail-desc02").height()+20;
	$(".detail02").width(detail02_width);
	$(".detail02").height(detail02_height);
	let detail03_width = $(".detail-desc03").width()+40+45.2;
	let detail03_height = $(".detail-desc03").height()+20;
	$(".detail03").width(detail03_width);
	$(".detail03").height(detail03_height);

	$(".main-summary img").animate({"left":"0", "opacity":"1"}, 1500, "easeInSine", function(){
		$(".a-candidate-main-name-wrap").fadeIn("slow");
	});
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

		} else {
			$(".declare-original").slideDown('slow');
			$(".declare-more-btn p").html("닫기");
		}

	})

	// 말말말 좌우 버튼
	$(".message-going-to-right").click(function(){
		$(".message-going-to-right").css("pointer-events", "none");
		$(".message-going-to-left").css("pointer-events", "none");
   
		let nowLeft = $(".message-box-wrap").css("left").split("px");
		if(parseInt(nowLeft[0]) < -802) {
			$(".message-going-to-right").css("pointer-events", "auto");
			$(".message-going-to-left").css("pointer-events", "auto");
		} else {
			let strLeft = parseInt(nowLeft[0]) - 800;
			$(".message-box-wrap").stop().animate({"left": strLeft+"px"}, 700, "easeInSine", function() {
				$(".message-going-to-right").css("pointer-events", "auto");
				$(".message-going-to-left").css("pointer-events", "auto");
			})
		}
	})
	$(".message-going-to-left").click(function(){
		$(".message-going-to-right").css("pointer-events", "none");
		$(".message-going-to-left").css("pointer-events", "none");
		let nowLeft = $(".message-box-wrap").css("left").split("px");
		if(parseInt(nowLeft[0]) > -2) {
			$(".message-going-to-right").css("pointer-events", "auto");
			$(".message-going-to-left").css("pointer-events", "auto");
		} else {
			let strLeft = parseInt(nowLeft[0]) + 800;
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

	$(".arrow01").click(function() {
		$(".rumor01").css("background", "#393939");
		$(".rumor-wrap01").fadeOut();
		$(".rumor-back-wrap01").fadeIn();
	})

	$(".back-arrow01").click(function() {
		$(".rumor01").css("background", "#ededed");
		$(".rumor-wrap01").fadeIn();
		$(".rumor-back-wrap01").fadeOut();
	})

	$(".arrow02").click(function() {
		$(".rumor02").css("background", "#393939");
		$(".rumor-wrap02").fadeOut();
		$(".rumor-back-wrap02").fadeIn();
	})

	$(".back-arrow02").click(function() {
		$(".rumor02").css("background", "#ededed");
		$(".rumor-wrap02").fadeIn();
		$(".rumor-back-wrap02").fadeOut();
	})

	
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
		whos_color = lee_color;
		img_name = 'img/lee-background.png';
	} else if (person_name.html() === '윤석열') {
		whos_color = yun_color;
		img_name = 'img/yun-background.png';
	} else if (person_name.html() === '안철수') {
		whos_color = ahn_color;
		img_name = 'img/ahn-background.png';
	} else if (person_name.html() === '심상정') {
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

	// 책 모양 구현
	// console.log(500 - $(".scene01 .each-scene-img-detail").outerHeight());
	// console.log(500 - $(".scene02 .each-scene-img-detail").outerHeight());
	// console.log(500 - $(".scene09 .each-scene-img-detail").outerHeight());
	// if (person_name.html() === '이재명') {
	// 	$(".scene02").css("top", "50px");
	// 	$(".scene02 .each-scene-wrap").css("height", "450px");

	// 	$(".scene06").css("top", "-50px");
	// 	$(".scene06 .each-scene-wrap").css("height", "550px");
	// 	$(".scene08").css("top", "-50px");
	// 	$(".scene08 .each-scene-wrap").css("height", "550px");

	// 	$(".scene09").css("top", "-100px");
	// 	$(".scene09 .each-scene-wrap").css("height", "600px");
	// }
	

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
				let candidate_length = candidate_end - candidate_start;
				let progress_bar_per = (nowScroll-candidate_start) / candidate_length;
				let progress_bar_width = info_navi_width * progress_bar_per;
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
