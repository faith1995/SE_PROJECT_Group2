<?php
class Authenticate{
    //databse connection
	private $conn;

    //object properties
    public $id; 
    public $email; 
    public $password;

    public $firstname;
    public $lastname;
    public $dob;
    public $contact;
    
	public function __construct($db){
        $this->conn = $db;
    }

    function register(){
        try {
            //query to insert record
            $query = "INSERT INTO USER
                        SET user_firstname=:firstname,
                        user_lastname=:lastname,
                        user_dob=:dob,
                        user_contact=:contact,
                        user_email=:email,
                        user_password=:password;
                    INSERT INTO PATIENT
                        SET patient_id=LAST_INSERT_ID()";

            //prepare query
            $stmt = $this->conn->prepare($query);

            //sanitize
            $this->firstname = htmlspecialchars(strip_tags($this->firstname));
            $this->lastname = htmlspecialchars(strip_tags($this->lastname));
            $this->dob = htmlspecialchars(strip_tags($this->dob));
            $this->contact = htmlspecialchars(strip_tags($this->contact));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->password = htmlspecialchars(strip_tags($this->password));
            
            //bind values
            $stmt->bindParam(":firstname", $this->firstname);
            $stmt->bindParam(":lastname", $this->lastname);
            $stmt->bindParam(":dob", $this->dob);
            $stmt->bindParam(":contact", $this->contact);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":password", $this->password);


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

    public function login(){
        try{
            $query = "SELECT user_id as id FROM USER 
                        WHERE (user_email=:email) AND (user_password=:password) 
                        LIMIT 1";

            //prepare query for excecution
            $stmt = $this->conn->prepare($query);

            // sanitize
            $email=htmlspecialchars(strip_tags($this->email));
            $password=htmlspecialchars(strip_tags($this->password));

            // bind the parameters
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);

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

    public function read(){
        try{
            $query = "SELECT service_id as id, service_name as name
                        FROM SERVICE";

            //prepare query for excecution
            $stmt = $this->conn->prepare($query);

            /*// sanitize
            $email=htmlspecialchars(strip_tags($this->email));
            $password=htmlspecialchars(strip_tags($this->password));

            // bind the parameters
            $stmt->bindParam(':email', $email);
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
