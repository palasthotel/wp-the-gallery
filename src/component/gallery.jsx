import Component from './component.jsx';
import {PageImage, PageCustom} from './page/page.jsx';
import Thumbs from './thumbs.jsx';
import FullScreen from './full-screen.jsx';
import Share from './share.jsx';
import Navigation from './navigation.jsx';
import ItemData from './../model/item-data.jsx';
import GalleryEvent from './../controller/gallery-event.jsx';

/**
 * build a javascript silder from wordpress gallery
 */
export default class Gallery extends Component {
	
	/**
	 *
	 * @param {Element} source_gallery
	 * @param options
	 */
	constructor(source_gallery, options) {
		super();
		
		/**
		 * default options
		 */
		this.props = {};
		
		/**
		 * deep copy sub options
		 */
		const option_classes = Object.assign({},options.classes);
		const option_selectors = Object.assign({},options.selectors);
		
		/**
		 * extend options
		 */
		Object.assign(this.props, {
			custom_pages: [],
			show_thumbs: true,
			show_fullscreen: true,
			show_share: true,
			auto_height: true,
			navigation: {},
			fullscreen: {},
			share:{},
			classes: {},
			selectors: {},
		},options);
		
		Object.assign(this.props.classes,{
			gallery_root: "the-gallery",
			gallery_viewport: "the-gallery__viewport",
			fullscreen: "is-fullscreen",
		}, option_classes);
		
		Object.assign(this.props.selectors, {
			gallery_item: ".gallery-item",
		}, option_selectors);
		
		
		/**
		 * initial state ist first slide
		 * @type {{active: number}}
		 */
		this.state = {
			active: 0,
			ratio: 1,
			max_height: 0,
		};
		
		/**
		 * event system
		 * @type {GalleryEvent}
		 * @private
		 */
		this._event = new GalleryEvent();
		this.EVENT = this._event.EVENTS();
		
		/**
		 * register events
		 */
		this._event.addListener(this.EVENT.NEXT, (event_type) => {
			if (this.EVENT.TYPE_SLIDE == event_type) {
				this._navigation.hide();
			}
			this.onChange(1);
		});
		this._event.addListener(this.EVENT.PREV, (event_type) => {
			if (this.EVENT.TYPE_SLIDE == event_type) {
				this._navigation.hide();
			}
			this.onChange(-1);
		});
		
		this._event.addListener(this.EVENT.PAGE_ACTIVE, (data_item) => {
			this.onContentChange(data_item.getSource());
		});
		
		if(this.props.auto_height){
			this._event.addListener(this.EVENT.PAGE_RATIO, (data_item) => {
				
				const max_height = data_item.getHeight();
				const ratio = data_item.getRatio();
				let changed = false;
				if (this.state.max_height < max_height) {
					this.state.max_height = max_height;
					changed = true;
				}
				if (this.state.ratio < ratio) {
					this.state.ratio = ratio;
					changed = true;
				}
				if (changed) this.updateViewportRatio();
			});
		}
		
		
		/**
		 * the original gallery we use for data collect
		 * @type {Element}
		 * @private
		 */
		this._source_gallery = source_gallery;
		this._items = this._source_gallery.querySelectorAll(this.props.selectors.gallery_item);
		
		/**
		 * this is our handle do not overwrite it
		 * @type {Element}
		 * @private
		 */
		this._viewport = document.createElement("div");
		
		/**
		 * navigation component
		 * @type {Navigation}
		 * @private
		 */
		this._navigation = new Navigation(this.props.navigation);
		this._navigation.setOnChange(this.onChange.bind(this));
		
		/**
		 * init components
		 * @type {Array}
		 * @private
		 */
		this._page_components = [];
		this._data = [];
		const _get_custom_item_data = (position) => {
			for (let page of this.props.custom_pages) {
				if (page.position == position) {
					let item_data = new ItemData(null);
					item_data.setIsThumbable(page.thumb || false);
					item_data.setRenderFunction(page.render || function () {
						});
					return item_data;
				}
			}
			return null;
		};
		
		let custom_offset = 0;
		for (let i = 0; i < this._items.length; i++) {
			let position = i + custom_offset;
			
			/**
			 * add custom page if defined in options
			 */
			let item_data = _get_custom_item_data(position);
			if (item_data != null) {
				this._data.push(item_data);
				this._page_components.push(new PageCustom(item_data, this._event));
				custom_offset++;
			}
			
			/**
			 * add the image
			 * @type {ItemData}
			 */
			item_data = new ItemData(this._items[i]);
			this._data.push(item_data);
			this._page_components.push(new PageImage(item_data, this._event));
			
		}
		
		
		if (this.props.show_thumbs) {
			this._thumbs = new Thumbs(this._data, this._event);
			this._event.addListener(this.EVENT.THUMB_CLICK, this.onThumbClick.bind(this));
		}
		
		if( this.props.show_fullscreen){
			this._fullscreen = new FullScreen(this._data, this._event, this.props.fullscreen);
			this._event.addListener(this.EVENT.FULLSCREEN_TOGGLE, this.onFullScreenToggle.bind(this));
			this._event.addListener(this.EVENT.FULLSCREEN_OFF, this.onFullScreen.bind(this,false));
			this._event.addListener(this.EVENT.FULLSCREEN_ON, this.onFullScreen.bind(this,true));
		}
		
		if(this.props.show_share){
			this._share = new Share(this._event, this.props.share);
		}
		
		
		
		/**
		 *
		 */
		if (window.location.hash != "") {
			this._iterate((data, component, i) => {
				if ("#" + data.getAnker() == window.location.hash) {
					this.state.active = i;
					return true;
				}
			});
		}
		
		this._viewport.addEventListener("click", () => {
			this._navigation.toggleDisplay();
		});
		
		/**
		 * on resize handler
		 */
		// window.onresize = this.onResize.bind(this);
		
		this.state_resize_interval = setInterval(this.onResize.bind(this),500);
		
	}
	
	/**
	 * enable the gallery
	 */
	enable() {
		this._source_gallery.style.display = "none";
		this._source_gallery.parentNode.insertBefore(this.render(), this._source_gallery);
	}
	
	/**
	 * disable the gallery and show source one
	 */
	disable() {
		this._source_gallery.style.display = "inherit";
		this.destroy();
	}
	
	/**
	 * ----------------------------
	 * rendering
	 * ----------------------------
	 */
	updateViewportRatio() {
		if( !this.props.auto_height) return;
		if (this._viewport == typeof undefined) return;
		
		let margin = 0;
		margin += parseInt(window.getComputedStyle(this._viewport).marginTop);
		margin += parseInt(window.getComputedStyle(this._viewport).marginBottom);
		margin += parseInt(window.getComputedStyle(this._viewport).paddingBottom);
		margin += parseInt(window.getComputedStyle(this._viewport).paddingTop);
		
		let width = this._viewport.clientWidth;
		const {ratio, max_height} = this.state;
		let height = ratio * width;
		if (height > max_height && max_height > 0) {
			height = max_height + margin;
		}
		this._viewport.style.height = height + "px";
		this._viewport.style.overflowX = "hidden";
	}
	
	update() {
		const {active} = this.state;
		
		this._iterate((item, component, i) => {
			/**
			 * @var GalleryItem component
			 */
			if (i < active) {
				component.setPrev();
			} else if (i == active) {
				component.setActive();
				if (this._data[i].getAnker() != "") window.location.hash = this._data[i].getAnker();
			} else if (i > active) {
				component.setNext();
			}
		});
	}
	
	render() {
		let _element = this.get();
		_element.className = this.props.classes.gallery_root;
		_element.innerHTML = "";
		
		_element.appendChild(this.renderViewport());
		_element.appendChild(this._navigation.render());
		
		if (this._thumbs) _element.appendChild(this._thumbs.render());
		if( this._fullscreen ) _element.appendChild(this._fullscreen.render());
		if( this._share ) _element.appendChild( this._share.render() );
		
		this.update();
		
		return _element;
	}
	
	renderViewport() {
		const {active} = this.state;
		this._viewport.className = this.props.classes.gallery_viewport;
		
		while (this._viewport.firstChild) {
			this._viewport.removeChild(this._viewport.firstChild);
		}
		
		this._iterate((data, component, i) => {
			this._viewport.appendChild(component.render());
		});
		
		return this._viewport;
	}
	
	
	/**
	 * ----------------------------
	 * events
	 * ----------------------------
	 */
	onContentChange(src) {
		window.document.body.dispatchEvent(new CustomEvent('onGalleryContentChange', { detail: src}));
	}
	
	/**
	 * page offset negative for prev, positive for next
	 * @param offset
	 */
	onChange(offset) {
		this.onContentChange();
		this.state.active = this.state.active + offset;
		/**
		 * go round and round and round
		 */
		if (this.state.active < 0) {
			this.state.active = this._data.length - 1;
		} else if (this.state.active >= this._data.length) {
			this.state.active = 0;
		}
		this.update();
	}
	
	onResize() {
		
		if(typeof this._viewport == typeof undefined ) return;
		if(this.state.viewport_size != this._viewport.clientWidth){
			this.updateViewportRatio();
			this.state.viewport_size = this._viewport.clientWidth;
		}
	}
	
	onThumbClick(position) {
		this.state.active = position;
		this.update();
		this._navigation.hide();
	}
	
	/**
	 * toggle fullscreen mode
	 */
	onFullScreenToggle(){
		this.onFullScreen( !( this.get().className.indexOf(` ${this.props.classes.fullscreen}`) >= 0 ) );
	}
	onFullScreen(active){
		/**
		 * remove full screen class
		 */
		this.get().className = this.get().className.replace(` ${this.props.classes.fullscreen}`,'');
		/**
		 * add full screen class if active
		 */
		if( active ){
			this.get().className+= ` ${this.props.classes.fullscreen}`;
		}
	}
	
	/**
	 * ---------------------------
	 * other functions
	 * ---------------------------
	 */
	_iterate(callback) {
		if (this._data.length != this._page_components.length) {
			console.error("Model and Views have not equal length");
			return;
		}
		for (let i = 0; i < this._data.length; i++) {
			if (callback(this._data[i], this._page_components[i], i)) {
				break;
			}
		}
	}
	
	/**
	 * get the source of the gallery
	 * @return {Element}
	 */
	getSource() {
		return this._source_gallery;
	}
}