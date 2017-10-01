<?php
    include_once '../../config/core.php';
    include_once '../../config/database.php';
    include_once '../../objects/appoinment.php';

    $database = new Database();
    $db = $database->getConnection();

    $appoinment = new Appoinment($db);

    $appoinments_arr = array();

    $stmt = $appoinment->read();
    if ($stmt->rowCount() > 0){
        
        $appoinments_arr['success'] = true;
        $appoinments_arr["records"] = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $appoinment_item = array(
                "id" => $id,
                "type" => $type,
                "status" => $status,
                "date_time" => $date_time,
                "reason" => $reason
            );
            array_push($appoinments_arr['records'], $appoinment_item);
        }
        
        echo json_encode($appoinments_arr);
    }else{
        $appoinments_arr['success'] = false;
        $appoinments_arr["message"] = "no appoinments available yet";

        echo json_encode($appoinments_arr);
    }

?>
