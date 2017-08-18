
var play = document.getElementById('play');
play.onclick = function(){

var tablero = document.getElementById("tablero")
var boton1= document.createElement("button");
boton1.setAttribute("class","star");
boton1.setAttribute("id","stargame");
var texto = document.createTextNode("Star Game");
boton1.appendChild(texto);
boton1.addEventListener("click", mostrarMapa)

var boton2= document.createElement("button");
boton2.setAttribute("class","star");
boton2.setAttribute("id","instrucciones");
var texto = document.createTextNode("Instrucciones");
boton2.appendChild(texto);

var boton3= document.createElement("button");
boton3.setAttribute("class","star");
boton3.setAttribute("id","creditos");
var texto = document.createTextNode("Credits");
boton3.appendChild(texto);

tablero.appendChild(boton1);
tablero.appendChild(boton2);
tablero.appendChild(boton3);

var boton=document.getElementById("play");
var inicio=document.getElementById("img");
tablero.replaceChild(boton1, boton);
tablero.replaceChild(boton1, img);

}
function mostrarMapa(){
var tablero = document.getElementById("tablero")
		var mapa1=[	" * * * * * * * * * * * * * * * * * * * * ",
				    " * *           * * *             * *   * ",
				    " * *             W                 *   * ",
				    " *                           *     *   * ",
				    " *         *                       *   * ",
				    " *   * * * *             *         *   * ",
				    " *     *     * *       *   *       *   * ",
				    " *   * I o   * *         *   * * * *   * ",
				    " *     *     * *   * *  **           I * ",
				    " *   *          *        *         * * * ",
				    " *           * ***   *   *     *   * * * ",
				    " *       *      *        * *       * * * ",
				    " *     * *             ***         * * * ",
				    " * *   *           *     *         *   * ",
				    " *     *   *      *      *     *       * ",
				    " * *        *     *      *         *   * ",
				    " * * * * * * * * * * * * * * * * * * * * "];

		var mapa2=[	" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
  				    " * *                                 *             * * * * ",
  				    " * *   *                             *       *       * * * ",
  				    " *   *   *            *              *     * *     *     * ",
  				    " *         *           * *           * * *       *   *   * ",
  				    " *     * *       *           *       *   *     *     *   * ",
  				    " *   *                       *      **   *   *       *   * ",
  				    " * *                             *       I          W* * * ",
  				    " * *              **     * *                             * ",
  				    " * *             *     I           *                     * ",
  				    " *               *   *         *                     *   * ",
  				    " *   *   *     *      **   *                             * ",
  				    " *     *                             *                   * ",
  				    " *       * *        *    *   *     * * *           *     * ",
  				    " *       * *                         *     *       *     * ",
  				    " * *             *       *       *                       * ",
  				    " *       *     *       *   * *     *     *   * *         * ",
  				    " *     *           *  o*   * *   *   *       * * *       * ",
  				    " * * *      *          * *         *   *             * * * ",
  				    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

		var mapa3=[	" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    				    " * * * * * * * * * * *                                       ",
    				    " *       *  *  *       * *                              W*   ",
    				    " *               *     * * *           *                 I   ",
    				    " * *       *               * *                               ",
    				    " *    *    * *   I           * *         *   *               ",
    				    " *                   ****      * * * *   *     *       *     ",
    				    " *         *                 *           *   *               ",
    				    " *       *                 *   *                             ",
    				    " *         *   *         *       *   *                       ",
    				    " *             *         *                                   ",
    				    " * *                ** *                                 *   ",
    				    " *                **         * *                             ",
    				    " *  **   *   *  **                     * *              * *  ",
    				    " * *   *   *   *       * *                 * *           * * ",
    				    " *                                       *   *               ",
    				    " *               *     *             ***   * *               ",
    				    " *             *               *                             ",
    				    " *                       *         * *                       ",
    				    " *o  *       *           *       * *                       * ",
    				    " * * *           *                                       *   ",
    				    " * * * *                                *                *   ",
    				    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

    var mapas = [mapa1, mapa2, mapa3];
    var m
    var x;
    var y;
    var actual;
    var xfinal;
    var yfinal;

    var teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    };

    document.addEventListener("keydown", movimiento);
    var contador = 0;
    var map = [];

    function iniciar(index){
      var mapa = mapas [index];
      map = [];
      for (var i = 0; i < mapa.length; i++){
          map[i]=[];
        for (var j = 0; j < mapa[0].length; j++) {
          map[i][j]=mapa[i][j];
        }
      }
    }


    iniciar(0);
    generarMapa(map, 'empezar');

    var izquierda='left';
    var derecha='rigth';
    var arriba='up';
    var abajo='down';

    function generarMapa(mapa, direccion) {
      tablero.innerHTML='';
      var tabla = document.createElement('table');
      tabla.setAttribute('cellspacing','0');
      tabla.setAttribute('id','mapa');
      for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if(mapa[i][j]=='*'){
              celda.setAttribute('class', 'muro');
            } else if(mapa[i][j]=='o'){
              x=j;
              y=i;
              actual=direccion;
              celda.setAttribute('id',direccion);
            } else if (mapa[i][j]=='W') {
              xfinal=j;
              yfinal=i;
              celda.setAttribute('id', 'llegada');
            }
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);

      }
      tablero.appendChild(tabla);
    }


    function posValida () {
      return !(x == 0 || y == 0 || y == map.length - 1 || x == map[0].length - 1);

    }
    function move(a, b, direccion)
    {
       while( posValida () ){
        if ( map[y+a][x+b]!='*') {
          map[y][x]=' ';
          map[y+a][x+b]='o';
          generarMapa(map, direccion);    
          // se actualiza dentro de generar mapa x y y;   
        }
     
    else {
      break;
    }

        if ( map[y+a][x+b]=='W') {
           alert ("GANASTEE!!! ");
           contador++;
           iniciar (contador);
           generarMapa(map, direccion);
           return;
        }
      }
      if ( !posValida () ) {
        alert ("PERDISTE!!!");  
        iniciar (contador);
        generarMapa(map, direccion);
      }
    }

/*Funcionalidades de mi teclado*/
    function movimiento(evento)
    {
      switch(evento.keyCode)
      {
        case teclas.UP:
          move(-1, 0, arriba);
        break;
        case teclas.DOWN:
          move(1, 0, abajo);
        break;
        case teclas.LEFT:
          move(0, -1, izquierda);
        break;
        case teclas.RIGHT:
          move(0, 1, derecha);
        break;
      }
    }

    }