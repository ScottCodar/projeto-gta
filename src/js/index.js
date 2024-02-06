
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//elementoPlataformas.classList.add("ativo");

botao.addEventListener("click", () => {
    

    elementoPlataformas.classList.toggle("ativo");
   
});