var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


calculaImc("#primeiro-paciente");
calculaImc("#segundo-paciente");
calculaImc("#terceiro-paciente");
calculaImc("#quarto-paciente");
calculaImc("#quinto-paciente");


function calculaImc(pacienteId){
    var imcVal = true;
    var paciente = document.querySelector(pacienteId);

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if (peso <= 0 || peso >= 200)  { 
        tdPeso.textContent = "Peso inválido";
        imcVal = false;
    }
    if (altura <= 0 || altura >= 2.50){
        tdAltura.textContent = "Altura inválida";
        imcVal = false;
    }

    if(imcVal){
        var imc = peso/(altura * altura);
    }else{
        imc = "Dados inválidos"
    }

    tdImc.textContent = imc;
}
