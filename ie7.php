<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
	<title>The Online Studio | 
	<?php 
		function doPageNames($url){
			switch ($url){
				case "why": 
					echo 'Why us?'; 
				break;
				case "what": 
					echo 'What we do'; 
				break;
				case "who": 
					echo 'Who we are'; 
				break;
				case "work": 
					echo 'Our work'; 
				break;
				case "contact": 
					echo 'Get in touch'; 
				break;
				case "blog": 
					echo 'The blog'; 
				break;
				default;
				echo "Digital Production Company";

			}
		}
		doPageNames(basename($_SERVER['PHP_SELF'], ".php"));

		
	?></title>
	
	<meta HTTP-EQUIV="description" CONTENT="The Online Studio provides expertise and end to end solutions to all your digital production requirements.."> 
    <meta HTTP-EQUIV="keywords" CONTENT="Online Studio, Online Studios, The Online Studio, digital production agency, digital production company, outsourcing, decoupling, flash, HTML 5, CMS, .net, developers, php, facebook, apps, mobile, banners, facebook applications, mobile applications."> 
 	
 	
	<link rel="stylesheet" type="text/css" href="/_css/reset.css">
	<link rel="stylesheet" type="text/css" href="/_css/desktop.css">
	<link rel="stylesheet" type="text/css" href="/_css/jquery.fancybox.css"/>
	<link rel="icon" href="/_img/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/_img/site/custom_icon.png"/>	 


<body>
<div class="wrapper">
	<div id="content">
		<!-- header -->
		<div id="header">
			<a href="/"><h1>THE ONLINE STUDIO </h1></a>
			
	<div id="phone">Call +44 207 723 4703</div>
		</div>
	
<div id="whoops"><h2>Whoops!</h2> Many of our site's features are not supported by older browsers such as Internet Explorer 7. <a href="https://www.google.com/intl/en/chrome/browser/">Please Switch to a later browser.</a><br/>

				<h4>Contact Us</h4>
				<p>	<a href="http://facebook.com/theonlinestudio" target="_blank"><img src="/_img/site/nav_facebook2.png" alt="Facebook"></a>
			<a href="https://twitter.com/theonlinestudio" target="_blank"><img src="/_img/site/nav_twitter2.png" alt="Twitter"></a>
			<a href="http://gplus.to/theonlinestudio" target="_blank"><img src="/_img/site/nav_google-plus2.png" alt="Google Plus"></a><br/>
			The Online Studio <br/>83 Crawford Street<br/>London  W1H 2HB<br/>020 7723 4703<br/>theonlinestudio.co.uk<br/><a href="mailto:hello@theonlinestudio.co.uk">hello@theonlinestudio.co.uk</a>
			<br/>		
		</p>
			</div>
			
</body>
</html>