
function generarTabla(m,n){

	var contenedor = $("<div>");
	//var numero[] = getRandomInt(0,8);
	var numeros_elegidos = [];
	numeros_elegidos = crearVectorTabla(m,n);
	for(var i =0 ;i<numeros_elegidos.length;i++){
		console.log(numeros_elegidos[i]);
	}
	/*
	$("body").append(contenedor);
	for(var i=0;i<m;i++){
		for(var j=0;j<n;j++){
				var logoCat = $("<div>");
				logoCat.attr({class: 'border_tabla'});
				logoCat.attr({ style: 'display:inline-block'});

				logoCat.text(numeros_elegidos[m*n]);
				contenedor.append(logoCat);
				} 
		contenedor.append('<br />');
	}
*/	
}


function crearVectorTabla(m,n){
	var myArray = [];
	var listaArray = [];

	for(var i=0 ; i<(m*n)-1 ;i++){
		myArray[i]=i+1;
	}

	listaArray = myArray.sort(function() {return Math.random() - 0.5});

	listaArray[i] = "x";
	return listaArray;
}


function crearTabla(){

	var tabla = '<table border="1">';
	var tr ='';

	for(var i=0; i<3 ; i++){
		 tr += '<tr>';
		for(var j=0; j<3 ;j++){
         	tr += '<td>'+i+'</td>';
     	}
     tr += '</tr>';
	}

	tabla += tr;
	tabla += '</table>';

	$("#lista").html(tabla);
}

