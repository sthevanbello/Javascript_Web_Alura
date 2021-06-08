var campoFiltro = document.querySelector("#filtro-tabela");
var botaoBusca = document.querySelector("#btn-busca");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
    
            if ( nome != this.value) {
                
                paciente.classList.add("invisivel");
            }else{
                
                paciente.classList.remove("invisivel")
            }
            
        }
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }

    
});
