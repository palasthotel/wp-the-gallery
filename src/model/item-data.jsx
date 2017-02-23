/**
 * collect data from gallery item
 */
export default class ItemData {
	/**
	 *
	 * @param {Element} source
	 */
	constructor(source) {
		this._source = source;
		this._default_return = "";
		this._ratio = 1;
		this._height = 0;
		this._is_thumbable = true;
		this._render_function = () => {
		};
	}
	
	getSource() {
		if (this._source == null) return this._default_return;
		return this._source.querySelector("img").src;
	}
	
	getSourceSet() {
		if (this._source == null) return this._default_return;
		return this._source.querySelector("img").getAttribute("srcset");
	}
	
	getCaption() {
		if (this._source == null) return this._default_return;
		let caption_element = this._source.querySelector(".wp-caption-text");
		return (caption_element) ? caption_element.innerHTML : "";
	}
	
	getAnker() {
		if (this._source == null) return this._default_return;
		let found = this.getLink().match(/^http:\/\/[^\/]+(.*)$/i);
		return found[1];
	}
	
	getLink() {
		if (this._source == null) return this._default_return;
		if(this._source.querySelector("a")){
			return this._source.querySelector("a").getAttribute("href");
		}
		return this.getSource();
	}
	
	setRatio(ratio) {
		this._ratio = ratio;
	}
	
	getRatio() {
		return this._ratio;
	}
	
	setHeight(height) {
		this._height = height;
	}
	
	getHeight() {
		return this._height;
	}
	
	setIsThumbable(thumbable) {
		this._is_thumbable = thumbable;
	}
	
	isThumbable() {
		return this._is_thumbable;
	}
	
	setRenderFunction(fn) {
		this._render_function = fn;
	}
	
	getRenderFunction() {
		return this._render_function;
	}
}