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
		let y = -coords.y
		this.julia.draw(tile, {
			south: coords.y,
			north: coords.y - 1,
			west: coords.x,
			east: coords.x + 1,
		})
		return tile
	}

	static async init() {
		await init();
	}
}