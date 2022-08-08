function calcularPropina () {
    let monto = document.getElementById("monto").value
    let personas = document.getElementById("personas").value
    const propina = 0.10
    let propinaCalculada = monto * propina / personas
    let total = parseInt(monto) + parseInt(propinaCalculada)
    document.getElementById("montopropina").innerHTML = propinaCalculada
    document.getElementById("total").innerHTML = total
}