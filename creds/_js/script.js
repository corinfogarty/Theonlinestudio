
$(function() {
	init();
});


var pages=[ 
	//INTRO PAGES //
	// Note - these pages correspond to the pages - comment out page to remove it from creds //
	"quotes", "b_multiSkilled", "b_flexible",  "b_onCall", "b_quality", "b_budget", "b_consistent",  
	//MENU //
	"us",
	//CASE STUDIES // 
	"workIntro",
		//BANNERS//
	"cs_b_betfair", "cs_b_bp", "cs_b_whiteLabel_02",  "cs_b_airNZ",  
		//EMAILS //
	"cs_e_nectar", 
		//SOCIAL
	"cs_s_duracell",	
		//MOBILE
	"cs_m_colgate",	
		//WEBSITES
	"cs_w_sky",	
		//E
	"about", "quotes"
	
]

	
function init(){
	
	pageAnimations('quotes');
	// set up the index to loop through the pages//
	var curPage = 0;
	// set up the var for determining where the menu finishes and work pages start //
	var work =0;
	var believe =0;
	
	getMenuNum();

	//LOAD IN ALL THE PAGES IN THE ARRAY IN THE ORDER THEY APPEAR
	for (i=0; i<pages.length; i++){
	if(i<=menuPos){
			$("#content").append($("<div class='"+pages[i]+"'>").load(pages[i]+".html"));
			intro = 1;
		}else{
			intro = 0;
		$("#content").append($("<div class='"+pages[i]+" work'>").load(pages[i]+".html"));
		}
	}
	// Next previous and menu buttons //
	
	function fadeContent(){
		$('.'+pages[curPage]+' h3').delay(0).fadeIn(500);
		$('.'+pages[curPage]+' p').delay(1000).fadeIn(500);
	

		$('.'+pages[curPage]+' .caseStudies div').hide();
		function caseCopy() {
			$('.'+pages[curPage]+' .caseStudies div:hidden:first').fadeIn(500, caseCopy);
			$('.'+pages[curPage]+' .about div:hidden:first').fadeIn(500, caseCopy);

		}
		caseCopy();

	
}
	function bgAnim(direction){
		if (direction =='in')	{	$('#page').animate({'background-position': '-5px 30px'}, 250, function(){believe = 1;})	 }
		if (direction =='out')	{	$('#page').animate({'background-position': '-900px -120px'}, 250, function(){believe = 0;})}
	}
	
	function animatePage(direction){
		if (direction == 'left'){
			$("#content").animate({left: '-=1024'}, 250, function(){})
			
		}
		if (direction == 'right'){
			$("#content").animate({left: '+=1024'}, 250, function(){})
			
		}
	}
	
	
	function pageNumbers(){
		console.log("Current page number: " + curPage + " Menu page number: " + menuPos );
	}
		
		function prevPage() {
	    if (curPage > -1) {
	        curPage--;
	        if (curPage < menuPos) {
	            $('#left').show();
	            if(believe==0){
	            bgAnim('in');
	            }
	            animatePage('right');
	            fadeContent()
	            console.log("1");
	        }
	        if (curPage >= menuPos) {
	            $('#left').show();
	            if(believe==1){
		            bgAnim('out');
		            }
	            animatePage('right');
	            fadeContent()
	            console.log("2");
	        }


	      
	        if (curPage == 0) {
	            bgAnim('out');
	            $('#left').hide();
	        }
	    }

	};


	
	function nextPage() {
	    if (curPage < pages.length) {
	        curPage++;
	        if (curPage < menuPos) {
	            pageNumbers();
	            $('#left').show();
	            animatePage('left');
	            if(believe==0){
	           		bgAnim('in');
	            }
	            fadeContent()
	            
	        } else {
	            pageNumbers();
	            $('#left').show();
	            animatePage('left');
	            if(believe==1){
		           bgAnim('out');
		        }
	        fadeContent()
	        }
	         if (curPage == pages.length-1) {
	            $('#right').hide();
	        }

	    }
	};	
	
	function menu() 	{ $("#content").animate({left: menuPos*-1024}, 750, function(){console.log(index)});};
	
	function goBackwards(){
				prevPage();
				logoAnim();
				pageAnimations(pages[curPage]) 
	}
	
	function goForwards(){
				nextPage();
				logoAnim();		
				pageAnimations(pages[curPage])
	}
	
	$('#left').click(function()  {goBackwards()});
	$('#right').click(function() {goForwards()});

	$("#page").swipe( {
		swipeRight:function() {goBackwards()},
		swipeLeft:function() {goForwards()},
			threshold:75
  		});
  		
  $(document).keydown(function(e){
    if (e.keyCode == 37) { 
       goBackwards();
       return false;
    }
    if (e.keyCode == 39) { 
       goForwards();
       return false;
    }
        
});

//Acertain where the us page is within the array and pass back a value so that it is always linked
	var menuPos;
	function getMenuNum() {
		var menuPosition=0;
		for (i=0;i<pages.length;i++) {
			if(pages[i]=="us") {
				menuPosition = i;
				break;
			}
		}
		menuPos = menuPosition;
	}

//update page to correct poision from url 

if(window.location.search!= ''){
	var URL = window.location.search;
	var urlPos= URL.replace(/\?/g,'');
}

var urlPos;

getURLNo(urlPos, 0);

	function getURLNo(urlPos, speed) {
		var urlPosition=0;
			for (i=0;i<pages.length;i++) {
				if(pages[i]==urlPos) {
					urlPosition = i;
					break;
			}
		}

	pageAnimations(urlPos);
	
	urlPos = urlPosition;
	index = urlPosition;

	$("#content").animate({marginLeft: urlPos*-1024}, speed, function(){	logoAnim();});

	}
	function logoAnim(){
		if(index <= menuPos){
			$('h1').animate({
								"position": "absolute",
								"bottom": "10px",
								"right": "10px",
								"width": "251px", 
								"height": "50px",
								"background": "url(\/_img\/logo.png) no-repeat center center", 
								"text-indent": "1000%", 
								"white-space": "nowrap",	
								"overflow": "hidden", 
								})
		} 
		if(index > menuPos){
			$('h1').animate({
								"position": "absolute",
								"top": "10px",
								"right": "10px",
								"width": "251px", 
								"height": "50px",
								"background": "url(\/_img\/logo.png) no-repeat center center", 
								"text-indent": "1000%", 
								"white-space": "nowrap",	
								"overflow": "hidden", 

								}, 1000)
							}
		}
	
	
		
//PAGE SPECIFIC SCRIPTS//
	function pageAnimations(page){
	//alert(page);
		var thisVid = document.getElementById(page+'Vid');
	
		if(page=='quotes'){
			var i=1;

			function quotes(){
						i++;
								$('.quote').fadeOut(1000, function() {


					$('.quote').load('/_inc/quotes.html .q'+ i + '', function() {
						$('.quote').fadeIn(1000);
console.log(i);
						if(i>5){
							i=0;
						}
					})
				})     
			}
			setInterval(quotes, 8000);
		
		}

		if(page=='us'){
			$('.why p').hide();
			$('.why p').delay(1000).fadeIn();
			//$('#page').delay(400).animate({'background-position': '-5px 30px'}, 5000, function(){console.log('in')})
			
		}

		if(page=='menu'){
		var linkName;
			$('#navigaion li').click(function() {
				linkName =($(this).attr('id')); getURLNo(linkName, 500); 
			})
		}
	}		  
	function blockMove() {
      event.preventDefault() ;
}

	ontouchmove = function (){blockMove()
}
}