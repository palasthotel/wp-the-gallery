/**
 * this is how an component should work
 */
export default class Component {
	
	/**
	 * construct
	 */
	constructor() {
		/**
		 *
		 * @type {Element}
		 * @private
		 */
		this._element = document.createElement("div");
	}
	
	/**
	 * get dom element for the component
	 * @return {Element}
	 */
	get() {
		return this._element;
	}
	
	/**
	 * destroy this component and remove from dom
	 */
	destroy() {
		this.get().parentNode.removeChild(this.get());
	}
}