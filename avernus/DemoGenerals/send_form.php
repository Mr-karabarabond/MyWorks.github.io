<?php 
$send = $_POST;
if (isset($send['send_form'])) {

	mail("Mail","Subject",'

		Name: '.$send['name'].'
		email: '.$send['email'].'
		tel: '.$send['tel'].'
		message: '.$send['message'].'
		');

};

if ($send['fileName']) {
	Header("Location:".$send['fileName'].".php");
} else {
	Header("Location: index.php");
}
?>