var peso = Number(prompt("Informe seu peso"))
var altura = Number(prompt("Informe sua altura"))

var IMC = peso / altura ** 2

if(imc < 18.5) {
    alert(`vc está abaixo do peso`)
}else if(imc >= 18.5 && 24.9) {
    alert(`seu peso é normal`)
}else if(imc >= 25 && 29.9) {
    alert(`sobre peso`)
}else if(imc > 30){
    alert(`VAI EXPLODIR KRAI`)
}