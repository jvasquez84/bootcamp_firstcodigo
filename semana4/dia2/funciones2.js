//tipos de funciones son 3:
//declarativas
//anonima
//flecha arrow function

//declarativa

function nombre(/*argumentos o parametros*/a,b,c){

    return a+b-c;

}
console.log(nombre());
console.log(nombre(20,10,5));

//anonima o de expresion

let sumar2 = function (a,b,c) {
    return a+b-c;
}

console.log(sumar2(20,10,5))
console.log(sumar2);
console.log(sumar2());

//arrow function - function flecha

const sumar3=(a,b,c)=>{
    return a+b-c;
}

console.log(sumar3(20,10,5))


/////////////////////

const saludar =(nombres,apellidos)=>{
    //template string
    return `Hola mi nombre es ${nombres} y mi apellido es ${apellidos}`;
}

console.log(saludar("johan","vasquez"))

const hello =()=>"hola como estas";
console.log(hello());


let laptops=["nuevas",1500,true,50];

//insertar un valor nuevo
//accede a la cantidad de elementos
//eliminar el indice cero del array

 laptops.push("red");
 console.log(laptops.length);
 laptops.shift();



