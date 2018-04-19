var dataComeco = new Date();

$(document).ready(function(){
	
	$('#body').css("background-color", "#809fff");
	
	$('#btn').click(function(){
		
		var dataFinal = new Date();
		var tempo = (dataFinal.getTime() - dataComeco.getTime())/1000; //calcula o tempo gasto para realizar a questao
		
		var resposta = $('input[name=q1]:checked').val(); //verificando resposta marcada pelo usuario
		
		$.ajax({
			type:'POST', 
			data:{funcao:'tempo_p1', tempo:tempo},
			url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
			success:function(result){
			console.log(result);
			}
		})
		
		console.log(resposta);
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
			var chave = lerCookie('cookieChaveLogin');
			$.ajax({
				type:'POST', 
				data:{funcao:'resposta_1', chave:chave, resposta1:resposta},
				url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
				success:function(result){
				console.log(result);
				}
			})
		});
		
		if (resposta == 'c'){
			var pontos = 25; //pontos por ter acertado a pergunta
			
			//calcula pontuacao bonus por ter respondido certo a pergunta + rapido
			if (tempo <= 90){
				pontos = pontos + 20;
			} else if (tempo <= 120){
				pontos = pontos + 15;
			} else
				pontos = pontos + 5;
			
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', pontos, 1);
			});	
			
			$('#retorno').text('Você acertou!!Feche a janela e continue jogando!!'); //feedback ao usuario
		}else {
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', 0, 1);
			});
			$('#retorno').text('Resposta Incorreta. Tente novamente.'); //Possibilidade de colocar o gabarito explicando.
		}
	});
	
	$('#btn1').click(function(){
		
		var dataFinal = new Date();
		var tempo = (dataFinal.getTime() - dataComeco.getTime())/1000; //calcula o tempo gasto para realizar a questao
		
		var resposta = $('input[name=q1]:checked').val(); //verificando resposta marcada pelo usuario
		
		$.ajax({
			type:'POST', 
			data:{funcao:'tempo_p2', tempo:tempo},
			url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
			success:function(result){
			console.log(result);
			}
		})
		
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
			var chave = lerCookie('cookieChaveLogin');
			$.ajax({
				type:'POST', 
				data:{funcao:'resposta_2', chave:chave, resposta2:resposta},
				url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
				success:function(result){
				console.log(result);
				}
			})
		});
		
		if (resposta == 'a'){
			var pontos = 25; //pontos por ter acertado a pergunta
			
			//calcula pontuacao bonus por ter respondido certo a pergunta + rapido
			if (tempo <= 90){
				pontos = pontos + 20;
			} else if (tempo <= 120){
				pontos = pontos + 15;
			} else
				pontos = pontos + 5;
			
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', pontos, 1);
			});	
			
			$('#retorno').text('Você acertou!!Feche a janela e continue jogando!!'); //feedback ao usuario
		}else {
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', 0, 1);
			});
			$('#retorno').text('Resposta Incorreta. Tente novamente.'); //Possibilidade de colocar o gabarito explicando.
		}
	});
	
	$('#btn2').click(function(){
		
		var dataFinal = new Date();
		var tempo = (dataFinal.getTime() - dataComeco.getTime())/1000; //calcula o tempo gasto para realizar a questao
		
		var resposta = $('input[name=q1]:checked').val(); //verificando resposta marcada pelo usuario
		
		$.ajax({
			type:'POST', 
			data:{funcao:'tempo_p3', tempo:tempo},
			url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
			success:function(result){
			console.log(result);
			}
		})
		
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
			var chave = lerCookie('cookieChaveLogin');
			$.ajax({
				type:'POST', 
				data:{funcao:'resposta_3', chave:chave, resposta3:resposta},
				url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
				success:function(result){
				console.log(result);
				}
			})
		});
		
		if (resposta == 'c'){
			var pontos = 25; //pontos por ter acertado a pergunta
			
			//calcula pontuacao bonus por ter respondido certo a pergunta + rapido
			if (tempo <= 90){
				pontos = pontos + 20;
			} else if (tempo <= 120){
				pontos = pontos + 15;
			} else
				pontos = pontos + 5;
			
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', pontos, 1);
			});	
			
			$('#retorno').text('Você acertou!!Feche a janela e continue jogando!!'); //feedback ao usuario
		}else {
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', 0, 1);
			});
			$('#retorno').text('Resposta Incorreta. Tente novamente.'); //Possibilidade de colocar o gabarito explicando.
		}
	});
	
	$('#btn3').click(function(){
		
		var dataFinal = new Date();
		var tempo = (dataFinal.getTime() - dataComeco.getTime())/1000; //calcula o tempo gasto para realizar a questao
		
		var resposta = $('input[name=q1]:checked').val(); //verificando resposta marcada pelo usuario
		
		$.ajax({
			type:'POST', 
			data:{funcao:'tempo_p4', tempo:tempo},
			url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
			success:function(result){
			console.log(result);
			}
		})
		
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
			var chave = lerCookie('cookieChaveLogin');
			$.ajax({
				type:'POST', 
				data:{funcao:'resposta_4', chave:chave, resposta4:resposta},
				url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
				success:function(result){
				console.log(result);
				}
			})
		});
		
		if (resposta == 'd'){
			var pontos = 25; //pontos por ter acertado a pergunta
			
			//calcula pontuacao bonus por ter respondido certo a pergunta + rapido
			if (tempo <= 90){
				pontos = pontos + 20;
			} else if (tempo <= 120){
				pontos = pontos + 15;
			} else
				pontos = pontos + 5;
			
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', pontos, 1);
			});	
			
			$('#retorno').text('Você acertou!!Feche a janela e continue jogando!!'); //feedback ao usuario
		}else {
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){ //cria cookie para posterior uso
					criaCookie('pontosSomar', 0, 1);
			});
			$('#retorno').text('Resposta Incorreta. Tente novamente.'); //Possibilidade de colocar o gabarito explicando.
		}
	});
	
});
