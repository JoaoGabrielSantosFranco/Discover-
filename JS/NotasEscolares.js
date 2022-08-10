function getScore(i) {
    if (i >= 90) {
        valor = "A"
    }
    if (i <= 89 && i >= 80) {
        valor = "B"
    }
    if (i <= 79 && i >= 70) {
        valor = "C"
    }
    if (i <= 69 && i >= 60) {
        valor = "D"
    }
    if (i < 60) {
        valor = "F"
    }
    console.log(valor)
}
getScore(80)