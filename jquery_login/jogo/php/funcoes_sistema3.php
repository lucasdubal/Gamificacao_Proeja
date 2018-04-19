<?php

	//pegar o nome da função que tá vindo por parâmetro
	
	$parametroFuncao = $_POST['funcao'];
	include 'conect.php';
	
	if ($parametroFuncao == 'pontos'){
		
		$chave = $_POST['chave'];
		$ponto = $_POST['ponto'];
		
		try {
			$result = mysqli_query($conn, "SELECT id_usuario FROM usuario WHERE usuario.chave ='".$chave."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "insert into pontuacao_win (id_usuario, pontos) VALUES ('$row[0]', $ponto)");	
			}
		} catch(Exception $e){
			echo $e;
		}
		
	} else if ($parametroFuncao == 'tempo'){

		//$tempo = $_POST['tempo'];
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT id_usuario FROM usuario WHERE usuario.chave='".$chave."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "insert into tempo_win (id_usuario) VALUES ('$row[0]')");
				
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo "<script>alert('eroooooo');</script>";
		}
		
	} else if ($parametroFuncao == 'tempo_p1'){

		$tempo = $_POST['tempo'];
		//$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_win set resposta_1 = '$tempo' where tempo_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}	
	} else if ($parametroFuncao == 'tempo_p2'){

		$tempo = $_POST['tempo'];
		//$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_win set resposta_2 = '$tempo' where tempo_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}
	else if ($parametroFuncao == 'tempo_p3'){

		$tempo = $_POST['tempo'];
		//$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_win set resposta_3 = '$tempo' where tempo_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}
	else if ($parametroFuncao == 'tempo_p4'){

		$tempo = $_POST['tempo'];
		//$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_win set resposta_4 = '$tempo' where tempo_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}
	else if ($parametroFuncao == 't_macro'){

		$tempoMacro = $_POST['tempo_macro'];
		//$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_win set tempo_macro = '$tempoMacro' where tempo.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}else if ($parametroFuncao == 'abrir_resposta'){
		
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT id_usuario FROM usuario WHERE usuario.chave='".$chave."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "insert into aluno_resposta_win (id_usuario) VALUES ('$row[0]')");
				
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo "<script>alert('eroooooo');</script>";
		}
		
	} else if ($parametroFuncao == 'resposta_1'){

		$resposta = $_POST['resposta1'];
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_win set resposta_p1 = '$resposta' where aluno_resposta_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	} else if ($parametroFuncao == 'resposta_2'){

		$resposta = $_POST['resposta2'];
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_win set resposta_p2 = '$resposta' where aluno_resposta_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}else if ($parametroFuncao == 'resposta_3'){

		$resposta = $_POST['resposta3'];
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_win set resposta_p3 = '$resposta' where aluno_resposta_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}
	else if ($parametroFuncao == 'resposta_4'){

		$resposta = $_POST['resposta4'];
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_win");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_win set resposta_p4 = '$resposta' where aluno_resposta_win.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	} 
	
	mysqli_close($conn);

?>