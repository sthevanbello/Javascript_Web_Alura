Imc(".paciente")

function Imc(pacienteId) {
    var pacientes = document.querySelectorAll(pacienteId);

    for (let i = 0; i < pacientes.length; i++) {
        let imcVal = true;


        let paciente = pacientes[i];

        let tdPeso = paciente.querySelector(".info-peso");
        let peso = tdPeso.textContent;

        let tdAltura = paciente.querySelector(".info-altura");
        let altura = tdAltura.textContent;

        let tdImc = paciente.querySelector(".info-imc");

        if (peso <= 0 || peso >= 200) {
            tdPeso.textContent = "Peso inválido";
            imcVal = false;
        }
        if (altura <= 0 || altura >= 2.50) {
            tdAltura.textContent = "Altura inválida";
            imcVal = false;
        }

        if (imcVal) {
            var imc = calculaImc(peso, altura);
        } else {
            paciente.classList.add("paciente-invalido");
            imc = 0;
        }

        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    let imc = peso / (altura * altura);
    
    return imc.toFixed(2)
}
