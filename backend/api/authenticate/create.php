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

    //set user property values
    $user->firstname = $firstname;
    $user->lastname = $lastname;
    $user->dob = $dob;
    $user->contact = $contact;
    $user->email = $email;
    $user->password = $password;

    //users array
    $users_arr = array();

    //create the user
    if ($user->register()){

        //communicate with the send email api
        $data = array('email'=> $email, 'firstname' => $firstname, 'lastname' => $lastname);
        $data_json = json_encode($data);
        $url = "http://localhost:8081/sendmail";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($data_json)));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response  = curl_exec($ch);
        curl_close($ch);

        $users_arr['success'] = true;
        $users_arr["message"] = "user was created.";
        $users_arr["id"] = $db->lastInsertId();
        $users_arr["email"] = $response;

        echo json_encode($users_arr);
    }else{
        $users_arr['success'] = false;
        $users_arr["message"] = "This email address is already taken. Please try another.";
        echo json_encode($users_arr);
    }
?>
