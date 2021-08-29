

function bttShowAssento(){
    MostrarAssentos();
    document.getElementById("assento").style.display = "block";
    document.getElementById("lista_sessao").style.display = "none";
};

function bttShowDesAssento(){
    
    document.getElementById("assento").style.display = "none";
    document.getElementById("lista_sessao").style.display = "block";
};