<?php 
	$email = $_POST['email'];

	if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "<p>SUCCESS: ".$email." is valid</p>";
	} else {
		echo "<p>ERROR: ".$email." is not valid!</p>";
	}
 ?>