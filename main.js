const calcularPropina = () => {
    monto = document.getElementById("monto").value
    personas = document.getElementById("personas").value

    const propinaChile = 0.10

    propinaCalculada = (monto * propinaChile) / personas
    total = parseInt(monto) + parseInt(propinaCalculada)
    
    document.getElementById("montopropina").innerHTML = propinaCalculada
    document.getElementById("total").innerHTML = total
}