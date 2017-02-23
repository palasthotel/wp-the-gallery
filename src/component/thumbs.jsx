import Component from './component.jsx';

class Thumb extends Component {
	/**
	 *
	 * @param {ItemData} data
	 * @param {func} onclick
	 */
	constructor(data, onclick) {
		super();
		this._data = data;
		this.get().addEventListener("click", onclick);
	}
	
	render() {
		
		const item = this._data;
		
		if (!this._data.isThumbable()) {
			this.get().className = "the-gallery__thumb is-not-thumbable";
			this.get().style.display = "none";
			return this.get();
		}
		
		this.get().className = "the-gallery__thumb";
		
		
		if (item.getCaption() != "") {
			this.get().setAttribute("title", item.getCaption());
		}
		/**
		 * now load image
		 */
		if (item.getSource() != "") {
			this.get().style.backgroundImage = "url(" + item.getSource() + ")";
		}
		return this.get();
	}
	
	updateActive(active_data_item) {
		if (!this._data.isThumbable()) return;
		if (active_data_item == this._data) {
			this.get().className = "the-gallery__thumb is-active";
			return true;
		} else {
			this.get().className = "the-gallery__thumb";
		}
		return false;
	}
}

/**
 * thumbs
 */
export default class Thumbs extends Component {
	/**
	 *
	 * @param {Array.ItemData} data array of
	 * @param {GalleryEvent} events
	 */
	constructor(data, events) {
		super();
		this._data = data;
		this._thumbs = [];
		this._events = events;
		this._events.addListener(this._events.EVENTS().PAGE_ACTIVE, this.updateActive.bind(this));
	}
	
	/**
	 * render thumbs
	 * @return {Element}
	 */
	render() {
		this.get().className = "the-gallery__thumbs";
		
		if (typeof  this._stage == typeof undefined) {
			this._stage = document.createElement("div");
			this._stage.className = "the-gallery__thumbs--stage";
			this.get().appendChild(this._stage);
		}
		
		/**
		 * remove all children
		 */
		while (this._stage.firstChild) {
			this._stage.removeChild(this._stage.firstChild);
		}
		
		let not_thumbed = 0;
		for (let i = 0; i < this._data.length; i++) {
			this._thumbs.push(new Thumb(this._data[i], this.onClick.bind(this, this._data[i], i)));
			this._stage.appendChild(this._thumbs[i].render());
			if (this._data[i].isThumbable()) {
				// this._thumbs[i].get().style.left=((i-not_thumbed)*75)+"px";
			} else {
				not_thumbed++;
			}
		}
		
		return this.get();
	}
	
	moveThumbs(active_index = 0) {
		let width = this.get().clientWidth;
		let item_width = this._stage.firstChild.clientWidth;
		let thumb_position_left = item_width * active_index;
		
		let left = 0;
		if (thumb_position_left > ( (width / 2) - item_width )) {
			left = (item_width * active_index * -1) + (width / 2);
		}
		
		if(left > 0) left = 0;
		
		this._stage.style.left = left + "px";
		
	}
	
	/**
	 *  on page change
	 * @param {ItemData} item_data
	 */
	updateActive(item_data) {
		let i = 0;
		let active_index = 0;
		for (let thumb of this._thumbs) {
			if (thumb.updateActive(item_data)) active_index = i;
			i++;
		}
		this.moveThumbs(active_index);
	}
	
	/**
	 * expose thumb click to world
	 * @param {ItemData} data
	 * @param {int} position
	 */
	onClick(data, position) {
		this._events.trigger(this._events.EVENTS().THUMB_CLICK, position, data);
	}
}

