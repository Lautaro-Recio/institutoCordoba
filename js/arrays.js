const pregs = [
    {preg:"Pregunta #1", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur eligendi harum minima, consequuntur tempore tenetur quaerat unde? Ipsa soluta dignissimos animi, sit laudantium porro eveniet cum qui quas quos?", flush:"One"},
    {preg:"Pregunta #2", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur eligendi harum minima, consequuntur tempore tenetur quaerat unde? Ipsa soluta dignissimos animi, sit laudantium porro eveniet cum qui quas quos?", flush:"Two"},
    {preg:"Pregunta #3", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur eligendi harum minima, consequuntur tempore tenetur quaerat unde? Ipsa soluta dignissimos animi, sit laudantium porro eveniet cum qui quas quos?", flush:"Three"},
    {preg:"Pregunta #4", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur eligendi harum minima, consequuntur tempore tenetur quaerat unde? Ipsa soluta dignissimos animi, sit laudantium porro eveniet cum qui quas quos?", flush:"Four"},
]
const carousel = [
    {img:"./assets/images/alumnos.jpg",h5:"Comprometidos en formar alumnos"},
    {img:"./assets/images/alumnos2.jpg",h5:"Brindando herramientas para generar mejores resultados"},
    {img:"./assets/images/alumnos3.jpg",h5:"Educando para el futuro de una generación"},

]
const links = [
    {img:"./assets/images/instagram.png", alt:"Instagram", link:"httpss://www.instagram.com/institutobancarioeyc/", info:"/institutobancarioeyc"},
    {img:"./assets/images/facebook.png", alt:"facebook", link:"#", info:"/institutobancarioeyc"},
    {img:"./assets/images/whatsapp.png", alt:"whatsapp", link:"#", info:"35153135135"},
    {img:"./assets/images/mail.png", alt:"mail", link:"#", info:"info@institutobancario.edu.ar"},

]
const planTerciario = [
    {
        año:"Primero", 
        materias:[
            "Economía ",
            "Lengua y Comunicación",
            "Matemática Financiera",
            "Informática Aplicada I",
            "Organización y Técnica Bancaria",
            "Práctica Fiscal y Previsional I",
            "Sistema de Información Contable I",
            "Derecho Constitucional y Empresarial",
            "Actividad Bancaria y Técnicas de Ventas",
            "Inglés",
        ]
    },
    {
        año:"Segundo", 
        materias:[
            "Historia Social y Económica Argentina",
            "Sistema de Información Contable II",
            "Comercio Internacional",
            "Práctica Profesionalizante I",
            "Operaciones Financieras",
            "Informática Aplicada II",
            "Práctica Fiscal y Previsional II",
            "Proyecto de Inversión ",
            "Derecho Laboral y Ética",
            "Gestión y Administración Educativa",
        ]
    },  
    {
        año:"Tercero", 
        materias:[
            "Práctica Profesionalizante II",
            "Sistem de Información Contable III",
            "Gestión Crediticia y Administración Financiera",
            "Análisis del Riesgo Crediticio",
        ]
    },
]

const planSecundario = [
    {
        año:"Primer", 
        materias:[
        "Lengua y Literatura",
        "Matemática",
        "Ciencias Naturales: Biología",
        "Ciencias Naturales :Física",
        "Ciencias Sociales: Geografía",
        "Lengua Extranjera: Inglés",
        "Educación Artística",
        "Educación Tecnológica",
        "Ciudadanía y Participación",
        "Educación Física"
        ]
    },
    {
        año:"Segundo", 
        materias:[
        "Lengua y Literatura",
        "Matemática",
        "Ciencias Naturales: Biología",
        "Ciencias Naturales: Química",
        "Ciencias Sociales: Historia",
        "Educación Artística",
        "Lengua Extranjera: Inglés",
        "Educación Tecnológica",
        "Ciudadanía y Participación",
        "Educación Física"
        ]
    },
    {
        año:"Tercero", 
        materias:[
        "Lengua y Literatura",
        "Matemática",
        "Ciencias Naturales :Química",
        "Ciencias Naturales :Física",
        "Ciencias Sociales: Historia",  
        "Ciencias Sociales: Geografía",
        "Lengua Extranjera: Inglés",
        "Educación Artística",
        "Educación Tecnológica",
        "Formación para la Vida y el Trabajo",
        "Educación Física"
        ]
    },
    {
        año:"Cuarto", 
        materias:[
        "Matemática",
        "Lengua y Literatura",
        "Ciencias Naturales: Biología",
        "Ciencias Sociales: Geografía",
        "Ciencias Sociales: Historia",  
        "Lengua Extranjera: Inglés",
        "Educación Artística",
        "Educación Física",
        "Formación para la Vida y el Trabajo",
        "Sistemas de Información Contable",
        "Tecnología de la Información y la Comunicación. <b>Opcional</b>"
        ]
    },
    {
        año:"Quinto", 
        materias:[
            "Matemática",
            "Lengua y Literatura",
            "Ciencias Naturales: Física",
            "Ciencias Sociales: Geografía",
            "Ciencias Sociales: Historia",  
            "Lengua Extranjera: Inglés",
            "Educación Artística",
            "Psicología",
            "Educación Física",
            "Formación para la Vida y el Trabajo",
            "Sistemas de Información Contable",
            "Administración",
            "Economía",
            "Marco Jurídico de la organizaciones. <b>Opcional</b>"
        ]
    },  
    {
        año:"Sexto", 
        materias:[
            "Matemática",
            "Lengua y Literatura",
            "Ciencias Naturales: Química",  
            "Lengua Extranjera: Inglés",
            "Educación Artística",
            "Ciudadanía y Política",
            "Educación Física",
            "Formación para la Vida y el Trabajo",
            "Sistemas de Información Contable",
            "Administración",
            "Economía",
            "Derecho",
            "Administración Financiera. <b>Opcional</b>"
        ]
    },
]