<?php
class Appoinment{
    //databse connection
	private $conn;

    //object properties
    public $id; 
    public $type;
    public $date_time;
    public $reason;
    public $status;
    
	public function __construct($db){
        $this->conn = $db;
    }

    function create(){
        try {
            //query to insert record
            $query = "INSERT INTO APPOINMENT
                        SET patient_id=:id,
                        appoinment_type=:type,
                        appoinment_datetime=:date_time,
                        appoinment_reason=:reason,
                        appoinment_status=:status";

            //prepare query
            $stmt = $this->conn->prepare($query);

            //sanitize
            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->type = htmlspecialchars(strip_tags($this->type));
            $this->date_time = htmlspecialchars(strip_tags($this->date_time));
            $this->reason = htmlspecialchars(strip_tags($this->reason));
            $this->status = htmlspecialchars(strip_tags($this->status)); 

            //bind values
            $stmt->bindParam(":id", $this->id);
            $stmt->bindParam(":type", $this->type);
            $stmt->bindParam(":date_time", $this->date_time);
            $stmt->bindParam(":reason", $this->reason);
            $stmt->bindParam(":status", $this->status);


            //execute query
            if ($stmt->execute()){
                return true;
            }else{
                return false;
            }
        }

        catch(PDOException $exception){
            die('ERROR' . $exception->getMessage());
            return $query . "<br>" . $exception->getMessage();
        }
    }


    public function read(){
        try{
            $query = "SELECT appoinment_id as id, appoinment_type as type, appoinment_status as status, appoinment_datetime as date_time,
                        appoinment_reason as reason, PATIENT.patient_id, USER.user_firstname as firstname, USER.user_lastname as lastname
                        FROM APPOINMENT
                        INNER JOIN PATIENT ON APPOINMENT.patient_id = PATIENT.patient_id
                        LEFT JOIN USER ON APPOINMENT.patient_id = USER.user_id";

            //prepare query for excecution
            $stmt = $this->conn->prepare($query);

            /*// sanitize
            $status=htmlspecialchars(strip_tags($this->status));
            $password=htmlspecialchars(strip_tags($this->password));

            // bind the parameters
            $stmt->bindParam(':status', $status);
            $stmt->bindParam(':password', $password);*/

            //execute query
            $stmt->execute();

            //return values from database
            return $stmt;
        }

        catch(PDOException $exception){
            die('ERROR' . $exception->getMessage());
            return $query . "<br>" . $exception->getMessage();
        }
    }  

}
?>
