
function limparTelaADM(){
    // document.getElementById("lisataSessoes").style.display = "none";
    document.getElementById("criarSessao").style.display = "none";
    document.getElementById("addFilme").style.display = "none";
};

function bttShowSessoes(){
    limparTelaADM();
    // document.getElementById("listaSessoes").style.display = "block";
};

function bttAddSessao(){
    limparTelaADM();
    listarFilmes();
    document.getElementById("criarSessao").style.display = "block";
};

function bttShowFilmes(){
    limparTelaADM();
    // document.getElementById("listaSessoes").style.display = "block";
};

function bttAddFilme(){
    limparTelaADM();
    document.getElementById("addFilme").style.display = "block";
};
