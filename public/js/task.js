var estadoIniciado = false;
self.addEventListener("message",function(e){
	var msg = e.data;
	if(msg=="start" && !estadoIniciado){
		estadoIniciado = true;
		trabajar();		
	}else if(msg=="stop"){
		estadoIniciado=false;
	}
});

function trabajar(){
	while(estadoIniciado){
		setTimeout(function() {
			console.log("Imprimo desde el worker");	
		}, 500);
	}	
}
