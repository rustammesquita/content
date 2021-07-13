<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];
  $content = "User Name: $name.\nUser Email: $email.\nUser Message: $msg.\n";
  
  $from = 'contato@rustammesquita.com';
  $to = 'contato@rustammesquita.com';
  $subject = 'Site Message';
  $headers = "From: $from \r\n";
  $headers .= "Reply-To: $email \r\n";
  
  mail($to, $subject, $content, $headers);
?>