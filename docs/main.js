const div = document.getElementById("viewer")
div.style.width = "1000px"
div.style.height = "1000px"

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