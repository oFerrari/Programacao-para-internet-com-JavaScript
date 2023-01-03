function soma(n1,n2){
    return n1+n2;
}

function setReplace(frase, nome,novo_nome){
    return frase.replace(nome,novo_nome)
}

alert(soma(5,10))
frase = "Vai brasil"
alert(setReplace(frase,"brasil","japao"))

function validaIdade(i){
    if(i >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

let idade = prompt("Informe uma idade: ")

console.log(validaIdade(idade))