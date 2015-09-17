var that = self;
var estadoIniciado = false;
that.addEventListener("message",function(e){
	var msg = e.data;
	if(msg=="start" && !estadoIniciado){
		estadoIniciado = true;
		trabajar();		
	}else if(msg=="finish"){
		estadoIniciado=false;
		that.close();
	}
});

function trabajar(){
	while(estadoIniciado){
		setTimeout(function() {
			that.postMessage("Trabajando...");
		}, 500);
	}	
}
