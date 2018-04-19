		
		var plataformas;
		var aluno;
		var controles;
		var estrelaPontos;
		var pontos = 0;
		var mostrarTexto;
		var ppt_icone;
		var contar = contagem();
		
		$.getScript("http://localhost:8080/jquery_login/jogo/js/cookie.js", function(){
			chave = lerCookie('cookieChaveLogin');
					
			$.ajax({
				type:'POST', 
				data:{funcao:'tempo', chave:chave},
				url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema3.php',
				success:function(result){
				console.log(result);
				}
			})
					
			$.ajax({
				type:'POST', 
				data:{funcao:'abrir_resposta', chave:chave},
				url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema3.php',
				success:function(result){
				console.log(result);
				}
			})			
				
					
		});	
		
		var jogo = new Phaser.Game(1200, 800, Phaser.AUTO, 'proeja', {preload:preload, create:create, update:update});
		
		function preload() { //carregar elementos
			jogo.load.image('windows', 'sprites/fundo_windows.png');
			jogo.load.image('barra', 'sprites/chao_win.png');
			jogo.load.image('barra2', 'sprites/barra_win.png');
			jogo.load.image('estrela', 'sprites/star.png');
			jogo.load.image('icone', 'sprites/windows_icon.png');
			jogo.load.image('desafio', 'sprites/door.png');
			jogo.load.spritesheet('aluno', 'sprites/aluno.png', 58, 100, 13);
		}
		
		var popup;
		var tween = null;
		
		function create() { //criar elementos carregados anteriormente
		
			jogo.physics.startSystem(Phaser.Physics.ARCADE);
			jogo.add.sprite(0, 0, 'windows');
			
			estrelaPontos = jogo.add.group();
			estrelaPontos.enableBody = true;
			estrelaPontos.physicsBodyType = Phaser.Physics.ARCADE;
			
			for (var i=0; i<= 22; i++){
				var estrela = estrelaPontos.create(100 + i * 50, 50, 'estrela');
				estrela.body.collideWorldBounds = true;
				estrela.body.gravity.y = 100 + Math.random() * 100;
			}
			
			windows = jogo.add.group();
			windows.enableBody = true;
			windows.physicsBodyType = Phaser.Physics.ARCADE;
			
			desafios = jogo.add.group();
			desafios.enableBody = true;
			desafios.physicsBodyType = Phaser.Physics.ARCADE;
			
			for (var i=0; i<= 3; i++){
				var win = windows.create(100 + i * 330, 200, 'icone');
				win.body.collideWorldBounds = true;
				win.body.gravity.y = 100 + Math.random() * 100;
			}
			
			var desafio = desafios.create(20, 0, 'desafio');
			desafio.body.collideWorldBounds = true;
			desafio.body.gravity.y = 100 + Math.random() * 100;
				
			plataformas = jogo.add.group();
			plataformas.enableBody = true;
			
			plataformas2 = jogo.add.group();
			plataformas2.enableBody = true;
			
			var piso = plataformas.create(0, jogo.world.height - 32, 'barra');
			piso.scale.setTo(2,1);
			piso.body.immovable = true;
			
			var barraMedia = plataformas2.create(0, 150, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(68, 150, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(136, 150, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(204, 150, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(190, 290, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(258, 290, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(326, 290, 'barra2');
			barraMedia.body.immovable = true;
			
			var barraMedia = plataformas2.create(360, 460, 'barra2');
			barraMedia.body.immovable = true;
			
			var aux = 64;
			var aux2 = 360;
			for (var i=0; i<= 5; i++){
				var barraMedia = plataformas2.create(aux2 + aux, 460, 'barra2');
				barraMedia.body.immovable = true;
				aux2 = aux2 + aux;
			}
			
			var barraMedia = plataformas2.create(950, 600, 'barra2');
			barraMedia.body.immovable = true;
			
			var aux = 64;
			var aux2 = 950;
			for (var i=0; i<= 3; i++){
				var barraMedia = plataformas2.create(aux2 + aux, 600, 'barra2');
				barraMedia.body.immovable = true;
				aux2 = aux2 + aux;
			}
			
			var barraMedia = plataformas2.create(950, 300, 'barra2');
			barraMedia.body.immovable = true;
			
			var aux = 64;
			var aux2 = 950;
			for (var i=0; i<= 3; i++){
				var barraMedia = plataformas2.create(aux2 + aux, 300, 'barra2');
				barraMedia.body.immovable = true;
				aux2 = aux2 + aux;
			}
			
			aluno = jogo.add.sprite(32, jogo.world.height - 130, 'aluno');
			jogo.physics.arcade.enable(aluno);
			
			aluno.body.bounce.y = 0.2;
			aluno.body.gravity.y = 250;
			aluno.body.collideWorldBounds = true;
			
			aluno.animations.add('esquerda',[0, 1, 2, 3, 4, 5], 10, true);
			aluno.animations.add('direita',[6, 7, 8, 9, 10, 11], 10, true);
			
			mostrarTexto = jogo.add.text(20,20, 'Pontuação:0', ({fontSize:'20px', fill: '#fff'}));		
			
			controles = jogo.input.keyboard.createCursorKeys();

			
		}
		
		function criaPopUp(){
				
				popup = jogo.add.sprite(jogo.world.centerX, jogo.world.centerY, 'word');
				popup.alpha = 0.8;
				popup.anchor.set(0.5);
				popup.inputEnabled = true;
				//popup.input.enableDrag();

				//  Position the close button to the top-right of the popup sprite (minus 8px for spacing)
				var pw = (popup.width / 2) - 30;
				var ph = (popup.height / 2) - 8;

				//  And click the close button to close it down again
				var closeButton = jogo.make.sprite(pw, -ph, 'estrela');
				closeButton.inputEnabled = true;
				closeButton.input.priorityID = 1;
				closeButton.input.useHandCursor = true;
				closeButton.events.onInputDown.add(closeWindow, this);

				//  Add the "close button" to the popup window image
				popup.addChild(closeButton);

				//  Hide it awaiting a click
				popup.scale.set(0.1);
			}


		function openWindow(aluno,word) {
			
			word.kill();
			criaPopUp();
			if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
			{
				return;
			}
			
			//  Create a tween that will pop-open the window, but only if it's not already tweening or open
			tween = jogo.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

		}

		function closeWindow() {

			if (tween && tween.isRunning || popup.scale.x === 0.1)
			{
				return;
			}

			//  Create a tween that will close the window, but only if it's not already tweening or closed
			tween = jogo.add.tween(popup.scale).to( { x: 0.1, y: 0.1 }, 500, Phaser.Easing.Elastic.In, true);

		}					
		
		function update() {
		
			jogo.physics.arcade.collide(estrelaPontos, plataformas); 
			jogo.physics.arcade.collide(estrelaPontos, plataformas2); 
			jogo.physics.arcade.collide(aluno, plataformas); 
			jogo.physics.arcade.collide(aluno, plataformas2);
			jogo.physics.arcade.collide(windows, plataformas2);
			jogo.physics.arcade.collide(windows, plataformas);
			jogo.physics.arcade.collide(desafios, plataformas2);
			jogo.physics.arcade.collide(desafios, plataformas);
			jogo.physics.arcade.overlap(aluno, estrelaPontos, somarPontos, null, this);
			jogo.physics.arcade.overlap(aluno, windows, perguntaAplicada, null, this);//testando a sincronia do banco
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
		
		var aux =1;
		function perguntaAplicada(aluno, windows){
			windows.kill();
			var janela = window.open("http://localhost:8080/jquery_login/jogo/php/perguntas/p_windows"+aux+".html","", "width=800,height=500");
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
			
			console.log (pontos);
			$.ajax({
					type:'POST', 
					data:{funcao: 'pontos', ponto:pontos, chave:chaveCookie},
					url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema3.php',
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
					url:'http://localhost:8080/jquery_login/jogo/php/funcoes_sistema3.php',
					success:function(result){
					$("#feedback").html(result);
			}
		})
		
		if (confirm('Você deseja jogar novamente essa fase?')) {
			window.location.href='http://localhost:8080/jquery_login/jogo/mapa_windows.html';
		} else {
			window.location.href='http://localhost:8080/jquery_login/php/index.php'; // se o usuário não quiser jogar a fase denovo, ai sim vai pro index da barca
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

			