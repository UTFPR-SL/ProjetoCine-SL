
function limparTelaADM(){
    // document.getElementById("lisataSessoes").style.display = "none";
    document.getElementById("criarSessao").style.display = "none";
    document.getElementById("addFilme").style.display = "none";
    document.getElementById("filtroFilmess").style.display = "none";
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
     document.getElementById("filtroFilmes").style.display = "block";
};

function bttAddFilme(){
    limparTelaADM();
    document.getElementById("addFilme").style.display = "block";
};

function filtro3d(){
    document.getElementById("filtro3d").style.display = "none";
    document.getElementById("fecharfiltro3d").style.display = "block";
};

function fecharfiltro3d(){
    document.getElementById("fecharfiltro3d").style.display = "none";
    document.getElementById("filtro3d").style.display = "block";
};

function filtroClassificacao(value){
    switch(value){
        case 'livre':
            break;
        case '10':
            break;
        case '12':
            break;
        case '14':
            break;
        case '16':
            break;
        case '18':
            break;           
    }
};