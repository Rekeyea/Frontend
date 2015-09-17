/*

	Parte 1 - Caracteristicas
	
 */

var a = 0;
function DeterminarScope(){
	console.log(a);
	function DentroDeScope(b){
		var a = b+1;
		console.log(a);
	}
	var a = 1;
	console.log(a);
	DentroDeScope(a);
	console.log(a);
}

function LameNumbers(){
	console.log(0.2 + 0.4);
}

function NullIsDifferentFromUndefined(){
	return (null==undefined);
}