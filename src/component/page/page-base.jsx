import Component from '../component.jsx';
import TouchEvent from '../../controller/touch-events.jsx';

export default class PageBase extends Component {
	
	/**
	 *
	 * @param {ItemData} data
	 * @param {GalleryEvent} event the event handler
	 */
	constructor(data, event) {
		super();
		this._data = data;
		this.state = {
			position: 1,
		};
		this._event = event;
		
		this.EVENTS = this._event.EVENTS();
		
		this._touch_events = new TouchEvent(this.get());
		
		this._touch_events.setOnTouchListener(this.onSlide.bind(this));
		this._touch_events.setOnTouchStartListener(this.onSlideStart.bind(this));
		this._touch_events.setOnTouchStopListener(this.onSlideStop.bind(this));
	}
	
	/**
	 * ----------------------------
	 * rendering
	 * ----------------------------
	 */
	update() {
		this.get().className = this.getClassName();
	}
	
	render() {
		console.error("Base has to be extended. Override render and return dom element.");
		return this.get();
	}
	
	/**
	 * ----------------------------
	 * events
	 * ----------------------------
	 */
	onSlideStart() {
		this.get().className = this.getClassName() + " js-handling";
	}
	
	onSlide(offsetx, offsety) {
		let multi = 1;
		if (offsetx < 0) {
			multi *= -1;
		}
		offsetx = Math.log(offsetx * multi) * 2;
		if (offsetx > 29) {
			offsetx = 29;
		}
		this.get().style.transform = "translateX(" + (offsetx * multi) + "px)";
	}
	
	onSlideStop(offsetx, offsety) {
		if (offsetx > 50) {
			this._event.trigger(this.EVENTS.PREV, this.EVENTS.TYPE_SLIDE);
		} else if (offsetx < -50) {
			this._event.trigger(this.EVENTS.NEXT, this.EVENTS.TYPE_SLIDE);
		}
		this.get().style.transform = "";
		this.get().className = this.getClassName();
	}
	
	/**
	 * ---------------------------
	 * other functions
	 * ---------------------------
	 */
	trigger(event, custom) {
		this._event.trigger(event, this.getData(), custom);
	}
	
	getData() {
		return this._data;
	}
	
	getClassName() {
		return "the-gallery__page " + this.getPositionClass();
	}
	
	setPrev() {
		this.state.position = -1;
		this.update();
		this.trigger(this.EVENTS.PAGE_INACTIVE);
	}
	
	setNext() {
		this.state.position = 1;
		this.update();
		this.trigger(this.EVENTS.PAGE_INACTIVE);
	}
	
	setActive() {
		this.state.position = 0;
		this.update();
		this.trigger(this.EVENTS.PAGE_ACTIVE);
		
	}
	
	getPositionClass() {
		switch (this.state.position) {
			case -1:
				return "is-prev";
			case 1:
				return "is-next";
			case 0:
				return "is-active";
		}
	}
	
}