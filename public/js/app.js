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

/*
	
	Parte 3 - Orientacion a Objetos

 */


// HERENCIA 1

function Mamifero(nom){
	this.nombre = nom;
}

Mamifero.prototype.get_name = function(){
	return this.nombre;	
};

Mamifero.prototype.says = function(){
	return this.dice || "";	
};

function Gato(nom){
	this.name = nom;
	this.dice = "meeow";
}

Gato.prototype = new Mamifero();

//sobreescribir los metodos de mamifero en gato

//******************************************************


// HERENCIA 2

var mamifero = {
	nombre:"",
	get_name:function(){
		return this.nombre;
	},
	dice : function(){
		return this.dice || "";
	}
};

var unGato = Object.create(mamifero);
//sobreescribir los metodos de mamifero por los correspondientes de unGato

//*******************************************************

