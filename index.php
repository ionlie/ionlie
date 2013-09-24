<?php
$serverName = "ALTZ-PC";

$conn = array ("Database"=>"dbAL","UID"=>"albert","PWD"=>"12345");
$conn = sqlsrv_connect( $serverName, $conn);

if( $conn ) {
	echo "Connection established.";
}else {
	echo "Connection could not be established.<br/>";
	die( print_r( sqlsrv_errors(), true));
}

$query = "SELECT * FROM identitas ";
$result = sqlsrv_query($conn,$query);

echo "<h1>" . " Row" . " Returned </h1>";

while($row = sqlsrv_fetch_array($result))
{
  echo "<li>" . $row["id_biodata"] . $row["nama"] . $row["alamat"] . $row["hobby"] . $row["nomor"] . $row["cita2"] ."</li>";
}
?>