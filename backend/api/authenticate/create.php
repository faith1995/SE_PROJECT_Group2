<?php
    //require headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../../config/database.php';
    include_once '../../objects/authenticate.php';

    $database = new Database();
    $db = $database->getConnection();

    $user = new Authenticate($db);

    
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $dob = $_POST['dob'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $type = "P";

    //set user property values
    $user->firstname = $firstname;
    $user->lastname = $lastname;
    $user->dob = $dob;
    $user->contact = $contact;
    $user->email = $email;
    $user->password = $password;
    $user->type = $type;

    //users array
    $users_arr = array();

    //create the user
    if ($user->register()){

        $users_arr['success'] = true;
        $users_arr["message"] = "user was created.";
        $users_arr["id"] = $db->lastInsertId();
        $users_arr["type"] = $type;
        //$users_arr["email"] = $response;

        echo json_encode($users_arr);

        //send email
        //communicate with the send email api
        /*$data = array('email'=> $email, 'firstname' => $firstname, 'lastname' => $lastname);
        $data_json = json_encode($data);
        $url = "http://avohealth.avospace.xyz/api/sendmail";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($data_json)));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response  = curl_exec($ch);
        curl_close($ch);*/
    }else{
        $users_arr['success'] = false;
        $users_arr["message"] = "This email address is already taken. Please try another.";
        echo json_encode($users_arr);
    }
?>
