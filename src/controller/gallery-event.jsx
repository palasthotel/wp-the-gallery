const EVENTS = {
	THUMB_CLICK: 'thumb_click',
	PAGE_RATIO: "page_ratio",
	PAGE_ACTIVE: "page_active",
	PAGE_INACTIVE: "page_inactive",
	PAGE_CLICK: "page_click",
	NEXT: "next",
	PREV: "prev",
	TYPE_SLIDE: "slide",
	TYPE_NAVIGATION_CLICK: "navigation_click",
	TYPE_THUMBNAIL_CLICK: "thumbnail_click",
	FULLSCREEN_ON: "fullscreen_on",
	FULLSCREEN_OFF: "fullscreen_off",
	FULLSCREEN_TOGGLE: "fullscreen_toggle",
};

/**
 * static event handler
 */
export default class GalleryEvent {
	
	constructor() {
		/**
		 * registered listeners
		 * @type {Array.func}
		 * @private
		 */
		this._listeners = {};
	}
	
	/**
	 * All event identifiers
	 * @return {object}
	 */
	EVENTS() {
		return EVENTS;
	}
	
	/**
	 *
	 * @param event
	 * @return {Array}
	 * @private
	 */
	_getListeners(event) {
		if (typeof this._listeners[event] == typeof undefined) {
			this._listeners[event] = [];
		}
		return this._listeners[event];
	}
	
	/**
	 * add listener callback
	 * @param event
	 * @param callback
	 */
	addListener(event, callback) {
		this._getListeners(event).push(callback);
	}
	
	/**
	 * trigger an event
	 * @param event
	 * @param data
	 */
	trigger(event, data) {
		let listeners = this._getListeners(event);
		for (let i = 0; i < listeners.length; i++) {
			listeners[i](data);
		}
	}
}