
		function crearArray(m,n){

			var vector=[];
			var cantidad = m*n;

			for(var i=0 ; i < cantidad ; i++){
				vector[i] = i+1;
			}

			vector = shuffle(vector);
			vector = vector_conx(vector);

			return vector;
		}

		function vector_conx(array){

			var mayor = -1,j;
			var count = array.length;
			for (var i = 0; i < count; i++) {
				if (array[i] > mayor) {
					j=i;
					mayor = array[i];
				}
			}
			console.log('mayor de numeros',mayor);
			array[j]= "X";
			return array;
		}

		function shuffle(array){

			 var currentIndex = array.length, temporaryValue, randomIndex ;

			  // While there remain elements to shuffle...
			  while (0 !== currentIndex) {

			    // Pick a remaining element...
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;

			    // And swap it with the current element.
			    temporaryValue = array[currentIndex];
			    array[currentIndex] = array[randomIndex];
			    array[randomIndex] = temporaryValue;
			  }

		  return array;
		}

		function crearTabla(array){

			var tabla = '<table border="1">';
			var tr ='';
			var k =1;
			for(var i=0; i<3 ; i++){
				 tr += '<tr>';
				for(var j=0; j<3 ;j++){
		         	tr += '<td id="m'+array[array.length-k]+'">'+array[array.length-k]+'</td>';
		         	k++;
		     	}
		     tr += '</tr>';
			}

			tabla += tr;
			tabla += '</table>';

			$("#lista").html(tabla);
		}


		function buscarPosX(array){
			var posA = array.indexOf("X");
			return posA;
		}


		$(document).keydown(function(event) {
			var tmp; 
			pos = buscarPosX(V);
			if(event.which == 65){
				tmp = V[pos];
				V[pos]= V[pos+1];
				V[pos+1] = tmp;
				$("#lista").html("");
				crearTabla(V);
				//alert('a la izquierda');
			}

			if(event.which == 68){
				tmp = V[pos];
				V[pos]= V[pos-1];
				V[pos-1] = tmp;
				$("#lista").html("");
				crearTabla(V);
				//alert('a la derecha');
			}

			if(event.which == 87){
				alert('sube');
			}

			if(event.which == 83){
				alert('baja');
			}
		});


		var V =[];
		var pos;
		V = crearArray(3,3);
		crearTabla(V);
		console.log('Vector X : ',V);


