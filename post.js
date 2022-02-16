function fazPost(url,body){
    console.log("Body", body)
    let request = new XMLHttpRequest()
    request.open("POST", url,true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload=function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastaEvento(){
    event.preventDefault ()
    let url="http://localhost:8000/eventos"
    let idevento = document.getElementById("idevento").value
    let cliente = document.getElementById("cliente").value
    let tema = document.getElementById("tema").value
    let data = document.getElementById("data").value
    let valor_total = document.getElementById("valor_total").value
    let entrada = document.getElementById("entrada").value
    let forma_pagamento = document.getElementById("forma_pagamento").value

    body={
    "idevento":idevento,
    "cliente":cliente,
    "tema":tema,
    "data":data,
    "valor_total":valor_total,
    "entrada":entrada,
    "forma_pagamento":forma_pagamento
    }

    fazPost(url, body)
    


}