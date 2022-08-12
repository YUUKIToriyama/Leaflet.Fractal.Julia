import init, { JuliaSet } from '@toriyama/draw-julia'
import * as L from "leaflet"

interface Complex {
	re: number
	im: number
}

export class JuliaSetLayer extends L.GridLayer {
	julia: JuliaSet

	constructor(constant: Complex, gridLayerOptions: L.GridLayerOptions) {
		super(gridLayerOptions)
		this.julia = JuliaSet.new(constant)
	}

	protected createTile(coords: L.Coords): HTMLElement {
		// タイルのサイズを取得
		const tileSize = this.getTileSize()
		// ジュリア集合を描画する<canvas>要素を作成
		let tile = L.DomUtil.create("canvas")
		tile.width = tileSize.x
		tile.height = tileSize.y
		// 描画
		this.julia.draw(tile, {
			south: coords.y / Math.pow(2, coords.z),
			north: (coords.y - 1) / Math.pow(2, coords.z),
			west: (coords.x) / Math.pow(2, coords.z),
			east: (coords.x + 1) / Math.pow(2, coords.z),
		})
		return tile
	}

	static async init() {
		await init();
	}
}