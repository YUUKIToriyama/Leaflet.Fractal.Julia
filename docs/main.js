const div = document.getElementById("viewer")
const viewer = L.map(div, {
    center: [0, 0],
    zoom: 0,
    crs: L.CRS.Simple
})
await JuliaSetLayer.init()
const juliaSetLayer = new JuliaSetLayer({
    re: -0.15,
    im: 0.65
})
viewer.addLayer(juliaSetLayer)

document.getElementById("display").addEventListener("click", () => {
    const input_real = document.getElementById("real")
    const input_imaginary = document.getElementById("imaginary")
    if (input_real.value === "" || input_imaginary.value === "") {
        alert("定数を設定してください")
    }
    const c = {
        re: parseFloat(input_real.value),
        im: parseFloat(input_imaginary.value)
    }
    viewer.eachLayer(layer => viewer.removeLayer(layer))
    viewer.addLayer(new JuliaSetLayer(c))
})