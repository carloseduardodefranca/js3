var nota1 = Number(prompt(`digite sua nota`))
var nota2 = Number(prompt(`digite sua nota`))
var nota3 = Number(prompt(`digite sua nota`))

var media = (nota1 + nota2 + nota3) /3

if(media >= 6){
    alert(`sua media é ${media.toFixed(1)}: aprovado`)
}else{
    alert(`sua media é ${media.toFixed(1)}: reprovado`)
}