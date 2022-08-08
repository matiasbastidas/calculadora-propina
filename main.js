const calcularPropina = () => {
    monto = document.getElementById("monto").value
    personas = document.getElementById("personas").value
    const propina = 0.10
    propinaCalculada = (monto * propina) / personas
    total = parseInt(monto) + parseInt(propinaCalculada)
    document.getElementById("montopropina").innerHTML = propinaCalculada
    document.getElementById("total").innerHTML = total
}