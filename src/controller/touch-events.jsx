export default class TouchEvent {
	/**
	 *
	 * @param {Node} element
	 */
	constructor(element) {
		this._element = element;
		element.addEventListener("touchstart", this.handleStart.bind(this), false);
		element.addEventListener("touchend", this.handleEnd.bind(this), false);
		element.addEventListener("touchcancel", this.handleCancel.bind(this), false);
		element.addEventListener("touchmove", this.handleMove.bind(this), false);
		
		/**
		 * reset to initial state
		 */
		this.state = {
			start: {
				x: null,
				y: null,
			},
			offset: {
				x: 0,
				y: 0,
			},
			is_multitouch: false,
		};
		this.reset();
		
		/**
		 * event listeners
		 * @private
		 */
		this._on_touch = function () {
		};
		this._on_touch_start = function () {
		};
		this._on_touch_stop = function () {
		};
	}
	
	/**
	 *
	 * @param {Event} e
	 */
	handleStart(e) {
		// e.preventDefault();
		if(e.touches.length > 1){
			this.state.is_multitouch = true;
			return;
		}
		this.reset();
		this.state.start.x = e.changedTouches[0].pageX;
		this.state.start.y = e.changedTouches[0].pageY;
		
		this._on_touch_start();
	}
	
	/**
	 *
	 * @param {Event} e
	 */
	handleMove(e) {
		if(this.state.is_multitouch){
			return;
		}
		console.log("handle move!");
		const x = e.changedTouches[0].pageX;
		const y = e.changedTouches[0].pageY;
		this.state.offset.x = x - this.state.start.x;
		this.state.offset.y = y - this.state.start.y;
		this.sendTouchEvent();
	}
	
	/**
	 *
	 * @param {Event} e
	 */
	handleEnd(e) {
		if(e.touches.length > 0){
			/**
			 * if there is a finger left prevent multi touch confusion
			 */
			return;
		}
		if(!this.state.is_multitouch){
			this._on_touch_stop(this.state.offset.x, this.state.offset.y);
		}
		this.state.is_multitouch = false;
		this.reset();
	}
	
	/**
	 *
	 * @param {Event} e
	 */
	handleCancel(e) {
		this.reset();
		this.sendTouchEvent();
	}
	
	/**
	 * send touch position change
	 */
	sendTouchEvent() {
		this._on_touch(this.state.offset.x, this.state.offset.y);
	}
	
	/**
	 *
	 */
	reset() {
		this.state.start.x = null;
		this.state.start.y = null;
		this.state.offset.x = 0;
		this.state.offset.y = 0;
	}
	
	/**
	 *
	 * @param {func} fn
	 */
	setOnTouchListener(fn) {
		this._on_touch = fn;
	}
	
	/**
	 *
	 * @param {func} fn
	 */
	setOnTouchStartListener(fn) {
		this._on_touch_start = fn;
	}
	
	/**
	 *
	 * @param {func} fn
	 */
	setOnTouchStopListener(fn) {
		this._on_touch_stop = fn;
	}
};