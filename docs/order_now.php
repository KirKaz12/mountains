<?php 
	$name = $_POST['client_name'];
	$phone = $_POST['order_phone'];
	$destination = $_POST['destination'];
	$to = 'ks-elproekt@mail.ru';
	$subject = 'New order request';
	$message = " 
	Новый заказ от клиента по имени ".htmlspecialchars($name)."<br />
	Номер телефона: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>".'<br />'.
	"Пункт назначения: ".htmlspecialchars($destination);
	$headers = "From: show.stepanov-itpark.ru\r\nContent-type: text/html; charset=UTF-8 \r\n";
	mail($to, $subject, $message, $headers);
	exit();
 ?>