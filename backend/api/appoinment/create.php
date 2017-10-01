<?php
    //require headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    //include_once '../../config/core.php';

    include_once '../../config/database.php';
    include_once '../../objects/appoinment.php';

    $database = new Database();
    $db = $database->getConnection();

    $appoinment = new Appoinment($db);

    
    $id = $_POST['id'];
    $type = $_POST['type'];
    $date_time = $_POST['date_time'];
    $reason = $_POST['reason'];
    $status = "Unconfirmed";//$_POST['status'];
    

    //set appoinment property values
    $appoinment->id = $id;
    $appoinment->type = $type;
    $appoinment->date_time = $date_time;
    $appoinment->reason = $reason;
    $appoinment->status = $status;

    //appoinments array
    $appoinments_arr = array();

    //create the appoinment
    if ($appoinment->create()){

        //communicate with the send status api


        $appoinments_arr['success'] = true;
        $appoinments_arr["message"] = "Appoinment was created.";

        echo json_encode($appoinments_arr);
    }else{
        $appoinments_arr['success'] = false;
        $appoinments_arr["message"] = "Appoinment not created. SOmething went wrong.";
        echo json_encode($appoinments_arr);
    }
?>
