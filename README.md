# Leaflet.Fractal.Julia

Display Julia Set on Leaflet.js

![julia set](https://i.imgur.com/Ju2UYH2.png)

## Abstract

ジュリア集合を表示させることができる Leaflet プラグインです。
ズームイン・アウトをするたびに計算処理が行なわれ、タイルがレンダリングされます。
ジュリア集合の計算には WebAssembly を用いており、高速なレンダリング処理を可能にしています。

## Usage

```html
<html>
	<body>
		<div id="viewer" style="width: 1000px; height: 1000px"></div>
		<script type="module">
			const div = document.getElementById("viewer");
			// L.Mapを作成
			const viewer = L.map(div, {
				center: [0, 0],
				zoom: 0,
				crs: L.CRS.Simple,
			});
			// initメソッドを呼び、Wasmをロード
			await JuliaSetLayer.init();
			// ジュリア集合を定義
			const juliaSetLayer = new JuliaSetLayer({
				re: -0.15,
				im: 0.65,
			});
			// レイヤーとしてL.Mapに追加
			viewer.addLayer(juliaSetLayer);
		</script>
	</body>
</html>
```

## Gallery

|           $-0.15 + 0.65i$            |         $0.11131 - 0.6289i$          |          $-0.4004 - 0.585i$          |
| :----------------------------------: | :----------------------------------: | :----------------------------------: |
| ![](https://i.imgur.com/f5WjiVK.png) | ![](https://i.imgur.com/unUGUpV.png) | ![](https://i.imgur.com/YOLgUhd.png) |

## Related Project

- https://github.com/IvanSanchez/Leaflet.MandelbrotGL
- https://rustwasm.github.io/wasm-bindgen/examples/julia.html

## Author

Torichan([@CoconMap](https://twitter.com/coconmap))
