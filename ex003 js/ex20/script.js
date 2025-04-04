var valor = Number(prompt(`Digite o valor da sua compra `))

if(valor < 20){
    alert(`comprou barato`)
}else if(valor >= 20 && valor <= 100){
alert(`preço medio`)
}else if(valor > 100){
    alert(`tá muito caro`)
}