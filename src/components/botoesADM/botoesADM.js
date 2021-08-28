
function limparTelaADM(){
    document.getElementById("filtroSessaoADM").style.display = "none";
    document.getElementById("lista_sessao_adm").style.display = "none";
    document.getElementById("criarSessao").style.display = "none";
    document.getElementById("addFilme").style.display = "none";
    document.getElementById("addLogin").style.display = "none";
    document.getElementById("lista_filmes").style.display = "none";
    document.getElementById("filtroFilme").style.display = "none";
    document.getElementById("lista_usuario").style.display = "none";
    document.getElementById("filtroUsuario").style.display = "none";
};

function bttShowSessoes(){
    listarSessoesADM();
    limparTelaADM();
    document.getElementById("filtroSessaoADM").style.display = "block";
    document.getElementById("lista_sessao_adm").style.display = "block";
};

function bttAddSessao(){
    limparTelaADM();
    listarFilmes();
    document.getElementById("criarSessao").style.display = "block";
};

function bttShowFilmes(){
    limparTelaADM();
    filmesdaLista();
    document.getElementById("lista_filmes").style.display = "block";
    document.getElementById("filtroFilme").style.display = "block";
};

function bttAddFilme(){
    limparTelaADM();
    document.getElementById("addFilme").style.display = "block";
};

function bttAddLogin(){
    limparTelaADM();
    document.getElementById("addLogin").style.display = "block";
};
function bttShowUsuario(){
    limparTelaADM();
    listarUsuarios();
    document.getElementById("lista_usuario").style.display = "block";
    document.getElementById("filtroUsuario").style.display = "block";
};