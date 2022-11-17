const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^[0-9]{10}$/,
    mensaje: /^[a-zA-ZÀ-ÿ-¿?¡!0-9-\s]{4,100}$/, // Letras y espacios, pueden llevar acentos.

};

function comprobar(){
    
    const inputsSelec = document.querySelectorAll("#form input");
        
                /* Funcion que toma los inputs */
                inputsSelec.forEach((input) => {
                    input.addEventListener("keyup", validarForm);
                });
}

const inputs= [
    {nombre:false},
    {apellido:false},
    {email:false},
    {tel:false},
    {mensaje:false},
]

/* Terminar form */
const validarInput= (expresion,c,input) => {  
    if(expresion.test(c.target.value) === true){
        document.getElementById(c.target.id).classList.add("bien")
        document.getElementById(c.target.id).classList.remove("mal")
        inputs.find(element => console.log(element[1]))
        console.log(inputs)
    }else{
        document.getElementById(c.target.id).classList.add("mal")
        document.getElementById(c.target.id).classList.remove("bien")
    }
}

const validarForm = (e) => {   

    switch (e.target.id) {
        case "nombre":{
            validarInput(expresiones.nombre,e,nombre)
            break;
        }
        case "apellido":{
            validarInput(expresiones.nombre,e,inputs.apellido)

            break;
        }
        case "tel":{     
            validarInput(expresiones.tel,e,inputs.tel)

            break;
        }
        case "email":{
            validarInput(expresiones.gmail,e,inputs.email)

            break;
        };
        case "mensaje":{
            validarInput(expresiones.mensaje,e,inputs.mensaje)

            break;
        };
}
if (nombre===true){
    console.log("paso")
    document.getElementById("enviar").removeAttribute("disabled")
}else{
    document.getElementById("enviar").setAttribute("disabled","true")

}
}   


comprobar()


