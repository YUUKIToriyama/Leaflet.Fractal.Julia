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
			north: 2.0,
			south: -2.0,
			west: -2.0,
			east: 2.0
		})
		return tile
	}

	static async init() {
		await init();
	}
}