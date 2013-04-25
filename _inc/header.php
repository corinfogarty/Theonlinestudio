<?php
if(isset($_GET['id'])){
$sel_page = $_GET['id'];

if($sel_page == 2){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/what"); 
}
if($sel_page == 3){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/who"); 

}
if($sel_page == 4){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/who"); 

}
if($sel_page == 5){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/why"); 

}
if($sel_page == 6){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/contact"); 

}
if($sel_page == 6){
	header("HTTP/1.1 301 Moved Permanently"); 
	header("Location: http://www.theonlinestudio.co.uk/"); 

}


}
 
?>
<!DOCTYPE html>
<!--[if IE 8]>         <html class="ie8"> <![endif]-->
<!--[if gt IE 8]><!--> <html>         <!--<![endif]-->

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
	
	<meta name="description" CONTENT="The Online Studio provides expertise and end to end solutions to all your digital production requirements." /> 
    <meta name="keywords" CONTENT="Online Studio, Online Studios, The Online Studio, digital production agency, digital production company, outsourcing, decoupling, flash, HTML 5, CMS, .net, developers, php, facebook, apps, mobile, banners, facebook applications, mobile applications." /> 
	 <meta property="og:title" content="The Online Studio"/>
    <meta property="og:type" content="Company"/>
    <meta property="og:url" content="http://www.theonlinestudio.co.uk/"/>
    <meta property="og:image" content="http://www.theonlinestudio.co.uk/_img/site/fb.gif"/>
    <meta property="og:site_name" content="The Online Studio"/>
    <meta property="fb:admins" content="CorinFogarty"/>
    <meta property="og:description"
          content="The Online Studio provides expertise and end to end solutions to all your digital production requirements."/>

	<script src="/_js/modernizr.custom.87265.js"></script>
 	
	<link rel="stylesheet" type="text/css" href="/_css/reset.css">
    <link rel='stylesheet' type='text/css' href='/_css/desktop.css'/>  


	<link rel="stylesheet" type="text/css" href="/_css/jquery.fancybox.css"/>
	<link rel="icon" href="/_img/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/_img/site/custom_icon.png"/>	 

<body>


<div class="wrapper">
	<div id="content">
		<!-- header -->
		<div id="header">
			<a href="/"><h1>THE ONLINE STUDIO </h1></a>
			<div id="nav">
				<div id="highlight"></div>
				<ul>
				<li><a href="/what/" id="whatNav">What we do</a></li>
				<li><a href="/why/" id="whyNav">Why us?</a></li>
				<li><a href="/work/" id="workNav">Our work</a></li>
				<li><a href="/who/" id="whoNav">Who we are</a></li>
				<li><a href="/contact/" id="contactNav">Contact</a></li>
				</ul>
			</div>
	<div id="phone">Call +44 207 723 4703 </div>
		</div>
		<div id="minHeight">