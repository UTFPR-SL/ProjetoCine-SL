function limparBotoes(){
    document.getElementById("btnMostrarSessoes").style.display = "none";
    document.getElementById("btnCriarSessao").style.display = "none";
    document.getElementById("btnMostrarFilmes").style.display = "none";
    document.getElementById("btnCriarFilme").style.display = "none";
    document.getElementById("btnMostrarUsuarios").style.display = "none";
    document.getElementById("btnAdicionarUsuario").style.display = "none";
};

function botoesFilmes(){
    limparBotoes();
    document.getElementById("btnMostrarFilmes").style.display = "block";
    document.getElementById("btnCriarFilme").style.display = "block";
    bttShowFilmes();
};

function botoesSessoes(){
    limparBotoes();
    document.getElementById("btnMostrarSessoes").style.display = "block";
    document.getElementById("btnCriarSessao").style.display = "block";
    bttShowSessoes();
};

function botoesUsuarios(){
    limparBotoes();
    document.getElementById("btnMostrarUsuarios").style.display = "block";
    document.getElementById("btnAdicionarUsuario").style.display = "block";
    bttShowUsuario();
};

