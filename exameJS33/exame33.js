//Extra para mejorar un poco
{
	function procesarDatos(){
	var aa;
	var nn;
	aa = document.getElementById('apelido').value;
	nn = document.getElementById('nome').value;
	alert('Vostede é ' + nn +' '+ aa);
}

}


{
function FondoAnimado() {
  document.body.style.backgroundColor = "#ff8800";
  document.getElementById("Textin1").style.color = "blue";
  document.getElementById("br").style.color = "red";
  document.getElementById("rlue").style.color = "red";
}
}

document.write("<h1>Teoria</h1>")

var dias = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var numedias = dias.length -1;
var i=0;
while (i <= numedias ){
	document.write( dias[i] + " - " );
	i++
}


//Parte del traductor (en cierta parte funciona)

document.write("<h1>Traductor</h1>")

var input = document.getElementById('palabra');  
var button = document.getElementById('button');
var traduccion = document.getElementById('traduccion');
var bodyTable =  document.getElementById('traducciones');
var traduce = {
    "uno"    : "one",
    "dos"    : "two",
    "tres"   : "three",
    "cuatro" : "four",
    "cinco"  : "five",
};

function crearTabla(){
  for(var word in traduce){
    var tr        = document.createElement('tr'),
        td1       = document.createElement('td'),
        td2       = document.createElement('td'),
        cellText1 = document.createTextNode(word),
        cellText2 = document.createTextNode(traduce[word]); 
  
    td1.appendChild(cellText1);
    td2.appendChild(cellText2);

    tr.appendChild(td1);
    tr.appendChild(td2);
    
    bodyTable.appendChild(tr);
  }
}

crearTabla();

button.addEventListener('click',function(){
  traduccion.textContent = traduce[input.value];
});


//Juego por puntos
{

document.write('<h1>un pequeño juego</h1>');

var respusta = prompt('Sabes como se escribe: ');
document.write('Tu respuesta es: ' + respusta +  '<br>'); // unha cadea detrás da outra co signo +

switch(respusta)
{
	case 'EJEMPLO1':
		document.write('Que bien, has ganado 10 puntos 😆');
	break;
	case 'EEMPLO2':
		document.write('Que bien, has ganado 10 puntos 😆');
	break;
	case 'EJEMPLO3':
		document.write('Que bien, has ganado 10 puntos 😆');
	break;
	case 'EJEMPLO4':
		document.write('Que bien, has ganado 10 puntos 😆');
	break;
	case 'EJEMPLO5':
		document.write('Que bien, has ganado 10 puntos 😆');
	break;

	default:
		document.write('NO ES TAN DIFICIL 😫');
	break;
}; 

//Aqui la parte en la que con cada pregunta el usuario sube puntos y consigue una felicitacion
function LEVELUP(x){
 	resultado = (x + 10);
 	return resultado;
}
 solucion=LEVELUP(1);
 alert(solucion)

if ( x == 50 )
	alert("Ganaste 50 puntos seguro que apruebas")
else (x != 50 )
	alert("mas suerte a la proxima")



//ESTA PARTE NO TIENE NADA QUE VER CON EL EXAMEN PERO LO TENGO COMO PRUEBA, QUIEN SABE A LO MEJOR SACO ALGO UTIL DE AQUI, POR SI ACASO ESTO NO APARECERA EN LA PAGINA 
{
	document.write("<h1>Un juego</h1>")

	function aleatorio(minimo, maximo)
{
  var numero = Math.round( Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;


var opciones = ["Piedra", "Papel", "Tijera"];


var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0)


alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);


if(opcionUsuario == piedra)
    {

      if(opcionMaquina == piedra)
        {
          alert("Empate!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Perdiste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Ganaste!");
        }
    }
else if(opcionUsuario == papel)
    {

      if(opcionMaquina == piedra)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Empate!");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Perdiste!");
        }
    }
else if(opcionUsuario == tijera)
    {

      if(opcionMaquina == piedra)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Ganaste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Empate!");
        }
      }
  else if(opcionUsuario > 2)
  {
    alert("Vuelve a elegir");
  }

}

