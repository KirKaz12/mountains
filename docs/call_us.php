<?php 
	$phone = $_POST['phone_call_back'];
	$to = 'ks-elproekt@mail.ru';
	$subject = 'New callback request';
	$message = " 
	Новый запрос на обратный звонок. "."<br />
	Номер телефона: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>";
	$headers = "From: show.stepanov-itpark.ru\r\nContent-type: text/html; charset=UTF-8 \r\n";
	mail($to, $subject, $message, $headers);
	exit();
 ?>