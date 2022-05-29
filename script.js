function calcular() {
    let a = document.getElementById("cx1").value
    let b = document.getElementById("cx2").value
    let c = document.getElementById("cx3").value
    let res = document.getElementById("resultado")

    if (a.length == 0 || b.length == 0 || c.length == 0 || a == 0) {
        alert("[ERRO] equação do 2º grau inválida!")
    } else {
            let delta = (b*b)-4*a*c
            let x1 = (-b + Math.sqrt(delta)) / (2*a)
            let x2 = (-b - Math.sqrt(delta)) / (2*a)
            res.innerHTML = " "
            if (delta < 0) {
                res.innerHTML = `&Delta; = ${delta} (Não existe raízes reais!)`
            } else if (delta >= 0) {
                res.innerHTML = `${a}x² + (${b}x) + (${c}) = 0 <br><br>`
                res.innerHTML += `&Delta; = ${delta}<br><br>`
                res.innerHTML += `Raíz1: <strong>${x1}</strong> <br><br>`
                res.innerHTML += `Raís2: <strong>${x2}</strong>`
            }
        } 
}