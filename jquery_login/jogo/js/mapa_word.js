var plataformas;
		var aluno;
		var controles;
		var estrelaPontos;
		var pontos = 0;
		var mostrarTexto;
		var word_icone;
		var contar = contagem();
		
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
					chave = lerCookie('cookieChaveLogin');
					
					$.ajax({
						type:'POST', 
						data:{funcao:'tempo', chave:chave},
						url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
						success:function(result){
							console.log(result);
						}
					})
					
					$.ajax({
						type:'POST', 
						data:{funcao:'abrir_resposta', chave:chave},
						url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
						success:function(result){
							console.log(result);
						}
					})
					
		});
		
		var jogo = new Phaser.Game(1200, 800, Phaser.AUTO, 'proeja', {preload:preload, create:create, update:update});
		
		function preload() { //carregar elementos
			jogo.load.image('word', 'sprites/fundo_word.png');
			jogo.load.image('barra', 'sprites/plataforma.png');
			jogo.load.image('barra2', 'sprites/barra2.png');
			jogo.load.image('barra3', 'sprites/barra3.png');
			jogo.load.image('estrela', 'sprites/star.png');
			jogo.load.image('icone', 'sprites/icone.png');
			jogo.load.image('desafio', 'sprites/door.png');
			jogo.load.spritesheet('aluno', 'sprites/aluno.png', 58, 100, 13);
		}
		
		function create() { //criar elementos carregados anteriormente
		
			jogo.physics.startSystem(Phaser.Physics.ARCADE);
			jogo.add.sprite(0, 0, 'word');
			
			estrelaPontos = jogo.add.group();
			estrelaPontos.enableBody = true;
			estrelaPontos.physicsBodyType = Phaser.Physics.ARCADE;
			
			for (var i=0; i<= 15; i++){
				var estrela = estrelaPontos.create(100 + i * 50, 50, 'estrela');
				estrela.body.collideWorldBounds = true;
				estrela.body.gravity.y = 100 + Math.random() * 100;
			}
			
			word_icone = jogo.add.group();
			word_icone.enableBody = true;
			word_icone.physicsBodyType = Phaser.Physics.ARCADE;
			
			desafios = jogo.add.group();
			desafios.enableBody = true;
			desafios.physicsBodyType = Phaser.Physics.ARCADE;
			
			for (var i=0; i<= 3; i++){
				var word = word_icone.create(100 + i * 330, 200, 'icone');
				word.body.collideWorldBounds = true;
				word.body.gravity.y = 100 + Math.random() * 100;
			}
			
			var desafio = desafios.create(600, 0, 'desafio');
			desafio.body.collideWorldBounds = true;
			desafio.body.gravity.y = 100 + Math.random() * 100;
			
			
			plataformas = jogo.add.group();
			plataformas.enableBody = true;
			
			plataformas2 = jogo.add.group();
			plataformas2.enableBody = true;
			
			var piso = plataformas.create(0, jogo.world.height - 32, 'barra');
			piso.scale.setTo(2,1);
			piso.body.immovable = true;
					
			var barra = plataformas.create(0, 550, 'barra2');
			barra.body.immovable = true;
			
			var barraMedia = plataformas2.create(590, 450, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(100, 190, 'barra3');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(1000, 600, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(960, 280, 'barra3');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(500, 250, 'barra2');
			barraMedia.body.immovable = true;
			
			aluno = jogo.add.sprite(32, jogo.world.height - 130, 'aluno');
			jogo.physics.arcade.enable(aluno);
			
			aluno.body.bounce.y = 0.1;
			aluno.body.gravity.y = 250;
			aluno.body.collideWorldBounds = true;
			
			aluno.animations.add('esquerda',[0, 1, 2, 3, 4, 5], 10, true);
			aluno.animations.add('direita',[6, 7, 8, 9, 10, 11], 10, true);
			
			mostrarTexto = jogo.add.text(20,20, 'Pontuação:0', ({fontSize:'20px', fill: '#fff'}));		
			
			controles = jogo.input.keyboard.createCursorKeys();	
		}				
		
		function update() {
		
			jogo.physics.arcade.collide(estrelaPontos, plataformas); 
			jogo.physics.arcade.collide(estrelaPontos, plataformas2); 
			jogo.physics.arcade.collide(aluno, plataformas); 
			jogo.physics.arcade.collide(aluno, plataformas2);
			jogo.physics.arcade.collide(word_icone, plataformas2);
			jogo.physics.arcade.collide(word_icone, plataformas);
			jogo.physics.arcade.collide(desafios, plataformas2);
			jogo.physics.arcade.collide(desafios, plataformas);
			jogo.physics.arcade.overlap(aluno, estrelaPontos, somarPontos, null, this);
			jogo.physics.arcade.overlap(aluno, word_icone, perguntaAplicada, null, this);
			jogo.physics.arcade.overlap(aluno, desafios, insertBanco, null, this);
			
			aluno.body.velocity.x = 0;			
			
			
			if(controles.left.isDown){
				aluno.body.velocity.x = -150;
				aluno.animations.play('esquerda');
			}
			else if(controles.right.isDown) {
				aluno.body.velocity.x = 150;
				aluno.animations.play('direita');
			}
			else{
				aluno.animations.stop();
				aluno.frame = 0;
			}
			
			if (controles.up.isDown && aluno.body.touching.down){
				aluno.body.velocity.y = -350;			
			}
			
		}
		
		function somarPontos(aluno, estrela){
			
			estrela.kill();
			pontos += 25;
			mostrarTexto.text = 	'Pontuação: ' + pontos;		
		}
		
		var aux=1;
		function perguntaAplicada(aluno, word){
			word.kill();
			
			var janela = window.open("http://localhost:8080/jquery_login/jogo/php/perguntas/p_word"+aux+".html","", "width=800,height=500"); 
			aux++;
			$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
				var pontosAux = parseInt(lerCookie('pontosSomar'));
				if (isNaN(pontosAux)){
					pontosAux = 0;
				}
				console.log(pontosAux);
				pontos = pontos + pontosAux;
			});
		}
		
		function contagem(){
			var inicio = new Date();
			return inicio;
		}
		
	function insertBanco(aluno, desafio){
		
		desafio.kill();
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
			var chaveCookie = lerCookie('cookieChaveLogin');
			//var pontosAux = parseInt(lerCookie('pontosSomar'));
			//criaCookie('pontosSomar', 0, 1, '/');
			//if (isNaN(pontosAux)){
				//pontosAux = 0;
			//} 
				
			
			//console.log (pontosAux);
			
			//pontos = pontos + pontosAux;
			console.log (pontos);
			$.ajax({
					type:'POST', 
					data:{funcao: 'pontos', ponto:pontos, chave:chaveCookie},
					url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
					success:function(result){
					$("#feedback").html(result);
			}
		})
		});
		
		var tempo2 = new Date();
		var tempoFinal = (tempo2.getTime() - contar.getTime())/1000;
		console.log(tempoFinal);
		
		$.ajax({
					type:'POST', 
					data:{funcao: 't_macro', tempo_macro:tempoFinal},
					url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema.php',
					success:function(result){
					$("#feedback").html(result);
			}
		})
		
		if (confirm('Você deseja jogar novamente essa fase?')) {
			window.location.href='http://localhost:8080/jquery_login/jogo/mapa_word.html';
		} else {
			window.location.href='http://localhost:8080/jquery_login/jogo/mapa_ppt.html'; // se o usuário não quiser jogar a fase denovo, vai pra proxima - PPT
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

			