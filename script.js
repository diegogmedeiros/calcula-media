var av1 = parseInt(prompt("Digite sua nota na Av1"))
var av2 = parseInt(prompt("Digite sua nota na Av2"))
var av3 = parseInt(prompt("Digite sua nota na Av3"))
var av4 = parseInt(prompt("Digite sua nota na Av4"))
var media = (av1+av2+av3+av4)/4

alert("Sua média foi " + media )
    if ( media >= 7){
        alert("Parabéns, você foi aprovado!")
        }
    else{
        alert("Você esta de recuperação!")
        }

