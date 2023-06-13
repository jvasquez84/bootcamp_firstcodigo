let datosCapturados = []
let DataRecord = document.querySelector("#dataRecord");

const formDatos = (event) =>{
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const pass = document.querySelector("#pass").value;
    let data = {nombre,apellido,pass}
    datosCapturados.push(data)
    mostrarDatos();
}

const mostrarDatos = () =>{
DataRecord.innerHTML ="";
 datosCapturados.map((valor)=>{
    DataRecord.innerHTML += `<div>Usuario registrado ${valor.nombre} ${valor.apellido}, su contraseña es: ${valor.pass}</div>`
 })
}





