<?php
	session_start();
?>

<html>
<head>
<title>Login</title>
</head>
<body>
<?php
 include "connec.php";
 $userid1 = $_POST ['username'];
 $passw1 = $_POST ['password'];
if(($userid1) == "")   
{
	echo "Username anda belum diisi <br>";
}

elseif(($passw1) == "")   
{
	echo "Password anda belum diisi <br>";
}
else
{
	//echo "Data Boleh di Simpan ";
	$con = mysql_connect($server,$user,$pass);
		if ($con)
		{
			$db = mysql_select_db('kupon');
			if ($db)
			{
				$sql = "select * from mdealer where nama_dealer = '".$userid1."' and pass_dealer = '".$passw1."';";					
				$query = mysql_query($sql);
				//echo $sql;
				if ($query)
				{
					if( mysql_num_rows($query) > 0 )
					{
						$_SESSION['username'] = $_POST['username'];
						header("location:h_lihat_d.php");
					}
					else
					{
						session_destroy();
						//header("location:login.php");
						echo "Maaf, Username ID atau Password Anda Belum Terdaftar ";
					}
				}
			}
			else
			{
				echo "Tidak terpilih ";
			}
		}
		else
		{
			echo "Belum terhubung";
		}
}
?>
</body>
</html>
