import PageBase from './page-base.jsx';

export default class ItemImage extends PageBase {
	
	/**
	 * ----------------------------
	 * rendering
	 * ----------------------------
	 */
	render() {
		
		const item = this.getData();
		this._caption = null;
		
		let img = new Image();
		img.className = "the-gallery__page-img";
		img.title = item.getCaption();
		
		this._image_wrapper = document.createElement("div");
		this._image_wrapper.className = "the-gallery__page-image";
		this._image_wrapper.appendChild(img);
		
		this.get().appendChild(this._image_wrapper);
		
		if (item.getCaption() != "") {
			this._caption = document.createElement("div");
			this._caption.className = "the-gallery__page-caption";
			this._caption.innerHTML = item.getCaption();
			this.get().appendChild(this._caption);
		}
		
		/**
		 * now load image
		 */
		img.onload = () => {
			let height = img.height;
			if (this._caption != null) {
				height += this._caption.clientHeight;
			}
			const ratio = parseInt(height) / parseInt(img.width);
			this.getData().setRatio(ratio);
			this.getData().setHeight(height);
			this.trigger(this.EVENTS.PAGE_RATIO);
		};
		img.src = item.getSource();
		
		this.update();
		
		return this.get();
	}
	
	/**
	 * ----------------------------
	 * events
	 * ----------------------------
	 */
	
	
	/**
	 * ---------------------------
	 * other functions
	 * ---------------------------
	 */
	
}