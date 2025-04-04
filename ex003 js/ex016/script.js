var regiao = Number(prompt(`informe sua regiao
    [1]Brasil
    [2]eua`))
    var idade =  Number(prompt(`Digite sua idade`))

    if(regiao == 1 && idade >= 18){
        alert(`Brasil ${idade} anos= maior de idade `)
    }else if(regiao == 2 && idade >= 21){
        alert(`EUA ${idade} anos= maior de idade`)
    }