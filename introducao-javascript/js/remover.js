var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(element => {
//     element.addEventListener("dblclick", function(){
//         this.remove(); /*element.remove();*/
//     });
// });

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    let alvoDoEvento = event.target;
    let paiDoAlvo = alvoDoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");
    
    setTimeout(() => {  paiDoAlvo.remove(); }, 500);
});

