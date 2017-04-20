<?php 
	$name = $_POST['parallax_name'];
	$phone = $_POST['parallax_phone'];
	$to = 'ks-elproekt@mail.ru';
	$subject = 'New order request';
	$message = " 
	Новый заказ от клиента по имени ".htmlspecialchars($name)."<br />
	Номер телефона: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>".'<br />';
	$headers = "From: show.stepanov-itpark.ru\r\nContent-type: text/html; charset=UTF-8 \r\n";
	mail($to, $subject, $message, $headers);
	exit();
 ?>