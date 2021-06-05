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

}

function CriaTr() {
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    return tr;
}

function CriaTd(paciente) {
    
    var td = {
        nomeTd: document.createElement("td"),
        pesoTd: document.createElement("td"),
        alturaTd: document.createElement("td"),
        gorduraTd: document.createElement("td"),
        imcTd: document.createElement("td")
    }
    td.nomeTd.textContent = paciente.nome;
    td.pesoTd.textContent = paciente.peso;
    td.alturaTd.textContent = paciente.altura;
    td.gorduraTd.textContent = paciente.gordura;
    td.imcTd.textContent = paciente.imc;
    
    return td;
}

function PreencheTr(pacienteTr, pacienteTd) {

    pacienteTr.appendChild(pacienteTd.nomeTd);
    pacienteTr.appendChild(pacienteTd.pesoTd);
    pacienteTr.appendChild(pacienteTd.alturaTd);
    pacienteTr.appendChild(pacienteTd.gorduraTd);
    pacienteTr.appendChild(pacienteTd.imcTd);
}

function preencheTBody(pacienteTr, tabela) {
    tabela.appendChild(pacienteTr);
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

