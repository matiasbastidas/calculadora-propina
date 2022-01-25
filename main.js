function calcularPropina () {
    let monto = document.getElementById("monto").value;
    const propina = 0.10;
    let propinaCalculada = monto * propina;
    let total = parseInt(monto) + parseInt(propinaCalculada);
    document.getElementById("montopropina").innerHTML = propinaCalculada;
    document.getElementById("total").innerHTML = total;
}