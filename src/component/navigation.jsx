import Component from './component.jsx';

export default class Navigation extends Component {
	
	/**
	 * construct
	 */
	constructor(options) {
		super();
		
		this.props = {
			next: {
				innerHTML: "next ->",
				element: "div",
				className: "the-gallery__navigation--button the-gallery__navigation--next",
			},
			prev: {
				innerHTML: "<- prev",
				element: "div",
				className: "the-gallery__navigation--button the-gallery__navigation--prev",
			}
		};
		
		Object.assign(this.props.next, options.next);
		Object.assign(this.props.prev, options.prev);
		
		this._on_next = () => {
			console.log("Not implemented");
		}
		this._on_prev = () => {
			console.log("Not implemented");
		}
	}
	
	/**
	 *
	 * @return {Element} rendered element
	 */
	render() {
		this.setClass();
		let _navigation = this.get();
		
		
		while (_navigation.firstChild) {
			_navigation.removeChild(this._navigation.firstChild);
		}
		
		const prev = this.get_button(this.props.prev);
		const next = this.get_button(this.props.next);
		
		_navigation.appendChild(prev);
		_navigation.appendChild(next);
		
		next.addEventListener("click", this.onChange.bind(this, 1));
		prev.addEventListener("click", this.onChange.bind(this, -1));
		
		return this.get();
	}
	
	get_button(config) {
		/**
		 * else build by parts
		 * @type {Element}
		 */
		const element = document.createElement(config.element);
		element.className = config.className;
		element.innerHTML = config.innerHTML;
		return element;
	}
	
	setClass(classnames = "") {
		this.get().className = "the-gallery__navigation " + classnames;
	}
	
	toggleDisplay() {
		console.log(this.get().className.indexOf("is-hidden"));
		if (this.get().className.indexOf("is-hidden") >= 0) {
			this.show();
		} else {
			this.hide();
		}
	}
	
	hide() {
		this.setClass("is-hidden");
	}
	
	show() {
		this.setClass();
	}
	
	/**
	 * triggered on change
	 * @param offset
	 */
	onChange(offset) {
		if (offset < 0) {
			this._on_prev(Math.abs(offset));
		} else {
			this._on_next(Math.abs(offset));
		}
	}
	
	/**
	 * set on prev callback
	 * @param callback
	 */
	setOnPrev(callback) {
		this._on_prev = callback;
	}
	
	/**
	 * set on next callback
	 * @param callback
	 */
	setOnNext(callback) {
		this._on_next = callback;
	}
	
	/**
	 * sets and overwrites on next and on prev callback
	 * @param callback
	 */
	setOnChange(callback) {
		this.setOnNext((offset) => {
			callback(offset)
		});
		this.setOnPrev((offset) => {
			callback(offset * -1);
		});
	}
}