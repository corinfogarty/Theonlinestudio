<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/header.php') ?>
	<div id="page">
		<div id="inner">		
			<div id="contact">
		<!-- intro -->
			<div id="intro">
			<h2>To get in touch, please use the form below or email us at hello@theonlinestudio.co.uk </h2>
			<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/fb.php') ?>		</div>
			<!-- slider -->
			<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/slideshow.php') ?>	
    	<!--  2 cols -->
			<div id="twoCol">
				<div>
					<div id="contactForm">
					<h3>Send us a message </h3>
					
					
					<form id="contactUs" name="form_name" action="/formSubmit.php" method="post">
						<?php if(isset($_GET['submit'])){
						$submit = $_GET['submit'];
						
						if($submit == 'true'){
							echo('<p class="formMessage">Thanks for your message! <br/> Someone will be in touch shortly to respond to your query!</p>');
						}
						if($submit == 'fail'){
						?>
							<p class="formMessage">Hmm, somethings missing - have another crack eh?</p>
								<p><label for="name">Name: </label><input type="text" name="name" id="name" /></p>
						<p><label for="email">Email: </label><input type="text" name="email" id="email" /></p>
						<p><label for="textarea">Message: </label><textarea name="comments" id="comments" rows="4" cols="30" style="height:105px;"></textarea></p>
						<p><input type="submit" name="submit" value="submit" id="button" /></p>					
							<?
						}}else {?>
						<p><label for="name">Name: </label><input type="text" name="name" id="name" /></p>
						<p><label for="email">Email: </label><input type="text" name="email" id="email" /></p>
						<p><label for="textarea">Message: </label><textarea name="comments" id="comments" rows="5" cols="30"></textarea></p>
						<p><input type="submit" name="submit" value="submit" id="button"  onclick="return validate();" /></p>					
						<?
						
						}
						?>
					</form>
				</div>

				<div id="map">
				    <div id="map_canvas"></div>
			
				     <div class="mapFoot">83-87 Crawford Street | London | W1H 2HB | 0207 723 4703</div>
			</div>
				</div>
			
	</div>
	</div>
	</div>
	</div>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/_inc/footer.php') ?>