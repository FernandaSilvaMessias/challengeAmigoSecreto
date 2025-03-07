let amigos = [];
////////////////////////////////////////////////////////////////
function adicionarAmigos() {
    
    let inputAmigo = document.getElementById("nomeAmigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        alert("Digite o nome de um amigo");
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = ""; 
    inputAmigo.focus();
    atualizarLista();
}
//////////////////////////////////////////////////////////////
function atualizarLista() {

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    for (i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        listaAmigos.appendChild(item);
    }
}
//////////////////////////////////////////////////////////////////
function sortearAmigos() {
    if (amigos.length === 0) {
        alert("Campo em branco, por favor digitar um nome!");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("ListaAmigo");
    limparLista.innerHTML = ""; 

    amigos = [];
    atualizarLista();
}

