var preguntas= [
            'Which is the oldest airline in the world?',
            'TWhat is the longest distance cycling backwards?',
            'What is the highest speed ever reached by a school bus?',
            'What is the longest car trip on one tank of gas?'
           ]

var respuestas=[
['Avianca','KLM','Qantas'],
['Port of Shanghai','port of Singapur','port of Rotterdam'],
['89.30 km','675.10 km','337.60 km'],
['590 km/h','320 km/h','245 km/h']
]
function jugar(){
      var aleatorio = Math.floor(Math.random()*preguntas.length);


    var respuestas = respuestas[aleatorio];


    var posiciones = [0,1,2];
    var respuestas2 = [];

    var correctas = false;
    for(i in respuestas){
      var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
      if(posicion_aleatoria==0 && correctas == false){
        indicie_respuesta_correcta =i;
        correctas = true;
      }
      respuestas2[i] = respuestas[posiciones[posicion_aleatoria]];
      posiciones.splice(posicion_aleatoria, 1);
    }

    var txt_respuestas="";
    for(i in respuestas2){
      txt_respuestas += '<input type="button" name="pp" value="'+i+'">'+respuestas2[i]+'<br>';
    }

    document.getElementById("respuestas").innerHTML = txt_respuestas;
    document.getElementById("preguntas").innerHTML = preguntas[aleatorio];

}
function comprobar(){
  var respuesta = $("input[type=button]").val();

  //alert(respuesta);
  alert(indicie_respuesta_correcta);
    jugar();
}