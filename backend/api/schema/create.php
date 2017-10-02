<?php
	include_once '../../config/database.php';
	include_once '../../objects/schema.php';

	//class instance
	$database = new Database();

	$db = $database->getConnectionSchema();
	$databasename = new Schema($db);

	echo $databasename->drop() ? "true" : "false";
	echo $databasename->create() ? "true" : "false";

	$db = $database->getConnection();
	$schema = new Schema($db);

	echo $schema->address() ? "true" : "false";
	echo $schema->user() ? "true" : "false";
	echo $schema->patient() ? "true" : "false";
	echo $schema->specialist() ? "true" : "false";
	echo $schema->appoinment() ? "true" : "false";
	echo $schema->dump_user() ? "true" : "false";
	echo $schema->dump_patient() ? "true" : "false";
	echo $schema->dump_specialist() ? "true" : "false";
	
?>
