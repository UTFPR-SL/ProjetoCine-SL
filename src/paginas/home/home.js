
document.getElementById("assento").style.display = "none";
document.getElementById("lista_filmes").style.display = "none";

function bttShowAssento(event){
    console.log(event)
    MostraAssento(event);
    document.getElementById("assento").style.display = "block";
    document.getElementById("lista_sessao").style.display = "none";
}

function bttShowDesAssento(){
    
    document.getElementById("assento").style.display = "none";
    document.getElementById("lista_sessao").style.display = "block";
};

function ShowSessao(){
    
    document.getElementById("lista_filmes").style.display = "none";
    document.getElementById("lista_sessao").style.display = "block";
};

function ShowFilme(){
    
    document.getElementById("lista_filmes").style.display = "block";
    document.getElementById("lista_sessao").style.display = "none";
};