<?php
    //API Key - see http://admin.mailchimp.com/account/api
    $apikey = '883a8cd61d6b20074f3a11a8d661477b-us6';
    
    // A List Id to run examples against. use lists() to view all
    // Also, login to MC account, go to List, then List Tools, and look for the List ID entry
    $listId = '6465a2f2ad';
    
    // A Campaign Id to run examples against. use campaigns() to view all
    $campaignId = '';

    //some email addresses used in the examples:
    $my_email = $_POST['email'];

    //just used in xml-rpc examples
    $apiUrl = 'http://api.mailchimp.com/1.3/';
    
?>
