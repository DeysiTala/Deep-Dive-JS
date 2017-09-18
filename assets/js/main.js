var preguntas= [
            'Which is the oldest airline in the world?',
            'TWhat is the longest distance cycling backwards?',
            'What is the highest speed ever reached by a school bus?,
            'What is the longest car trip on one tank of gas?'
           ]

var respuestas=[
['Avianca','KLM','Qantas'],
['Port of Shanghai','port of Singapur','port of Rotterdam'],
['89.30 km','675.10 km','337.60 km'],
['590 km/h','320 km/h','245 km/h']
]
function jugar(){
      var indice_aleatorio = Math.floor(Math.random()*preguntas.length);


    var respuestas_posibles = respuestas[indice_aleatorio];


    var posiciones = [0,1,2];
    var respuestas_reordenadas = [];

    var ya_se_metio = false;
    for(i in respuestas_posibles){
      var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
      if(posicion_aleatoria==0 && ya_se_metio == false){
        indicie_respuesta_correcta =i;
        ya_se_metio = true;
      }
      respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
      posiciones.splice(posicion_aleatoria, 1);
    }

    var txt_respuestas="";
    for(i in respuestas_reordenadas){
      txt_respuestas += '<input type="button" name="pp" value="'+i+'">'+respuestas_reordenadas[i]+'<br>';
    }

    document.getElementById("respuestas").innerHTML = txt_respuestas;
    document.getElementById("preguntas").innerHTML = preguntas[indice_aleatorio];

}
function comprobar(){
  var respuesta = $("input[type=radio]:checked").val();

  //alert(respuesta);
  //alert(indicie_respuesta_correcta);
  if(respuesta ==indicie_respuesta_correcta){
    alert("que bien!");
  }else{
    alert("me tiro por un puente");
  }
  jugar();
}
  </script>

</body>
</html>