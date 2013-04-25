<?
$name = $_GET['name'] ;
$email = $_GET['email'] ;
$message = $_GET['message'] ;
mail( "corinfogarty@theonlinestudio.co.uk", "New message from MannWhite website", $message, "From: $email" );
?>