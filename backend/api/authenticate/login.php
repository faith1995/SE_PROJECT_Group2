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

    $user->email = $_POST['email'];
    $user->password = $_POST['password'];

    $stmt = $user->login();

    $users_arr = array();

    if ($stmt->rowCount() > 0){
        $users_arr['success'] = true;

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);
        $users_arr["id"] = $id;
        $users_arr["type"] = $type;
        /*$users_arr["record"] = array(
            "id" => $id
        );*/
        
        echo json_encode($users_arr);
    }else{
        $users_arr['success'] = false;
        $users_arr["message"] = "incorrect email address or password";
        echo json_encode($users_arr);
    }

?>
