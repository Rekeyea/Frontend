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


Function.prototype.method = function (name, func) {
 this.prototype[name] = func;
 return this;
};

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



/*
	
	Parte 4 - Programacion Funcional

 */

var numeros = [1,2,3,4,5,6];

var suma = numeros.reduce(function(prev,curr,index,arr){
	return prev + curr;
},0);

function plus(a,b){
	return a+b;	
}

function minus(a,b){
	return a-b
}

function mult(a,b){
	return a*b;
}

function div(a,b){
	return a / b;
}

var miArrayDeFunciones = [plus,minus,mult,div];
var miObjetoDeFunciones = {"add":plus,"minus":minus,"mult":mult,"div":div};

function LlamarPorIndice(ind){
	miArrayDeFunciones[ind]();
}

function LlamarPorNombre(nom){
	miObjetoDeFunciones[nom]();
}


/*
	
	Parte 5 - HTML5 APIs

 */


function CreateWorkers(){
	var worker = new Worker("task.js");
	worker.addEventListener("message",function(e){
		console.log("El Worker dice: ",e.data);
	});
	worker.postMessage("start");
	setTimeout(function() {
		worker.postMessage("finish");
	}, 10000);
}