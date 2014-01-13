<?php 

$url = 'https://zapier.com/hooks/catch/n/mgg0t/';
$email_array = array('email_to_add' => $_GET["name"]);

$ch = curl_init( $url );

curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, json_encode($email_array));
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );

?>