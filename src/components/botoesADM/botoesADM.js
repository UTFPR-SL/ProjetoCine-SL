
function limparTelaADM(){
    document.getElementById("lista_sessao").style.display = "none";
    document.getElementById("criarSessao").style.display = "none";
    document.getElementById("addFilme").style.display = "none";
    document.getElementById("addLogin").style.display = "none";
    document.getElementById("lista_filmes").style.display = "none";
    document.getElementById("lista_usuario").style.display = "none";
};

function bttShowSessoes(){
    listarSessoes();
    limparTelaADM();
    document.getElementById("lista_sessao").style.display = "block";
};

function bttAddSessao(){
    limparTelaADM();
    listarFilmes();
    document.getElementById("criarSessao").style.display = "block";
};

function bttShowFilmes(){
    filmesdaLista();
    limparTelaADM();
    document.getElementById("lista_filmes").style.display = "block";
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

function bttAddLogin(){
    limparTelaADM();
    document.getElementById("addLogin").style.display = "block";
};
function bttShowUsuario(){
    listarUsuarios();
    limparTelaADM();
    document.getElementById("lista_usuario").style.display = "block";
};