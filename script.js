//selecionar os elementos

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#converte-btn");
const messageElement = document.getElementById("message")

//função para converter as unidades
function convert(){

    const tovalue = toElement.value
    const fromvalue = fromElement.value

    if(fromvalue == tovalue){
        outputElement.value = inputElement.value
        
        messageElement.textContent = ""
        return
    }

    // converter a entrada padrão
    let meters
    switch (fromvalue) {
        case "m": 
            meters = inputElement.value
            break;
        case "km": 
            meters = inputElement.value / 1000
            break;
        case "cm": 
            meters = inputElement.value * 100
            break;
        case "mm": 
            meters = inputElement.value * 1000
            break;
    }
    //converter metros para unidade de saida
    let result
    switch (tovalue) {
        case "m":
            result = meters
            break;
        case "km":
                result = meters / 1000
                break;
        case "cm":
                    result = meters * 100
                    break;
        case "mm":
                        result = meters * 1000
                        break;
    }

// exibir resultado no input
    outputElement.value = result
// exibir resultado na mensagem
const fromlabel = fromElement.options[fromElement.selectedIndex].text
const tolabel = toElement.options[toElement.selectedIndex].text

const message = `${inputElement.value} ${fromlabel} equivale a ${result} ${tolabel}`
messageElement.textContent = message

return
}

convertButton.addEventListener("click",convert)