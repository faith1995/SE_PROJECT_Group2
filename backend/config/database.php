<?php
	class Database{
		private $host = "localhost";
		private $db_name = "SE_GROUP_2";
		private $username = "root";
		private $password = "nokutenda";

		public function getConnection(){
			$this->conn = null;
			try{
				$this->conn = new PDO("mysql:host=" .$this->host .";dbname=" .$this->db_name, $this->username, $this->password);
			}catch(PDOException $exception){
				echo "Connection error: " .$exception->getMessage();
			}

			return $this->conn;
		}

		public function getConnectionSchema(){
			$this->conn = null;
			try{
				$this->conn = new PDO("mysql:host=" .$this->host, $this->username, $this->password);
			}catch(PDOException $exception){
				echo "Connection error: " .$exception->getMessage();
			}

			return $this->conn;
		}
	}

	//header('Access-Control-Allow-Origin: *');
?>
