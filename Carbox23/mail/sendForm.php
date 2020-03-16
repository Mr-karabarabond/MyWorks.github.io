<?php

$recepient = "CarBox23@yandex.ru";
$siteName = "CarBox23";
$pagetitle = "Заявка с сайта \"$siteName\"";

if (isset($_POST["sendRequestForm"])) {
	$auto_mark = trim($_POST["mark"]);
	$auto_part = trim($_POST["part"]);
	$phone = $_POST["tel"];
	$message = "Марка: $auto_mark \nДеталь: $auto_part \nТелефон: $phone";

	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

	alert('Ваша заявка принята! Вам перезвонят в течении нескольких минут');
}

if (isset($_POST["sendDataForm"])) {
	$name = $_POST["name"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$textaria = $_POST["message"]
	$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nСообщение: $textaria";

	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

	alert('Спасибо за сообщение '.$name.'');
}

?>