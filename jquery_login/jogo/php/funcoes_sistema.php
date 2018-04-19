<?php

	//pegar o nome da função que tá vindo por parâmetro
	
	$parametroFuncao = $_POST['funcao'];
	include 'conect.php';
	
	if ($parametroFuncao == 'insert'){

		$nome = $_POST['nome'];
		$sobrenome = $_POST['sobrenome'];
		$chave = $_POST['chave'];
			
		try {
			$result = mysqli_query($conn, "SELECT chave FROM usuario WHERE usuario.chave ='".$chave."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				if ($row[0] == $chave){
					echo 'Usuario duplicado';
				} else {
					mysqli_query($conn, "INSERT into usuario (nome, sobrenome, chave) VALUES ('$nome', '$sobrenome', '$chave')");
					echo 'Usuário foi cadastrado com sucesso!!';
				}	
			}	
		} catch(Exception $e){
			echo 'eroooooo'+$e;}

	} else if ($parametroFuncao == 'pontos'){
		
		$chave = $_POST['chave'];
		$ponto = $_POST['ponto'];
		
		try {
			$result = mysqli_query($conn, "SELECT id_usuario FROM usuario WHERE usuario.chave ='".$chave."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "insert into pontuacao_word (id_usuario, pontos) VALUES ('$row[0]', $ponto)");	
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
				mysqli_query($conn, "insert into tempo_word (id_usuario) VALUES ('$row[0]')");
				
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_word set resposta_1 = '$tempo' where tempo_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_word set resposta_2 = '$tempo' where tempo_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_word set resposta_3 = '$tempo' where tempo_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_word set resposta_4 = '$tempo' where tempo_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM tempo_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update tempo_word set tempo_macro = '$tempoMacro' where tempo_word.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	} else if ($parametroFuncao == 'abrir_resposta'){
		
		$chave = $_POST['chave'];
		
		try {
			$result = mysqli_query($conn, "SELECT id_usuario FROM usuario WHERE usuario.chave='".$chave."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "insert into aluno_resposta_word (id_usuario) VALUES ('$row[0]')");
				
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_word set resposta_p1 = '$resposta' where aluno_resposta_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_word set resposta_p2 = '$resposta' where aluno_resposta_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_word set resposta_p3 = '$resposta' where aluno_resposta_word.id = '".$row[0]."'");		
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
			$result = mysqli_query($conn, "SELECT MAX(id) FROM aluno_resposta_word");
			if ($result){
				$row = mysqli_fetch_row($result);
				mysqli_query($conn, "update aluno_resposta_word set resposta_p4 = '$resposta' where aluno_resposta_word.id = '".$row[0]."'");		
			}else{
				echo "<script>alert('eroooooo do ELSE');</script>";
				
			}	
		} catch(Exception $e){
			echo $e;
		}
		
	}
	else if ($parametroFuncao == 'login'){
		
		$nomel = $_POST['nome'];
		$chavel = $_POST['chave'];
		
		//verificar login
		try {
			$result = mysqli_query($conn, "SELECT nome,chave FROM usuario WHERE usuario.nome ='".$nomel."' AND usuario.chave ='".$chavel."'");
			if ($result){
				$row = mysqli_fetch_row($result);
				if ($row[0] == $nomel && $row[1] == $chavel){
					echo 'eri';
					//window.location.href='http://localhost:8080/jquery_login/jogo/index.html';
				} else {
					echo 'Usuario e ou senha inválidos. Tente novamente';
				}	
			}	
		} catch(Exception $e){
			echo 'eroooooo'+$e;}
		
		}
		
		mysqli_close($conn);

?>