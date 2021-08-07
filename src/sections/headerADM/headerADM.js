function limparBotoes(){
    document.getElementById("btnMostrarSessoes").style.display = "none";
    document.getElementById("btnCriarSessao").style.display = "none";
    document.getElementById("btnMostrarFilmes").style.display = "none";
    document.getElementById("btnCriarFilme").style.display = "none";
    document.getElementById("btnMostrarUsuarios").style.display = "none";
    document.getElementById("btnAdicionarUsuario").style.display = "none";
    document.getElementById("filtro3d").style.display = "none";
    document.getElementById("fecharfiltro3d").style.display = "none";
    document.getElementById("filtroClassificacao").style.display = "none";
};

function botoesFilmes(){
    limparBotoes();
    document.getElementById("btnMostrarFilmes").style.display = "block";
    document.getElementById("btnCriarFilme").style.display = "block";
    document.getElementById("filtro3d").style.display = "block";
    document.getElementById("filtroClassificacao").style.display = "block";
};

function botoesSessoes(){
    limparBotoes();
    document.getElementById("btnMostrarSessoes").style.display = "block";
    document.getElementById("btnCriarSessao").style.display = "block";
};

function botoesUsuarios(){
    limparBotoes();
    document.getElementById("btnMostrarUsuarios").style.display = "block";
    document.getElementById("btnAdicionarUsuario").style.display = "block";
};

