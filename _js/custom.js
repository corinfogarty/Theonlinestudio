var time = 500;
var currUrl;

$('document').ready(function() {
	init()
});
 
function init(){	


$('#highlight').show();
	
	var History = window.History;
	
	$('#header a').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		href = $(this).attr("href");
		hrefNoSlash = href.replace(/\//g,'');
		History.pushState(null, null, href);
		loadContent(hrefNoSlash);
		currUrl = hrefNoSlash;

	});
	
		History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        hrefNoSlash2 = State.hash.replace(/\//g,'')
        loadContent(hrefNoSlash2);
        currUrl = hrefNoSlash2;
    });

	

	function writeTitle(url){
	//console.log (url);
		 switch (url){
		  	case "": 			document.title = 'The Online Studio | Welcome'; 					break;
		 	case "what": 		document.title = 'The Online Studio | What we do';	 				break;
		 	case "why": 		document.title = 'The Online Studio | Why us?';	 					break;
		 	case "who": 		document.title = 'The Online Studio | Who we are';	 				break;
		 	case "work": 		document.title = 'The Online Studio | Our work';	 				break;
		 	case "contact": 	document.title = 'The Online Studio | Get in touch';				break;	 
		 	case "clients": 	document.title = 'The Online Studio | Clients';		 				break;	 
		 }
	}
	function navSlider(whatPage){
		switch (whatPage){
			case "": 		$('#highlight').animate({'right' : '550px', 'width':'0px'},time, function(){$('#homeNav').addClass('active')}); 	break;
			case "what": 	$('#highlight').animate({'right' : '442px', 'width':'83px'},time, function(){$('#whatNav').addClass('active')});	break;
			case "why": 	$('#highlight').animate({'right' : '375px', 'width':'65px'},time, function(){$('#whyNav').addClass('active')});		break;
			case "work":	$('#highlight').animate({'right' : '300px', 'width':'72px'},time, function(){$('#workNav').addClass('active')});	break;
			case "who":  	$('#highlight').animate({'right' : '215px', 'width':'82px'},time, function(){$('#whoNav').addClass('active')});		break;
			case "contact":	$('#highlight').animate({'right' : '149px', 'width':'64px'},time, function(){$('#contactNav').addClass('active')}); break;
		}
	}
	
	CurrentPage = window.location.pathname.replace(/\//g,'')
	
	if( location.search.indexOf('submit=')>=0 == false){
	
	loadContent(CurrentPage);
	}else{
		inPage('contact');
	}
	
	function loadContent(url){

		if(url !='' && url != currUrl){
			removeActive();
			navSlider(url);
			$('#page').fadeOut('fast', function() {$('#page').load('/'+ url + ' #inner', function() {inPage(url);$('#page').fadeIn('slow'); writeTitle(url);})});
		}
		if(url ==''){
			$('#page').load('/'+url+' #inner', function() {inPage(url);});  writeTitle(url);
			$('.aslideshow').toggleClass('slideshow');
			removeActive();
			navSlider(url);
		}
	}
	
	function inPage(page){
	//alert("2 -" + page);
	
	
	$('.fancybox').fancybox();
	//$('.fancybox-close').click(function(){location = '/work/'});


	 $('.slideshow').cycle({
			 fx:	'fade',
			 sync:  1, 
			 pause:	1,
			 random: 1,
			numeric: true,
			timeout: 7000

    	})

    try{
        FB.XFBML.parse(); 
    }catch(ex){}

    	if (page=='contact'){
	  
   
 			$('#contactUs input').blur(function() {
					$(this).parent().removeClass('error');
				if ($(this).val().trim() == '') {
					$(this).parent().addClass('error');
				}
			});

		function validate() {
			var isValid = true;
			$('#contactUs input').each(function() {
				if ($(this).val().trim() == '') {
					$(this).parent().addClass('error');
					isValid = false;	
				}
			});
		return isValid;
		}  
    	makeMap();
 		}

 		$('#page a').not('#work a').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		href = $(this).attr("href");
		hrefNoSlash = href.replace(/\//g,'');
		loadContent(hrefNoSlash);
		History.pushState(null, null, href);
		currUrl = hrefNoSlash;

	});
   
	}
	
	function makeMap(){
		
        var mapOptions = {
         center: new google.maps.LatLng(51.51901, -0.16278),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
            var myLatLng = new google.maps.LatLng(51.51912, -0.16128);
            var beachMarker = new google.maps.Marker({
	        position: myLatLng,
	        map: map,
            icon: '/_img/site/us.png',
            shadow: '/_img/site/us-shadow.png',
            draggable:false,
            animation: google.maps.Animation.DROP
      });     
	}
	
	function removeActive(){
		$("#whatNav").removeClass("active");
		$("#whyNav").removeClass("active");
		$("#whoNav").removeClass("active");
		$("#workNav").removeClass("active");
		$("#contactNav").removeClass("active");
		$("#clientsNav").removeClass("active");
	}

	if(badIE==true){
		$(".wrapper").prepend("<div id='oldBrowser'>The browser you are using does not support all the features of this site. Please upgrade your browser for the best experience <div id='close'>[x]</div><div>");
		$("#oldBrowser").fadeIn(2000);
		$("#close").click(function(){$('#oldBrowser').fadeOut();})
	}

}



