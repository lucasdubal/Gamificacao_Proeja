<?php
	
	//conexao com o banco
	$conn = mysqli_connect('localhost', 'root', '');
	mysqli_select_db($conn, 'proeja_tcc');
	
	if(!$conn)
		echo 'nao foi possivel conectar';
	
	echo '</br>';
	
	
?>