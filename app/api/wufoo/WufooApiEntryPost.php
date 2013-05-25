<?php

/**
 * 
 * This is a class meant to help in playing with the API code.  If this package is placed in your httdocs, you can call as shown below...
 * http://localhost/apiwrapper/trunk/?apiKey=B191-RR27-Z8GF-CEVF&subdomain=integrationtest&domain=localhost&method=getUsers
 *
 * @author joel serino
 * @ Wufoo Form post: <form id="form5" name="form5" enctype="multipart/form-data" method="post" action="http://redwoodagile.wufoo.com/forms/contact-us-s7x2z7/">
 */
 
//error_reporting(E_ALL);


  function submit() {
        $ref = curl_init('https://redwoodagile.wufoo.com/api/v3/forms/contact-us-s7x2z7/entries.json'); 
        curl_setopt($ref, CURLOPT_HTTPHEADER, array('Content-type: multipart/form-data'));
        curl_setopt($ref, CURLOPT_POST, true);
        curl_setopt($ref, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ref, CURLOPT_POSTFIELDS, getPostParams());     
        curl_setopt($ref, CURLOPT_USERPWD, 'GI98-C42E-CPKC-6GKB:X');
        curl_setopt($ref, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        curl_setopt($ref, CURLOPT_SSL_VERIFYPEER, false);
        //http://bugs.php.net/bug.php?id=47030
        curl_setopt($ref, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ref, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ref, CURLOPT_USERAGENT, 'wufoo.com');
        echo htmlentities(curl_exec($ref));
    }

    function getPostParams() {
        $path = './deleteme.txt';
        return array(
  
            'Field17' => $_POST['Field17'],
            'Field18' => $_POST['Field18'],
            'Field4' => $_POST['Field4'],
            'Field6' => $_POST['Field6'],
            'Field8' => $_POST['Field8'],
            'Field9' => $_POST['Field9'],
            'Field10' => $_POST['Field10'],
            'Field11' => $_POST['Field11'],
            'Field12' => $_POST['Field12'],
            'Field13' => $_POST['Field13'],
            'Field15' => $_POST['Field15']);
    }
      

    submit();



?>	  