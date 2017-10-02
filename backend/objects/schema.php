<?php
class Schema{
	private $conn;

	public function __construct($db){
        $this->conn = $db;
    }

    public function drop() {
        try{
            $query = "DROP DATABASE SE_GROUP_2";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function create() {
        try{
            $query = "CREATE DATABASE SE_GROUP_2";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function address() {
        try{
            $query = "CREATE TABLE IF NOT EXISTS ADDRESS (
            address_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            address_street VARCHAR(255),
            address_suburb VARCHAR(255),
            address_city VARCHAR(255),
            address_state VARCHAR(255),
            address_country VARCHAR(255),
            address_zip_code VARCHAR(255),
            address_location TEXT,
            address_viewport TEXT
            )";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function user() {
        try{
            $query = "CREATE TABLE IF NOT EXISTS USER (
            user_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            user_email VARCHAR(255) UNIQUE,
            user_password VARCHAR(255),
            user_firstname VARCHAR(255),
            user_lastname VARCHAR(255),
            user_contact VARCHAR(255),
            user_dob DATE,
            user_image TEXT,
            user_type VARCHAR(2),
            user_modified TIMESTAMP,
            user_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function patient() {
        try{
            $query = "CREATE TABLE IF NOT EXISTS PATIENT (
            patient_id BIGINT UNSIGNED,
            PRIMARY KEY(patient_id),
            FOREIGN KEY(patient_id) REFERENCES USER (user_id)
            )";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function specialist() {
        try{
            $query = "CREATE TABLE IF NOT EXISTS SPECIALIST (
            specalist_id BIGINT UNSIGNED,
            specialist_archive BOOLEAN DEFAULT false,
            PRIMARY KEY(specalist_id),
            FOREIGN KEY(specalist_id) REFERENCES USER (user_id)
            )";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function appoinment() {
        try{
            $query = "CREATE TABLE IF NOT EXISTS APPOINMENT (
            appoinment_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            patient_id BIGINT UNSIGNED,
            appoinment_type VARCHAR(255),
            appoinment_datetime DATETIME,
            appoinment_reason TEXT,
            appoinment_status VARCHAR(255),
            appoinment_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(patient_id) REFERENCES PATIENT (patient_id)
            )";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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


    public function dump_user() {
        try{
            $query = "INSERT INTO USER (user_id, user_firstname, user_lastname, user_email, user_password, user_type, user_image) VALUES
            (1, 'John', 'Smith', 'john@gmail.joburg', '123456', 'P', 'https://storage.googleapis.com/avo-insta/thumbnail/1b2292f584cce6a56d9f020677c5e95a.jpg'),
            (2, 'Jack', 'Hammer', 'jack@gmail.joburg', '123456', 'P', 'https://storage.googleapis.com/avo-insta/thumbnail/1b2292f584cce6a56d9f020677c5e95a.jpg'),
            (3, 'Sarah', 'Thor', 'sarah@gmail.joburg', '123456', 'S', 'https://storage.googleapis.com/avo-insta/thumbnail/74deb179239097331e5c53f02ac72e46.jpg'),
            (4, 'Jim', 'Cameron', 'jimcameron@gmail.joburg', '123456', 'S', 'https://storage.googleapis.com/avo-insta/thumbnail/1b2292f584cce6a56d9f020677c5e95a.jpg')";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function dump_patient() {
        try{
            $query = "INSERT INTO PATIENT (patient_id) VALUES
            (1),
            (2)";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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

    public function dump_specialist() {
        try{
            $query = "INSERT INTO SPECIALIST (specalist_id) VALUES
            (3),
            (4)";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            //Execute the query
            if($stmt->execute()){
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


}
?>
