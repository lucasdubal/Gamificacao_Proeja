function criaCookie(nome, valor, dias){
	
	var expires = "";
	
	if (dias){
		var data = new Date();
		data.setTime(data.getTime() + (dias*24*60*60*1000));
		expires = "; expires=" + data.toGMTString();
	}
	
	if (valor != "" && valor != null && valor != "null"){
		document.cookie = nome + "=" + valor + expires + "; path=/";
	}
}

function lerCookie(nome){
	
	var procura = nome + "=";
	var cookies = document.cookie.split(';');
	for (var i=0; i < cookies.length; i++){
		var c = cookies[i];
		while(c.charAt(0) == ' ')
			c = c.substring (1, c.length);
		if (c.indexOf(procura) == 0)
			return c.substring(procura.length, c.length);
	}
	return null;
}

function apagaCookie(nome){
	criaCookie(nome, "", -1);
}