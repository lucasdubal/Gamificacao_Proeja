var aux=0;
console.log('chamou o init');

$(document).ready(function(){
	
	$('#btnInsert').click(function(){
		
		aux=1;
		
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		var chave = $("#chave").val();
		var chave2 = $("#chave2").val();
		
		if (nome && sobrenome && chave && chave2){
			
			if (chave == chave2){
				$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
				criaCookie('cookieNome', nome, 1);
				criaCookie('cookieSobrenome', sobrenome, 1);
				criaCookie('cookieChave', chave, 1);
				
				
				$.ajax({
					type:'POST', 
					data:{funcao: 'insert', nome: nome, sobrenome: sobrenome, chave:chave},
					url:'funcoes_sistema.php',
					success:function(result){
					$("#feedbackCadastro").html(result);
			}
		})
			});
			} else
				$("#feedbackCadastro").html('As senhas informadas são diferentes. \n Tente novamente.');	
		} else 
			$("#feedbackCadastro").html('Algum campo não foi preenchido. \n Tente novamente.');	
	});
	
	
	$('#btnLogin').on('click', function(){
		
		var nomel = $("#nomelogin").val(); //nomel = nome do login
		var chavel = $("#chavelogin").val(); //chavel = chave do login
		//var nomel = $( "input[name='nomelogin']" ).val(); //nomel = nome do login
		//var chavel = $("input[name='chavelogin')").val(); //chavel = chave do login
		
		if (nomel && chavel){
			$.ajax({
			type:'POST', 
			data:{funcao: 'login', nome: nomel, chave:chavel},
			url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
			success:function(result){
				console.log(result);
				if (result == '</br>eri'){
					$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
						criaCookie('cookieChaveLogin', chavel, 1);
					});
					window.location.href='http://localhost:8080/jquery_login/jogo/mapa_word.html';
				}else	
					$("#feedbackLogin").html(result);
			}
			})
		} else 
			$("#feedbackLogin").html('Algum campo não foi preenchido. \n Tente novamente.');
	});
	
});