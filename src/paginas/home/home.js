
document.getElementById("lugares").style.display = "none";
document.getElementById("assento").style.display = "none";


function bttShowAssento(id_sessao){
    console.log(id_sessao)
    MostraAssento(id_sessao);
    document.getElementById("assento").style.display = "block";
    document.getElementById("lista_sessao").style.display = "none";
}

function bttShowDesAssento(){
    document.getElementById("lugares").style.display = "none";
    document.getElementById("assento").style.display = "none";
    document.getElementById("lista_sessao").style.display = "block";
};

function bttSubmitDate(event){
    recebeData(event);
    document.getElementById("lugares").style.display = "block";
};


