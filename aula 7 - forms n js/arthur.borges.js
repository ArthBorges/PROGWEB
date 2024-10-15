function validaSenha() {
    var senha = document.getElementById("senha");
    var conf_senha = document.getElementById("conf_senha");
    var senhaErro = document.getElementById("senhaErro");
    if (senha.value == conf_senha.value && senha.value != "") {
        senhaErro.style.display = "none";
    }else{
        senhaErro.style.display = "block";
        senha.focus();
    }
};

function buscarNome(rga) {
    const listaEstudantes = new Map();

    listaEstudantes.set("2023.1907.032-7", "Arthur Borges Alexandre");
    listaEstudantes.set("2023.1907.078-5", "Kenyo Boechat");
    listaEstudantes.set("2000.0222.019-1", "Jane Dirce");

    if (listaEstudantes.has(rga)) {
        return listaEstudantes.get(rga);
    }else return "";

}

function validaRga() {
    var rga = document.getElementById("rga");
    var nome = document.getElementById("nome");
    var rgaErro = document.getElementById("rgaErro");

    var resultado = buscarNome(rga.value);
    if (resultado != '') {
        nome.value = resultado;
        rgaErro.style.display = "none";
    }else{
        rga.focus();
        nome.value = "Não encontrado.";
        rgaErro.style.display = "block";
    }
}

function validaData() {
    var botao = document.getElementById("enviar");
    var mensagem = document.getElementById("dataErro");
    var dataIni = document.getElementById("dataIni");
    var hoje = new Date();

    var data = new Date(dataIni.value + " 00:00:00");
    
    if (data < hoje) {
        dataIni.focus();
        mensagem.style.display = "block";
    }else{
        mensagem.style.display = "none";
        botao.focus();
    }
}