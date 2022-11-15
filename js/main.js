const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^[0-9]{10}$/,

};


function comprobar(){
    
    const inputsSelec = document.querySelectorAll("#form input");
        
                /* Funcion que toma los inputs */
                inputsSelec.forEach((input) => {
                    input.addEventListener("keyup", validarForm);
                });
}

const validarInput= (expresion,c) => {  
    if(expresion.test(c.target.value) === true){
        document.getElementById(c.target.id).classList.add("bien")
        document.getElementById(c.target.id).classList.remove("mal")

    }else{
        console.log("tel mal")
        document.getElementById(c.target.id).classList.add("mal")
        document.getElementById(c.target.id).classList.remove("bien")

    }
}

const validarForm = (e) => {   
    e.target
    switch (e.target.id) {
        case "nombre":{
            validarInput(expresiones.nombre,e)
            break;
        }
        case "apellido":{
            validarInput(expresiones.nombre,e)

            break;
        }
        case "tel":{     
            validarInput(expresiones.tel,e)

            break;
        }
        case "email":{
            validarInput(expresiones.gmail,e)

            break;
        };
}}


comprobar()


