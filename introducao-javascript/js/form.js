let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", adicionaPaciente);

function adicionaPaciente(event) {

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var tabela = document.querySelector("#tabela-pacientes");
    var paciente = recuperaDadosDoForm(form);
    
    var pacienteTr = CriaTr();
    var pacienteTd = CriaTd(paciente);
    
    PreencheTr(pacienteTr, pacienteTd);
    
    preencheTBody(pacienteTr, tabela);
    
    form.reset()
    
}

function CriaTr() {
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    return tr;
}

function CriaTd(dado){

    var tdMontado = {
        nomeTd: montaTd(dado.nome, "info-nome"),
        pesoTd: montaTd(dado.peso, "info-peso"),
        alturaTd: montaTd(dado.altura, "info-altura"),
        gorduraTd: montaTd(dado.gordura, "info-gordura"),
        imcTd: montaTd(dado.imc, "info-imc"),
    }
    return tdMontado
}

function montaTd(dado, classe){

    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td
}

function PreencheTr(dadoTr, dadoTd) {

    for(let i in dadoTd){
        dadoTr.appendChild(dadoTd[i]);
    }
}

function preencheTBody(dadoTr, tabela) {
    tabela.appendChild(dadoTr);
}

function recuperaDadosDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

