class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id =id;
        this.titulo =titulo;
        this.director =director;
        this.estreno =estreno;
        this.pais =pais;
        this.generos =generos;
        this.calificacion =calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion)
    
    };

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son ${Pelicula.listaGeneros.join(",")}`)
    }

    validarCadena(propiedad,valor){

        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);

        return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`)
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);

        return true;

    }
    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, No es un arreglo`);

        if(valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`);

        for(let cadena of valor){    
            if (typeof cadena !== "string"){
                return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`);
            }
        }
    }


    validarIMDB(id){
        if(this.validarCadena("IMDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`El IMDB "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`)
            }
        }

    }

    validarTitulo(titulo){
        if(this.validarCadena("Título",titulo)){
            this.validarLongitudCadena("Título",titulo,100);
        }

    }

    validarDirector(director){
        if(this.validarCadena("Director",director)){
            this.validarLongitudCadena("Director",director,50);
        }

    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno",estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`El año de estreno "${estreno}" no es válido, debe ser un número de 4 digitos`)
            }
        }

    }

    validarPais(pais){
        this.validarArreglo("País",pais);
    }

    //arreglar no compara con los generos validos.
    validarGeneros(generos){
        if(this.validarArreglo("Generos",generos)){ 
            for(let genero of generos){ //recorremos el arreglo que el usuario introdujo
                console.log(genero,Pelicula.listaGeneros.includes(genero))   //no entra
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Géneros incorrectos "${generos.join(",")}"`);
                    Pelicula.generosAceptados()
                }

            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificación",calificacion)){
            return (calificacion < 0 || calificacion > 10)
                ? console.error(`La calificacion tiene que estar entre un rango de 0 a 10`)
                : this.calificacion = calificacion.toFixed(1);
        }

    }

    fichaTecnica(){
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(",")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`)
    }



}

// Pelicula.generosAceptados();
const peli = new Pelicula({
    id: "aa4589962",
    titulo: "Shuter Island",
    director: "Leonardo DiCaprio",
    estreno: 2010,
    pais: ["Irlanda","EEUU"],
    generos: ["Comedia","Humor negro"],
    calificacion: 7.89,
})
  
peli.fichaTecnica();

const misPelis = [

    {
    id: "aa4589962",
    titulo: "Shuter Island",
    director: "Leonardo DiCaprio",
    estreno: 2010,
    pais: ["Irlanda","EEUU"],
    generos: ["Comedia","Humor negro"],
    calificacion: 7.89,

    },
    {
    id: "aa4589962",
    titulo: "Shuter Island",
    director: "Leonardo DiCaprio",
    estreno: 2010,
    pais: ["Irlanda","EEUU"],
    generos: ["Comedia","Humor negro"],
    calificacion: 7.89,

    },

    {
    id: "aa4589962",
    titulo: "Shuter Island",
    director: "Leonardo DiCaprio",
    estreno: 2010,
    pais: ["Irlanda","EEUU"],
    generos: ["Comedia","Humor negro"],
     calificacion: 7.89,    
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica())

