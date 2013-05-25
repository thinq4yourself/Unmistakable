<?php

/**
 * 
 * This is a class meant to help in playing with the API code.  If this package is placed in your httdocs, you can call as shown below...
 * http://localhost/apiwrapper/trunk/?apiKey=B191-RR27-Z8GF-CEVF&subdomain=integrationtest&domain=localhost&method=getUsers
 *
 * @author Timothy S Sabat!
 */
require_once('WufooApiCalls.php');

$examples = new WufooApiCalls($apiKey = 'GI98-C42E-CPKC-6GKB', $subdomain = 'redwoodagile', $domain = 'wufoo.com');
print_a($examples->$_GET['method']($_GET['GI98-C42E-CPKC-6GKB'])); 

function print_a($subject){
	echo str_replace("=>","&#8658;",str_replace("Array","<font color=\"red\"><b>Array</b></font>",nl2br(str_replace(" "," &nbsp; ",print_r($subject,true)))) . '<br />');
}

?>