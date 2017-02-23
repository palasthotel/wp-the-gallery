import Component from './component.jsx';

/**
 * thumbs
 */
export default class FullScreen extends Component {
	/**
	 *
	 * @param {Array.ItemData} data array of
	 * @param {GalleryEvent} events
	 * @param {object} options
	 */
	constructor(data, events, options) {
		super();
		
		this.props = {
			className: "the-gallery__fullscreen",
			innerHTML: "Fullscreen",
		};
		Object.assign(this.props, options);
		
		console.log(options, this.props);
		
		
		this._data = data;
		this._events = events;
		this.ON = this._events.EVENTS().FULLSCREEN_ON;
		this.OFF = this._events.EVENTS().FULLSCREEN_OFF;
		this.TOGGLE = this._events.EVENTS().FULLSCREEN_TOGGLE;
		this.get().addEventListener("click", this.emit_event.bind(this));
	}
	
	/**
	 * render button
	 * @return {Element}
	 */
	render() {
		this.get().className = this.props.className;
		this.get().innerHTML = this.props.innerHTML;
		return this.get();
	}
	
	/**
	 * emit the clicked fullscreen event
	 * @param e
	 */
	emit_event(e){
		this._events.trigger(this.TOGGLE);
	}
	
}

