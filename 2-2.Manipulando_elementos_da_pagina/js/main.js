function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    console.log(document.getElementById("agradecimento"))
    //alert("cliquei")
}

function redirecionar(){
    //window.open("https://github.com/oFerrari")
    window.location.href =  "https://github.com/oFerrari"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Texto alterado"
    elemento.innerHTML = "Texto alterado"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina Carregada")
}

function funcaoChange(elemento){
    alert(elemento.value)
}