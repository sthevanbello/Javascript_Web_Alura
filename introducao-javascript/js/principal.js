var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

calculaImc(".paciente")

function calculaImc(pacienteId) {
    var imcVal = true;
    var pacientes = document.querySelectorAll(pacienteId);

    for (let i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        if (peso <= 0 || peso >= 200) {
            tdPeso.textContent = "Peso inválido";
            imcVal = false;
        }
        if (altura <= 0 || altura >= 2.50) {
            tdAltura.textContent = "Altura inválida";
            imcVal = false;
        }

        if (imcVal) {
            var imc = peso / (altura * altura);
        } else {
            imc = "Dados inválidos"
        }

        tdImc.textContent = imc;
    }
}