const $boton1 = document.getElementById("btn1");
const $boton2 = document.getElementById("btn2");
const $boton3 = document.getElementById("btn3");
const $boton4 = document.getElementById("btn4");
const $boton5 = document.getElementById("btn5");
const $contenedor = document.getElementById("contenedor")
const $template = document.getElementById("template").content;
const $btnEnviar = document.getElementById("btn__submit");

$boton1.addEventListener("click", ()=>{
    $btnEnviar.addEventListener("click", ()=>{
        crearTemplate($boton1.value);
    })
    
})

$boton2.addEventListener("click", ()=>{
    $btnEnviar.addEventListener("click", ()=>{
        crearTemplate($boton2.value)
    })
})

$boton3.addEventListener("click", ()=>{
    $btnEnviar.addEventListener("click", ()=>{
        crearTemplate($boton3.value)
    })
})

$boton4.addEventListener("click", ()=>{
    $btnEnviar.addEventListener("click", ()=>{
        crearTemplate($boton4.value)
    })
})

$boton5.addEventListener("click", ()=>{
    $btnEnviar.addEventListener("click", ()=>{
        crearTemplate($boton5.value)
    })
})


function crearTemplate(valor){
    $contenedor.style.display = "none"
    $template.querySelector("div").classList.add("active");
    $template.querySelector("div").style.display = "flex";
    $template.querySelector("input").style.color = "hsl(25, 97%, 53%)";
    $template.querySelector("input").value = "You selected " + valor + " out of 5";
    document.querySelector("#app").appendChild($template);
}