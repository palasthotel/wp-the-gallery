import Gallery from './component/gallery.jsx';

/**
 * holder for all galleries
 */
class WPGalleries {
	
	/**
	 * collect data
	 * @param selector
	 * @param options
	 */
	constructor(selector, options) {
		this._options = options;
		this._gs = [];
		this._endabled = false;
		this._galleries = document.querySelectorAll(selector);
		if (this._galleries.length > 0) {
			this.enable();
		}
	}
	
	
	/**
	 * iterate over all galleries
	 * @param callback
	 * @private
	 */
	
	_iterate(callback) {
		for (let i = 0; i < this._galleries.length; i++) {
			callback(this._galleries[i], i);
		}
	}
	
	/**
	 * enable javascript galleries rendering
	 */
	enable() {
		if (this._endabled) return;
		this._gs = [];
		this._iterate((gallery, i) => {
			let ga = new Gallery(gallery, this._options);
			this._gs.push(ga);
			ga.enable();
			
		});
		this._endabled = true;
	}
	
	/**
	 * disable javascript galleries rendering
	 */
	disable() {
		if (!this._endabled) return;
		this._iterate((gallery, i) => {
			this._gs[i].disable();
		});
		this._gs = [];
		this._endabled = false;
	}
}

/**
 * get global object
 */
const TG = window.TheGallery;
TG.WPGalleries = WPGalleries;
TG.WPGallery = Gallery;

// move to core
TG.events = {
	change_content: "onGalleryContentChange",
};

if (TG.auto) {
	
	// what we can do manually for every gallery
	window.wp_galleries = new WPGalleries(".gallery", (TG.options || {}));
	
	window.onload = function () {
		window.document.body.addEventListener(TG.events.change_content, function (e) {
			// console.log("gallery content has changed", e.details);
		});
	};
	
}


