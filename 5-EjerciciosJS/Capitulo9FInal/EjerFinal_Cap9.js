class Pelicula{
    constructor(id,titulo,director,anioEstreno,paisOrigen,genero,calif){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.paisOrigen = paisOrigen;
        this.genero = genero;
        this.calif = calif;
    
    };

    mostrarFicha(){
        console.log(this)
    };
    
    
    //static function de generos aceptados:
    static generosAceptados(){

    }

}

let pelicula1 = new Pelicula(
    "AA78902",
    "Shuter aisland",
    "Leonardo Dicaprio",
    2010,
    "EEUU",
    "Mystery",
    8.6)
;

pelicula1.mostrarFicha();