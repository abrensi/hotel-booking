<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mail = $_POST['mail'];
$email = $_POST['email'];

// Формирование самого письма
  If (!empty($_POST['mail'])) 
  {
    $title = "Новая подписка на новости Best Tour Plan";
    $body = "
    <b>Пользователь с Еmail:</b> $mail<b> подписался на новостную рассылку Best Tour Plan</b>
    ";
  } 

  if (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['message']))
  {
    $title = "Новые обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Сообщение:</b> $message<br>
    ";
  } 

  if (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    $title = "Запрос на дополнительную информацию";
    $body = "
    <h2>Запрос на дополнительную информацию</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Почта:</b> $email<br>
    <b>Сообщение:</b> $message<br>
    ";
  }


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'hbooking333@gmail.com'; // Логин на почте
    $mail->Password   = 'UMpr48y384WqTP9'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('hbooking333@gmail.com', 'Hotel Booking'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('kalkhanovn@mail.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');