//Métodos Static:

class Animal{
    //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre,genero){   
        //atributos  
        this.nombre = nombre;
        this.genero = genero;
    }

    //métodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }

    static queEres(){
        console.log("Soy un animal ya te lo dije")
    }

}

Animal.queEres(); 

//falta agregar la parte de getter y setters que está en notion.