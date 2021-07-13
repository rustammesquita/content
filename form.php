<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];
  
  $from = 'site@rustammesquita.com';
  $to = 'contato@rustammesquita.com';
  $subject = 'Site Message';
  $headers = "From: $from \r\n";
  $headers .= "Reply-To: $email \r\n";
  
  mail($to, $subject, $msg, $headers);
  header("Location: index.html");
?>