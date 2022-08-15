
let aleatorio = Math.round(Math.random()*100+5)

const ObjUsuario = {
[`id_${aleatorio}`] : "Valor Aleatorio"
};



const usuarios = ["Betty","Jon","Ernesto","Pepe"]

usuarios.forEach((usuario,index)=> ObjUsuario[`id_${index}`] = usuario);
console.log(ObjUsuario);
