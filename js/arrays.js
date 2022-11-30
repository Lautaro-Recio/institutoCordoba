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
    {img:"./assets/images/whatsapp.png", alt:"whatsapp", link:"#", info:"0351 2521632"},
    {img:"./assets/images/whatsapp.png", alt:"whatsapp", link:"#", info:"0351 4254123"},
    {img:"./assets/images/mail.png", alt:"mail", link:"#", info:"info@institutobancario.edu.ar"},

]
const planTerciario = [
    {
        año:"Primer Año", 
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
        año:"Segundo Año", 
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
        año:"Tercer Año", 
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
        año:"Primer Año", 
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
        año:"Segundo Año", 
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
        año:"Tercer Año", 
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
        año:"Cuarto Año", 
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
        año:"Quinto Año" , 
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
        año:"Sexto Año", 
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

const temarioYObjetivos = [
    {
        año:"Objetivos", 
        materias:[
            "Comprender el funcionamiento y reglamentación del Mercado de Capitales argentino",
            "Diferenciar los instrumentos financieros que ofrece el Mercado de Capitales actualmente",
            "Aplicar herramientas de cálculo financiero para la toma de decisiones",
            "Armar Flujos de Fondos utilizando planillas de cálculos",
            "Determinar Valor Actual Neto y Tasa Interna de Retorno de alternativas de inversión",
            "Identificar Sistemas de Amortización en instrumentos de renta fija",
            "Calcular rendimiento y riesgo de acciones a través de herramientas estadísticas",
            "Analizar Estados Contables de empresas con cotización en el Mercado de Capitales",
            "Utilizar TIC para obtener y analizar información del Mercado de Capitales",
            "Diseñar secuencias didácticas que apliquen la Educación Financiera",
        ]
    }, 
    {
        año:"Tématicas", 
        materias:[
            "Ley de Mercado de Capitales ",
            "Alternativas de Inversión y Financiamiento",
            "Herramientas de cálculo financiero",
            "Análisis financiero de empresas",
            "Aplicación de TIC para análisis y cálculo",
        ]
    },
     
  
]