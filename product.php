<?php

$host = "localhost";
$usr = "root";
$pwd = "yours.";
$db = "products";

$mysqli = new mysqli($host, $user, $pwd, $db);

if (!$mysqli->connect_errno) {
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}

$objects_table = "CREATE TABLE IF NOT EXISTS objects(
					ID, Product, ProductID, Cost, Category, 
					Brand, Image, Description, Quantity   
				)";

$query = "SELECT * FROM products";

if($mysql->query($objects_table)===TRUE){
	printf("Table objects successfully created.\n");
}

?>



