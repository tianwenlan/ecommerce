<?php
$con = mysql_connect("localhost", "root", "yours.");
$query = "SELECT * FROM products";

if (!$con) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($con);

// $result = mysql_query($con, $query);

//  while($row = mysql_fetch_assoc($result)) { // loop through the returned rows
//          // output each elemment
//  	echo '<tr>';
//  	foreach($row as $key => $val){

//  	//echo '<td>' . $key . '</td>';
//  		echo $key . ": " . $val . "<BR />";
//          // other column items in the same fashion

//  	}
//  	 echo '</tr>';
//  }

//  mysqli_close($con);

?>
