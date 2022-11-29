function pregsOfAccordion(){
    for (const p of pregs)
    {   
        let accordion = document.getElementById("accordionFlushExample")
            let div = document.createElement("div");
            div.setAttribute("class", "accordion-item");
            div.innerHTML = `
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${p.flush}" aria-expanded="false" aria-controls="flush-collapse${p.flush}">
                        <p>
                        ${p.preg}

                        </p> 
                    </button>
                </h2>
                <div id="flush-collapse${p.flush}" class="accordion-collapse collapse" aria-labelledby="flush-heading${p.flush}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>
                           ${p.info}
                        </p>
                    </div>
                </div>
            `;
            accordion.appendChild(div)
    }
}


function carrousel(){
    let X = 1
    for (const img of carousel)
    {    
        let carouselByID = document.getElementById(`carousel`)
            let div = document.createElement("div");
            if(X===1){
                div.setAttribute("class", "carousel-item active");
                X++
            }else{
                div.setAttribute("class", "carousel-item ");
            }
            div.innerHTML = `
            <img loading="lazy" src=${img.img} class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${img.h5}</h5>
            </div>
            `;
            carouselByID.appendChild(div)
    }
}

function footer(){
    for (const link of links)
    {    
        let divLinks = document.getElementById(`links`)
        let a = document.createElement("a");
        a.setAttribute("class", "col-lg-3");

        a.setAttribute("target", "_blank");
        a.setAttribute("href",  link.link );
            a.innerHTML = `
            <div class="contactoDirecto ">
                <img loading="lazy" src=${link.img} alt=${link.alt}>
                <p><b>${link.info}</b></p>
            </div>
            `;
            divLinks.appendChild(a)
    }
}

function planesEstudio(array,swiperId){
    for (const planEstudio of array)
    {    
        let swiper = document.getElementById(swiperId)
        let div = document.createElement("div");
        div.innerHTML = `<p>${planEstudio.año} Año</p> `
        div.setAttribute("class", "swiper-slide");
        let ul = document.createElement("ul");
        for (i=0;i <planEstudio.materias.length;i++){
            let li = document.createElement("li");
            li.innerHTML = `
                ${planEstudio.materias[i]}
            `;
            ul.appendChild(li)
        }
        
            div.appendChild(ul)
            swiper.appendChild(div)

    }
}
planesEstudio(planTerciario,"swiperGraphic")
planesEstudio(planSecundario,"swiperGraphic2")

footer()
carrousel()
pregsOfAccordion()

