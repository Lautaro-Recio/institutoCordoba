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

let inputs= [
    {nombre:false},
    {apellido:false},
    {tel:false},
    {email:false},
]

/* Terminar form */
const validarInput= (expresion,c,input) => {  
    if(expresion.test(c.target.value) === true){
        document.getElementById(c.target.id).classList.add("bien")
        document.getElementById(c.target.id).classList.remove("mal")
       
        
    }else{
        document.getElementById(c.target.id).classList.add("mal")
        document.getElementById(c.target.id).classList.remove("bien")
    }
    switch (input) {
        case 0:{
            inputs[0].nombre = expresion.test(c.target.value) === true ? true: false            
            break;
        }
        case 1:{
            inputs[1].apellido = expresion.test(c.target.value) === true ? true: false
            break;
        }
        case 2:{     
            inputs[2].tel = expresion.test(c.target.value) === true ? true: false
            break;
        }
        case 3:{
            inputs[3].email = expresion.test(c.target.value) === true ? true: false
            break;
        };
}
}

const validarForm = (e) => {   
    switch (e.target.id) {
        case "nombre":{
            validarInput(expresiones.nombre,e,0)
            break;
        }
        case "apellido":{
            validarInput(expresiones.nombre,e,1)
            break;
        }
        case "tel":{     
            validarInput(expresiones.tel,e,2)
            break;
        }
        case "email":{
            validarInput(expresiones.gmail,e,3)
            break;
        };
    }

    
    console.log(inputs)
    if (inputs[0].nombre===true && inputs[1].apellido===true && inputs[2].tel===true && inputs[3].email===true){
        console.log("paso")
        document.getElementById("enviar").removeAttribute("disabled")
    }else{
        document.getElementById("enviar").setAttribute("disabled","true")

    }
}   


comprobar()


