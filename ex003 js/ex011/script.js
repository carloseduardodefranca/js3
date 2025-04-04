var compra = Number(prompt(``))
var codigo = prompt(``)
var desconto = compra * (10/100)
var total =  compra - desconto

if(compra == "DESCONT10"){
alert(`desconto aplicado`)
}else{
    alert(`codigo errado`)
}

alert(`preço original ${compra}
    agora é ${total}`)