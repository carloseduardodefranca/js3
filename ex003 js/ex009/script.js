var horas = Number(prompt("que horas são?"))

if(horas >= 5 && horas <= 11){
    alert(`ainda é manhã`)
}else if(horas >= 12 &&  17) {
    alert(`já e tarde`)
}else if(horas >= 18 &&  23){
    alert(`é de noite`)
}else if(horas >= 0 && 4){
    alert(`sex time`)
}