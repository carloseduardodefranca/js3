var temperatura = Number(prompt("Digite 1 para celsius ou 2 para fahrenheit"));
var valor = Number(prompt("Digite o valor a ser convertido"));
var conversorC =  (valor * 1.8) + 32
var conversorF = (valor - 32) * 5/9

if(temperatura == 1){
    alert("O valor em fahrenheit é: " + conversorC)
}else if(temperatura == 2 ){
    alert("O valor em celsius é: " + conversorF)
}