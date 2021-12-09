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
	let rumors_start;
	let each_info_margin = 150;

	let cal_start = function(){
		said_start = $(".info-said-wrap").offset().top;
		rumors_start = $(".info-rumors-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
	}

	if ($(".a-candidate-info").offset() != undefined) {
		candidate_start = $(".a-candidate-info").offset().top;
		candidate_end = $(".a-candidate-info").offset().top + $(".a-candidate-info").height() + (each_info_margin*4);
		_10scenes_start = $(".info-10scenes-wrap").offset().top;
		said_start = $(".info-said-wrap").offset().top;
		details_start = $(".info-details-wrap").offset().top;
		rumors_start = $(".info-rumors-wrap").offset().top;
	} else {
		console.log("not in here")
	}
	$(".info-10scenes").click(function() {
		$(window).scrollTop(_10scenes_start-50);
	})
	$(".info-said").click(function() {
		$(window).scrollTop(said_start-100);
	})
	$(".info-details").click(function() {
		$(window).scrollTop(details_start-100);
	})
	$(".info-rumors").click(function() {
		$(window).scrollTop(rumors_start-100);
	})

	$(".info-10scenes-line").height($(".info-10scenes-wrap").height()-200);
	
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
			offsetCalculated = true;
		 }
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
