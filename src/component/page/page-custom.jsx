import PageBase from './page-base.jsx';

export default class PageCustom extends PageBase {
	
	/**
	 * ----------------------------
	 * rendering
	 * ----------------------------
	 */
	render() {
		
		const item = this._data;
		
		const render = item.getRenderFunction();
		
		this.get().innerHTML = "";
		
		const result = render(this.get());
		
		if (typeof result == typeof "") {
			if (this.get().innerHTML != "") {
				console.info(`It seems that you manipulated the galleries custom page dom 
				element as well as you do not return null. 
				Your changes will be overwritten...`);
			}
			this.get().innerHTML = result;
		}
		
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