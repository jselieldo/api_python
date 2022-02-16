function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url,false)
    request.send()
    return request.responseText
}

function criarLinha(evento){
    linha=document.createElement("tr");
    tdIdEvento=document.createElement("td");
    tdCliente=document.createElement("td");
    tdTema=document.createElement("td");
    tdData=document.createElement("td");
    tdValorTotal=document.createElement("td");
    tdEntrada=document.createElement("td");
    tdFormaPagamento=document.createElement("td");

    tdIdEvento.innerHTML=evento.idevento
    tdCliente.innerHTML=evento.cliente
    tdTema.innerHTML=evento.tema
    tdData.innerHTML=evento.data
    tdValorTotal.innerHTML=evento.valor_total
    tdEntrada.innerHTML=evento.entrada
    tdFormaPagamento.innerHTML=evento.forma_pagamento

    linha.appendChild(tdIdEvento);
    linha.appendChild(tdCliente);
    linha.appendChild(tdTema);
    linha.appendChild(tdData);
    linha.appendChild(tdValorTotal);
    linha.appendChild(tdEntrada);
    linha.appendChild(tdFormaPagamento);

    return linha;
}

function main(){
    let data=fazGet("http://localhost:8000/resultado");
    let eventos=JSON.parse(data);
    let tabela = document.getElementById("tabela")

    eventos.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha);

    });

//Para cada usuario criar linha e add na tabela

}

main()