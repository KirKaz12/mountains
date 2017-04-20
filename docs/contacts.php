<?php 
	$name = $_POST['footer_name'];
	$phone = $_POST['footer_phone'];
	$email = $_POST['footer_mail'];
	$to = 'ks-elproekt@mail.ru';
	$subject = 'New contacts sent!';
	$message = " 
	Новый пользователь по имени ".htmlspecialchars($name).' оставил свои контактные данные: '."<br />
	Номер телефона: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>"."<br />
	Адрес электронной почты: <a href='mailto:$email'>".htmlspecialchars($email)."</a>";
	$headers = "From: show.stepanov-itpark.ru\r\nContent-type: text/html; charset=UTF-8 \r\n";
	mail($to, $subject, $message, $headers);
	exit();
 ?>