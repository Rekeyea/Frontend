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


/*
	
	Parte 2 - Cosas Interesantes

 */


var convertToOption = function(item){
	return "<option value='"+item.id+"'>"+item.text+"</option>";
};

var mapSelectOptions = function(items,conversion){
	return items.map(conversion);	
};

var upByNumber = function(num){
	return function(val){
		return val + num;	
	};
};


var upFive = upByNumber(5);
var upTwo = upByNumber(2);

String.method('trim', function ( ) {
	return this.replace(/^\s+|\s+$/g, '');
});

function WriteTrimmed(text){
	console.log(text.trim());	
};

