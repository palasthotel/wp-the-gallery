/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _gallery = __webpack_require__(1);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * holder for all galleries
	 */
	var WPGalleries = function () {
	
		/**
	  * collect data
	  * @param selector
	  * @param options
	  */
		function WPGalleries(selector, options) {
			_classCallCheck(this, WPGalleries);
	
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
	
		_createClass(WPGalleries, [{
			key: "_iterate",
			value: function _iterate(callback) {
				for (var i = 0; i < this._galleries.length; i++) {
					callback(this._galleries[i], i);
				}
			}
	
			/**
	   * enable javascript galleries rendering
	   */
	
		}, {
			key: "enable",
			value: function enable() {
				var _this = this;
	
				if (this._endabled) return;
				this._gs = [];
				this._iterate(function (gallery, i) {
					var ga = new _gallery2.default(gallery, _this._options);
					_this._gs.push(ga);
					ga.enable();
				});
				this._endabled = true;
			}
	
			/**
	   * disable javascript galleries rendering
	   */
	
		}, {
			key: "disable",
			value: function disable() {
				var _this2 = this;
	
				if (!this._endabled) return;
				this._iterate(function (gallery, i) {
					_this2._gs[i].disable();
				});
				this._gs = [];
				this._endabled = false;
			}
		}]);
	
		return WPGalleries;
	}();
	
	/**
	 * get global object
	 */
	
	
	var TG = window.TheGallery;
	TG.WPGalleries = WPGalleries;
	TG.WPGallery = _gallery2.default;
	
	// move to core
	TG.events = {
		change_content: "onGalleryContentChange"
	};
	
	if (TG.auto) {
	
		// what we can do manually for every gallery
		window.wp_galleries = new WPGalleries(".gallery", TG.options || {});
	
		window.onload = function () {
			window.document.body.addEventListener(TG.events.change_content, function (e) {
				// console.log("gallery content has changed", e.details);
			});
		};
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _page = __webpack_require__(3);
	
	var _thumbs = __webpack_require__(8);
	
	var _thumbs2 = _interopRequireDefault(_thumbs);
	
	var _fullScreen = __webpack_require__(9);
	
	var _fullScreen2 = _interopRequireDefault(_fullScreen);
	
	var _share = __webpack_require__(10);
	
	var _share2 = _interopRequireDefault(_share);
	
	var _navigation = __webpack_require__(11);
	
	var _navigation2 = _interopRequireDefault(_navigation);
	
	var _itemData = __webpack_require__(12);
	
	var _itemData2 = _interopRequireDefault(_itemData);
	
	var _galleryEvent = __webpack_require__(13);
	
	var _galleryEvent2 = _interopRequireDefault(_galleryEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * build a javascript silder from wordpress gallery
	 */
	var Gallery = function (_Component) {
		_inherits(Gallery, _Component);
	
		/**
	  *
	  * @param {Element} source_gallery
	  * @param options
	  */
		function Gallery(source_gallery, options) {
			_classCallCheck(this, Gallery);
	
			/**
	   * default options
	   */
			var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));
	
			_this.props = {};
	
			/**
	   * deep copy sub options
	   */
			var option_classes = Object.assign({}, options.classes);
			var option_selectors = Object.assign({}, options.selectors);
	
			/**
	   * extend options
	   */
			Object.assign(_this.props, {
				custom_pages: [],
				show_thumbs: true,
				show_fullscreen: true,
				show_share: true,
				navigation: {},
				fullscreen: {},
				share: {},
				classes: {},
				selectors: {}
			}, options);
	
			Object.assign(_this.props.classes, {
				gallery_root: "the-gallery",
				gallery_viewport: "the-gallery__viewport",
				fullscreen: "is-fullscreen"
			}, option_classes);
	
			Object.assign(_this.props.selectors, {
				gallery_item: ".gallery-item"
			}, option_selectors);
	
			/**
	   * initial state ist first slide
	   * @type {{active: number}}
	   */
			_this.state = {
				active: 0,
				ratio: 1,
				max_height: 0
			};
	
			/**
	   * event system
	   * @type {GalleryEvent}
	   * @private
	   */
			_this._event = new _galleryEvent2.default();
			_this.EVENT = _this._event.EVENTS();
	
			/**
	   * register events
	   */
			_this._event.addListener(_this.EVENT.NEXT, function (event_type) {
				if (_this.EVENT.TYPE_SLIDE == event_type) {
					_this._navigation.hide();
				}
				_this.onChange(1);
			});
			_this._event.addListener(_this.EVENT.PREV, function (event_type) {
				if (_this.EVENT.TYPE_SLIDE == event_type) {
					_this._navigation.hide();
				}
				_this.onChange(-1);
			});
	
			_this._event.addListener(_this.EVENT.PAGE_ACTIVE, function (data_item) {
				_this.onContentChange(data_item.getSource());
			});
	
			_this._event.addListener(_this.EVENT.PAGE_RATIO, function (data_item) {
	
				var max_height = data_item.getHeight();
				var ratio = data_item.getRatio();
				var changed = false;
				if (_this.state.max_height < max_height) {
					_this.state.max_height = max_height;
					changed = true;
				}
				if (_this.state.ratio < ratio) {
					_this.state.ratio = ratio;
					changed = true;
				}
				if (changed) _this.updateViewportRatio();
			});
	
			/**
	   * the original gallery we use for data collect
	   * @type {Element}
	   * @private
	   */
			_this._source_gallery = source_gallery;
			_this._items = _this._source_gallery.querySelectorAll(_this.props.selectors.gallery_item);
	
			/**
	   * this is our handle do not overwrite it
	   * @type {Element}
	   * @private
	   */
			_this._viewport = document.createElement("div");
	
			/**
	   * navigation component
	   * @type {Navigation}
	   * @private
	   */
			_this._navigation = new _navigation2.default(_this.props.navigation);
			_this._navigation.setOnChange(_this.onChange.bind(_this));
	
			/**
	   * init components
	   * @type {Array}
	   * @private
	   */
			_this._page_components = [];
			_this._data = [];
			var _get_custom_item_data = function _get_custom_item_data(position) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = _this.props.custom_pages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var page = _step.value;
	
						if (page.position == position) {
							var item_data = new _itemData2.default(null);
							item_data.setIsThumbable(page.thumb || false);
							item_data.setRenderFunction(page.render || function () {});
							return item_data;
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				return null;
			};
	
			var custom_offset = 0;
			for (var i = 0; i < _this._items.length; i++) {
				var position = i + custom_offset;
	
				/**
	    * add custom page if defined in options
	    */
				var item_data = _get_custom_item_data(position);
				if (item_data != null) {
					_this._data.push(item_data);
					_this._page_components.push(new _page.PageCustom(item_data, _this._event));
					custom_offset++;
				}
	
				/**
	    * add the image
	    * @type {ItemData}
	    */
				item_data = new _itemData2.default(_this._items[i]);
				_this._data.push(item_data);
				_this._page_components.push(new _page.PageImage(item_data, _this._event));
			}
	
			if (_this.props.show_thumbs) {
				_this._thumbs = new _thumbs2.default(_this._data, _this._event);
				_this._event.addListener(_this.EVENT.THUMB_CLICK, _this.onThumbClick.bind(_this));
			}
	
			if (_this.props.show_fullscreen) {
				_this._fullscreen = new _fullScreen2.default(_this._data, _this._event, _this.props.fullscreen);
				_this._event.addListener(_this.EVENT.FULLSCREEN_TOGGLE, _this.onFullScreenToggle.bind(_this));
			}
	
			if (_this.props.show_share) {
				_this._share = new _share2.default(_this._event, _this.props.share);
			}
	
			/**
	   *
	   */
			if (window.location.hash != "") {
				_this._iterate(function (data, component, i) {
					if ("#" + data.getAnker() == window.location.hash) {
						_this.state.active = i;
						return true;
					}
				});
			}
	
			_this._viewport.addEventListener("click", function () {
				_this._navigation.toggleDisplay();
			});
	
			/**
	   * on resize handler
	   */
			// window.onresize = this.onResize.bind(this);
	
			_this.state_resize_interval = setInterval(_this.onResize.bind(_this), 500);
	
			return _this;
		}
	
		/**
	  * enable the gallery
	  */
	
	
		_createClass(Gallery, [{
			key: 'enable',
			value: function enable() {
				this._source_gallery.style.display = "none";
				this._source_gallery.parentNode.insertBefore(this.render(), this._source_gallery);
			}
	
			/**
	   * disable the gallery and show source one
	   */
	
		}, {
			key: 'disable',
			value: function disable() {
				this._source_gallery.style.display = "inherit";
				this.destroy();
			}
	
			/**
	   * ----------------------------
	   * rendering
	   * ----------------------------
	   */
	
		}, {
			key: 'updateViewportRatio',
			value: function updateViewportRatio() {
				if (this._viewport == ( true ? 'undefined' : _typeof(undefined))) return;
	
				var margin = 0;
				margin += parseInt(window.getComputedStyle(this._viewport).marginTop);
				margin += parseInt(window.getComputedStyle(this._viewport).marginBottom);
				margin += parseInt(window.getComputedStyle(this._viewport).paddingBottom);
				margin += parseInt(window.getComputedStyle(this._viewport).paddingTop);
	
				var width = this._viewport.clientWidth;
				var _state = this.state,
				    ratio = _state.ratio,
				    max_height = _state.max_height;
	
				var height = ratio * width;
				if (height > max_height && max_height > 0) {
					height = max_height + margin;
				}
				this._viewport.style.height = height + "px";
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;
	
				var active = this.state.active;
	
	
				this._iterate(function (item, component, i) {
					/**
	     * @var GalleryItem component
	     */
					if (i < active) {
						component.setPrev();
					} else if (i == active) {
						component.setActive();
						if (_this2._data[i].getAnker() != "") window.location.hash = _this2._data[i].getAnker();
					} else if (i > active) {
						component.setNext();
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _element = this.get();
				_element.className = this.props.classes.gallery_root;
				_element.innerHTML = "";
	
				_element.appendChild(this.renderViewport());
				_element.appendChild(this._navigation.render());
	
				if (this._thumbs) _element.appendChild(this._thumbs.render());
				if (this._fullscreen) _element.appendChild(this._fullscreen.render());
				if (this._share) _element.appendChild(this._share.render());
	
				this.update();
	
				return _element;
			}
		}, {
			key: 'renderViewport',
			value: function renderViewport() {
				var _this3 = this;
	
				var active = this.state.active;
	
				this._viewport.className = this.props.classes.gallery_viewport;
				this._viewport.style.overflowX = "hidden";
	
				while (this._viewport.firstChild) {
					this._viewport.removeChild(this._viewport.firstChild);
				}
	
				this._iterate(function (data, component, i) {
					_this3._viewport.appendChild(component.render());
				});
	
				return this._viewport;
			}
	
			/**
	   * ----------------------------
	   * events
	   * ----------------------------
	   */
	
		}, {
			key: 'onContentChange',
			value: function onContentChange(src) {
				window.document.body.dispatchEvent(new CustomEvent('onGalleryContentChange', { detail: src }));
			}
	
			/**
	   * page offset negative for prev, positive for next
	   * @param offset
	   */
	
		}, {
			key: 'onChange',
			value: function onChange(offset) {
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
		}, {
			key: 'onResize',
			value: function onResize() {
	
				if (_typeof(this._viewport) == ( true ? 'undefined' : _typeof(undefined))) return;
				if (this.state.viewport_size != this._viewport.clientWidth) {
					this.updateViewportRatio();
					this.state.viewport_size = this._viewport.clientWidth;
				}
			}
		}, {
			key: 'onThumbClick',
			value: function onThumbClick(position) {
				this.state.active = position;
				this.update();
				this._navigation.hide();
			}
	
			/**
	   * toggle fullscreen mode
	   */
	
		}, {
			key: 'onFullScreenToggle',
			value: function onFullScreenToggle() {
				this.onFullScreen(!(this.get().className.indexOf(' ' + this.props.classes.fullscreen) >= 0));
			}
		}, {
			key: 'onFullScreen',
			value: function onFullScreen(active) {
				/**
	    * remove full screen class
	    */
				this.get().className = this.get().className.replace(' ' + this.props.classes.fullscreen, '');
				/**
	    * add full screen class if active
	    */
				if (active) {
					this.get().className += ' ' + this.props.classes.fullscreen;
				}
			}
	
			/**
	   * ---------------------------
	   * other functions
	   * ---------------------------
	   */
	
		}, {
			key: '_iterate',
			value: function _iterate(callback) {
				if (this._data.length != this._page_components.length) {
					console.error("Model and Views have not equal length");
					return;
				}
				for (var i = 0; i < this._data.length; i++) {
					if (callback(this._data[i], this._page_components[i], i)) {
						break;
					}
				}
			}
	
			/**
	   * get the source of the gallery
	   * @return {Element}
	   */
	
		}, {
			key: 'getSource',
			value: function getSource() {
				return this._source_gallery;
			}
		}]);
	
		return Gallery;
	}(_component2.default);
	
	exports.default = Gallery;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * this is how an component should work
	 */
	var Component = function () {
	
		/**
	  * construct
	  */
		function Component() {
			_classCallCheck(this, Component);
	
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
	
	
		_createClass(Component, [{
			key: "get",
			value: function get() {
				return this._element;
			}
	
			/**
	   * destroy this component and remove from dom
	   */
	
		}, {
			key: "destroy",
			value: function destroy() {
				this.get().parentNode.removeChild(this.get());
			}
		}]);
	
		return Component;
	}();
	
	exports.default = Component;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageCustom = exports.PageImage = undefined;
	
	var _pageImage = __webpack_require__(4);
	
	var _pageImage2 = _interopRequireDefault(_pageImage);
	
	var _pageCustom = __webpack_require__(7);
	
	var _pageCustom2 = _interopRequireDefault(_pageCustom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.PageImage = _pageImage2.default;
	exports.PageCustom = _pageCustom2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pageBase = __webpack_require__(5);
	
	var _pageBase2 = _interopRequireDefault(_pageBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ItemImage = function (_PageBase) {
		_inherits(ItemImage, _PageBase);
	
		function ItemImage() {
			_classCallCheck(this, ItemImage);
	
			return _possibleConstructorReturn(this, (ItemImage.__proto__ || Object.getPrototypeOf(ItemImage)).apply(this, arguments));
		}
	
		_createClass(ItemImage, [{
			key: "render",
	
	
			/**
	   * ----------------------------
	   * rendering
	   * ----------------------------
	   */
			value: function render() {
				var _this2 = this;
	
				var item = this.getData();
				this._caption = null;
	
				var img = new Image();
				img.className = "the-gallery__page-img";
				img.title = item.getCaption();
	
				this.get().appendChild(img);
	
				if (item.getCaption() != "") {
					this._caption = document.createElement("div");
					this._caption.className = "the-gallery__page-caption";
					this._caption.innerHTML = item.getCaption();
					this.get().appendChild(this._caption);
				}
	
				/**
	    * now load image
	    */
				img.onload = function () {
					var height = img.height;
					if (_this2._caption != null) {
						height += _this2._caption.clientHeight;
					}
					var ratio = parseInt(height) / parseInt(img.width);
					_this2.getData().setRatio(ratio);
					_this2.getData().setHeight(height);
					_this2.trigger(_this2.EVENTS.PAGE_RATIO);
				};
				img.src = item.getSource();
	
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
	
		}]);
	
		return ItemImage;
	}(_pageBase2.default);
	
	exports.default = ItemImage;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _touchEvents = __webpack_require__(6);
	
	var _touchEvents2 = _interopRequireDefault(_touchEvents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PageBase = function (_Component) {
		_inherits(PageBase, _Component);
	
		/**
	  *
	  * @param {ItemData} data
	  * @param {GalleryEvent} event the event handler
	  */
		function PageBase(data, event) {
			_classCallCheck(this, PageBase);
	
			var _this = _possibleConstructorReturn(this, (PageBase.__proto__ || Object.getPrototypeOf(PageBase)).call(this));
	
			_this._data = data;
			_this.state = {
				position: 1
			};
			_this._event = event;
	
			_this.EVENTS = _this._event.EVENTS();
	
			_this._touch_events = new _touchEvents2.default(_this.get());
	
			_this._touch_events.setOnTouchListener(_this.onSlide.bind(_this));
			_this._touch_events.setOnTouchStartListener(_this.onSlideStart.bind(_this));
			_this._touch_events.setOnTouchStopListener(_this.onSlideStop.bind(_this));
			return _this;
		}
	
		/**
	  * ----------------------------
	  * rendering
	  * ----------------------------
	  */
	
	
		_createClass(PageBase, [{
			key: 'update',
			value: function update() {
				this.get().className = this.getClassName();
			}
		}, {
			key: 'render',
			value: function render() {
				console.error("Base has to be extended. Override render and return dom element.");
				return this.get();
			}
	
			/**
	   * ----------------------------
	   * events
	   * ----------------------------
	   */
	
		}, {
			key: 'onSlideStart',
			value: function onSlideStart() {
				this.get().className = this.getClassName() + " js-handling";
			}
		}, {
			key: 'onSlide',
			value: function onSlide(offsetx, offsety) {
				var multi = 1;
				if (offsetx < 0) {
					multi *= -1;
				}
				offsetx = Math.log(offsetx * multi) * 2;
				if (offsetx > 29) {
					offsetx = 29;
				}
				this.get().style.transform = "translateX(" + offsetx * multi + "px)";
			}
		}, {
			key: 'onSlideStop',
			value: function onSlideStop(offsetx, offsety) {
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
	
		}, {
			key: 'trigger',
			value: function trigger(event, custom) {
				this._event.trigger(event, this.getData(), custom);
			}
		}, {
			key: 'getData',
			value: function getData() {
				return this._data;
			}
		}, {
			key: 'getClassName',
			value: function getClassName() {
				return "the-gallery__page " + this.getPositionClass();
			}
		}, {
			key: 'setPrev',
			value: function setPrev() {
				this.state.position = -1;
				this.update();
				this.trigger(this.EVENTS.PAGE_INACTIVE);
			}
		}, {
			key: 'setNext',
			value: function setNext() {
				this.state.position = 1;
				this.update();
				this.trigger(this.EVENTS.PAGE_INACTIVE);
			}
		}, {
			key: 'setActive',
			value: function setActive() {
				this.state.position = 0;
				this.update();
				this.trigger(this.EVENTS.PAGE_ACTIVE);
			}
		}, {
			key: 'getPositionClass',
			value: function getPositionClass() {
				switch (this.state.position) {
					case -1:
						return "is-prev";
					case 1:
						return "is-next";
					case 0:
						return "is-active";
				}
			}
		}]);
	
		return PageBase;
	}(_component2.default);
	
	exports.default = PageBase;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TouchEvent = function () {
		/**
	  *
	  * @param {Node} element
	  */
		function TouchEvent(element) {
			_classCallCheck(this, TouchEvent);
	
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
					y: null
				},
				offset: {
					x: 0,
					y: 0
				},
				is_multitouch: false
			};
			this.reset();
	
			/**
	   * event listeners
	   * @private
	   */
			this._on_touch = function () {};
			this._on_touch_start = function () {};
			this._on_touch_stop = function () {};
		}
	
		/**
	  *
	  * @param {Event} e
	  */
	
	
		_createClass(TouchEvent, [{
			key: "handleStart",
			value: function handleStart(e) {
				// e.preventDefault();
				if (e.touches.length > 1) {
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
	
		}, {
			key: "handleMove",
			value: function handleMove(e) {
				if (this.state.is_multitouch) {
					return;
				}
				console.log("handle move!");
				var x = e.changedTouches[0].pageX;
				var y = e.changedTouches[0].pageY;
				this.state.offset.x = x - this.state.start.x;
				this.state.offset.y = y - this.state.start.y;
				this.sendTouchEvent();
			}
	
			/**
	   *
	   * @param {Event} e
	   */
	
		}, {
			key: "handleEnd",
			value: function handleEnd(e) {
				if (e.touches.length > 0) {
					/**
	     * if there is a finger left prevent multi touch confusion
	     */
					return;
				}
				if (!this.state.is_multitouch) {
					this._on_touch_stop(this.state.offset.x, this.state.offset.y);
				}
				this.state.is_multitouch = false;
				this.reset();
			}
	
			/**
	   *
	   * @param {Event} e
	   */
	
		}, {
			key: "handleCancel",
			value: function handleCancel(e) {
				this.reset();
				this.sendTouchEvent();
			}
	
			/**
	   * send touch position change
	   */
	
		}, {
			key: "sendTouchEvent",
			value: function sendTouchEvent() {
				this._on_touch(this.state.offset.x, this.state.offset.y);
			}
	
			/**
	   *
	   */
	
		}, {
			key: "reset",
			value: function reset() {
				this.state.start.x = null;
				this.state.start.y = null;
				this.state.offset.x = 0;
				this.state.offset.y = 0;
			}
	
			/**
	   *
	   * @param {func} fn
	   */
	
		}, {
			key: "setOnTouchListener",
			value: function setOnTouchListener(fn) {
				this._on_touch = fn;
			}
	
			/**
	   *
	   * @param {func} fn
	   */
	
		}, {
			key: "setOnTouchStartListener",
			value: function setOnTouchStartListener(fn) {
				this._on_touch_start = fn;
			}
	
			/**
	   *
	   * @param {func} fn
	   */
	
		}, {
			key: "setOnTouchStopListener",
			value: function setOnTouchStopListener(fn) {
				this._on_touch_stop = fn;
			}
		}]);
	
		return TouchEvent;
	}();
	
	exports.default = TouchEvent;
	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pageBase = __webpack_require__(5);
	
	var _pageBase2 = _interopRequireDefault(_pageBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PageCustom = function (_PageBase) {
		_inherits(PageCustom, _PageBase);
	
		function PageCustom() {
			_classCallCheck(this, PageCustom);
	
			return _possibleConstructorReturn(this, (PageCustom.__proto__ || Object.getPrototypeOf(PageCustom)).apply(this, arguments));
		}
	
		_createClass(PageCustom, [{
			key: "render",
	
	
			/**
	   * ----------------------------
	   * rendering
	   * ----------------------------
	   */
			value: function render() {
	
				var item = this._data;
	
				var render = item.getRenderFunction();
	
				this.get().innerHTML = "";
	
				var result = render(this.get());
	
				if ((typeof result === "undefined" ? "undefined" : _typeof(result)) == _typeof("")) {
					if (this.get().innerHTML != "") {
						console.info("It seems that you manipulated the galleries custom page dom \n\t\t\t\telement as well as you do not return null. \n\t\t\t\tYour changes will be overwritten...");
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
	
		}]);
	
		return PageCustom;
	}(_pageBase2.default);
	
	exports.default = PageCustom;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Thumb = function (_Component) {
		_inherits(Thumb, _Component);
	
		/**
	  *
	  * @param {ItemData} data
	  * @param {func} onclick
	  */
		function Thumb(data, onclick) {
			_classCallCheck(this, Thumb);
	
			var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));
	
			_this._data = data;
			_this.get().addEventListener("click", onclick);
			return _this;
		}
	
		_createClass(Thumb, [{
			key: "render",
			value: function render() {
	
				var item = this._data;
	
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
		}, {
			key: "updateActive",
			value: function updateActive(active_data_item) {
				if (!this._data.isThumbable()) return;
				if (active_data_item == this._data) {
					this.get().className = "the-gallery__thumb is-active";
					return true;
				} else {
					this.get().className = "the-gallery__thumb";
				}
				return false;
			}
		}]);
	
		return Thumb;
	}(_component2.default);
	
	/**
	 * thumbs
	 */
	
	
	var Thumbs = function (_Component2) {
		_inherits(Thumbs, _Component2);
	
		/**
	  *
	  * @param {Array.ItemData} data array of
	  * @param {GalleryEvent} events
	  */
		function Thumbs(data, events) {
			_classCallCheck(this, Thumbs);
	
			var _this2 = _possibleConstructorReturn(this, (Thumbs.__proto__ || Object.getPrototypeOf(Thumbs)).call(this));
	
			_this2._data = data;
			_this2._thumbs = [];
			_this2._events = events;
			_this2._events.addListener(_this2._events.EVENTS().PAGE_ACTIVE, _this2.updateActive.bind(_this2));
			return _this2;
		}
	
		/**
	  * render thumbs
	  * @return {Element}
	  */
	
	
		_createClass(Thumbs, [{
			key: "render",
			value: function render() {
				this.get().className = "the-gallery__thumbs";
	
				if (_typeof(this._stage) == ( true ? "undefined" : _typeof(undefined))) {
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
	
				var not_thumbed = 0;
				for (var i = 0; i < this._data.length; i++) {
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
		}, {
			key: "moveThumbs",
			value: function moveThumbs() {
				var active_index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
				var width = this.get().clientWidth;
				var item_width = this._stage.firstChild.clientWidth;
				var thumb_position_left = item_width * active_index;
	
				var left = 0;
				if (thumb_position_left > width / 2 - item_width) {
					left = item_width * active_index * -1 + width / 2;
				}
	
				if (left > 0) left = 0;
	
				this._stage.style.left = left + "px";
			}
	
			/**
	   *  on page change
	   * @param {ItemData} item_data
	   */
	
		}, {
			key: "updateActive",
			value: function updateActive(item_data) {
				var i = 0;
				var active_index = 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = this._thumbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var thumb = _step.value;
	
						if (thumb.updateActive(item_data)) active_index = i;
						i++;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				this.moveThumbs(active_index);
			}
	
			/**
	   * expose thumb click to world
	   * @param {ItemData} data
	   * @param {int} position
	   */
	
		}, {
			key: "onClick",
			value: function onClick(data, position) {
				this._events.trigger(this._events.EVENTS().THUMB_CLICK, position, data);
			}
		}]);
	
		return Thumbs;
	}(_component2.default);
	
	exports.default = Thumbs;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * thumbs
	 */
	var FullScreen = function (_Component) {
		_inherits(FullScreen, _Component);
	
		/**
	  *
	  * @param {Array.ItemData} data array of
	  * @param {GalleryEvent} events
	  * @param {object} options
	  */
		function FullScreen(data, events, options) {
			_classCallCheck(this, FullScreen);
	
			var _this = _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).call(this));
	
			_this.props = {
				className: "the-gallery__fullscreen",
				innerHTML: "Fullscreen"
			};
			Object.assign(_this.props, options);
	
			_this._data = data;
			_this._events = events;
			_this.ON = _this._events.EVENTS().FULLSCREEN_ON;
			_this.OFF = _this._events.EVENTS().FULLSCREEN_OFF;
			_this.TOGGLE = _this._events.EVENTS().FULLSCREEN_TOGGLE;
			_this.get().addEventListener("click", _this.emit_event.bind(_this));
			return _this;
		}
	
		/**
	  * render button
	  * @return {Element}
	  */
	
	
		_createClass(FullScreen, [{
			key: "render",
			value: function render() {
				this.get().className = this.props.className;
				this.get().innerHTML = this.props.innerHTML;
				return this.get();
			}
	
			/**
	   * emit the clicked fullscreen event
	   * @param e
	   */
	
		}, {
			key: "emit_event",
			value: function emit_event(e) {
				this._events.trigger(this.TOGGLE);
			}
		}]);
	
		return FullScreen;
	}(_component2.default);
	
	exports.default = FullScreen;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Share = function (_Component) {
		_inherits(Share, _Component);
	
		/**
	  *
	  * @param {GalleryEvent} events
	  * @param {object} options
	  */
		function Share(events, options) {
			_classCallCheck(this, Share);
	
			/**
	   * default options
	   */
			var _this = _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).call(this));
	
			_this.props = {};
	
			/**
	   * deep copy sub options
	   */
			var facebook = Object.assign({}, options.facebook);
			var twitter = Object.assign({}, options.twitter);
	
			/**
	   * extend options
	   */
			Object.assign(_this.props, {
				className: "the-gallery__share",
				classNameButton: "the-gallery__share--button",
				facebook: {},
				twitter: {}
			}, options);
			Object.assign(_this.props.facebook, {
				show: true,
				innerHTML: " - Facebook - ",
				className: "the-gallery__share--facebook"
			}, facebook);
			Object.assign(_this.props.twitter, {
				show: true,
				innerHTML: " - Twitter - ",
				className: "the-gallery__share--twitter"
			}, twitter);
	
			/**
	   * the state
	   */
			_this.state = {
				image: ""
			};
	
			console.log(_this.props);
	
			_this._events = events;
	
			document.body.addEventListener("onGalleryContentChange", _this.onContentChange.bind(_this));
	
			return _this;
		}
	
		_createClass(Share, [{
			key: "render",
			value: function render() {
				var _element = this.get();
				_element.className = this.props.className;
	
				if (this.props.facebook.show) {
					var _fb = this.renderElement("facebook");
					_element.appendChild(_fb);
					_fb.addEventListener("click", this.onShareFacebook.bind(this));
				}
	
				if (this.props.twitter.show) {
					var _t = this.renderElement("twitter");
					_element.appendChild(_t);
					_t.addEventListener('click', this.onShareTwitter.bind(this));
				}
	
				return _element;
			}
		}, {
			key: "onContentChange",
			value: function onContentChange(e) {
				this.state.image = e.detail;
			}
		}, {
			key: "renderElement",
			value: function renderElement(key) {
				var config = this.props[key];
				var _button = document.createElement("div");
				_button.className = this.props.classNameButton + " " + config.className;
				_button.innerHTML = config.innerHTML;
				return _button;
			}
		}, {
			key: "onShareFacebook",
			value: function onShareFacebook() {
				// TODO: how to share what?
				window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(window.location.href), 'sharer', 'toolbar=0,status=0,width=626,height=436');
			}
		}, {
			key: "onShareTwitter",
			value: function onShareTwitter() {
				window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href), 'sharer', 'toolbar=0,status=0,width=626,height=436');
			}
		}]);
	
		return Share;
	}(_component2.default);
	
	exports.default = Share;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navigation = function (_Component) {
		_inherits(Navigation, _Component);
	
		/**
	  * construct
	  */
		function Navigation(options) {
			_classCallCheck(this, Navigation);
	
			var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));
	
			_this.props = {
				next: {
					innerHTML: "next ->",
					element: "div",
					className: "the-gallery__navigation--button the-gallery__navigation--next"
				},
				prev: {
					innerHTML: "<- prev",
					element: "div",
					className: "the-gallery__navigation--button the-gallery__navigation--prev"
				}
			};
	
			Object.assign(_this.props.next, options.next);
			Object.assign(_this.props.prev, options.prev);
	
			_this._on_next = function () {
				console.log("Not implemented");
			};
			_this._on_prev = function () {
				console.log("Not implemented");
			};
			return _this;
		}
	
		/**
	  *
	  * @return {Element} rendered element
	  */
	
	
		_createClass(Navigation, [{
			key: "render",
			value: function render() {
				this.setClass();
				var _navigation = this.get();
	
				while (_navigation.firstChild) {
					_navigation.removeChild(this._navigation.firstChild);
				}
	
				var prev = this.get_button(this.props.prev);
				var next = this.get_button(this.props.next);
	
				_navigation.appendChild(prev);
				_navigation.appendChild(next);
	
				next.addEventListener("click", this.onChange.bind(this, 1));
				prev.addEventListener("click", this.onChange.bind(this, -1));
	
				return this.get();
			}
		}, {
			key: "get_button",
			value: function get_button(config) {
				/**
	    * else build by parts
	    * @type {Element}
	    */
				var element = document.createElement(config.element);
				element.className = config.className;
				element.innerHTML = config.innerHTML;
				return element;
			}
		}, {
			key: "setClass",
			value: function setClass() {
				var classnames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
				this.get().className = "the-gallery__navigation " + classnames;
			}
		}, {
			key: "toggleDisplay",
			value: function toggleDisplay() {
				console.log(this.get().className.indexOf("is-hidden"));
				if (this.get().className.indexOf("is-hidden") >= 0) {
					this.show();
				} else {
					this.hide();
				}
			}
		}, {
			key: "hide",
			value: function hide() {
				this.setClass("is-hidden");
			}
		}, {
			key: "show",
			value: function show() {
				this.setClass();
			}
	
			/**
	   * triggered on change
	   * @param offset
	   */
	
		}, {
			key: "onChange",
			value: function onChange(offset) {
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
	
		}, {
			key: "setOnPrev",
			value: function setOnPrev(callback) {
				this._on_prev = callback;
			}
	
			/**
	   * set on next callback
	   * @param callback
	   */
	
		}, {
			key: "setOnNext",
			value: function setOnNext(callback) {
				this._on_next = callback;
			}
	
			/**
	   * sets and overwrites on next and on prev callback
	   * @param callback
	   */
	
		}, {
			key: "setOnChange",
			value: function setOnChange(callback) {
				this.setOnNext(function (offset) {
					callback(offset);
				});
				this.setOnPrev(function (offset) {
					callback(offset * -1);
				});
			}
		}]);
	
		return Navigation;
	}(_component2.default);
	
	exports.default = Navigation;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * collect data from gallery item
	 */
	var ItemData = function () {
		/**
	  *
	  * @param {Element} source
	  */
		function ItemData(source) {
			_classCallCheck(this, ItemData);
	
			this._source = source;
			this._default_return = "";
			this._ratio = 1;
			this._height = 0;
			this._is_thumbable = true;
			this._render_function = function () {};
		}
	
		_createClass(ItemData, [{
			key: "getSource",
			value: function getSource() {
				if (this._source == null) return this._default_return;
				return this._source.querySelector("img").src;
			}
		}, {
			key: "getSourceSet",
			value: function getSourceSet() {
				if (this._source == null) return this._default_return;
				return this._source.querySelector("img").getAttribute("srcset");
			}
		}, {
			key: "getCaption",
			value: function getCaption() {
				if (this._source == null) return this._default_return;
				var caption_element = this._source.querySelector(".wp-caption-text");
				return caption_element ? caption_element.innerHTML : "";
			}
		}, {
			key: "getAnker",
			value: function getAnker() {
				if (this._source == null) return this._default_return;
				var found = this.getLink().match(/^http:\/\/[^\/]+(.*)$/i);
				return found[1];
			}
		}, {
			key: "getLink",
			value: function getLink() {
				if (this._source == null) return this._default_return;
				if (this._source.querySelector("a")) {
					return this._source.querySelector("a").getAttribute("href");
				}
				return this.getSource();
			}
		}, {
			key: "setRatio",
			value: function setRatio(ratio) {
				this._ratio = ratio;
			}
		}, {
			key: "getRatio",
			value: function getRatio() {
				return this._ratio;
			}
		}, {
			key: "setHeight",
			value: function setHeight(height) {
				this._height = height;
			}
		}, {
			key: "getHeight",
			value: function getHeight() {
				return this._height;
			}
		}, {
			key: "setIsThumbable",
			value: function setIsThumbable(thumbable) {
				this._is_thumbable = thumbable;
			}
		}, {
			key: "isThumbable",
			value: function isThumbable() {
				return this._is_thumbable;
			}
		}, {
			key: "setRenderFunction",
			value: function setRenderFunction(fn) {
				this._render_function = fn;
			}
		}, {
			key: "getRenderFunction",
			value: function getRenderFunction() {
				return this._render_function;
			}
		}]);
	
		return ItemData;
	}();
	
	exports.default = ItemData;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _EVENTS = {
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
		FULLSCREEN_TOGGLE: "fullscreen_toggle"
	};
	
	/**
	 * static event handler
	 */
	
	var GalleryEvent = function () {
		function GalleryEvent() {
			_classCallCheck(this, GalleryEvent);
	
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
	
	
		_createClass(GalleryEvent, [{
			key: "EVENTS",
			value: function EVENTS() {
				return _EVENTS;
			}
	
			/**
	   *
	   * @param event
	   * @return {Array}
	   * @private
	   */
	
		}, {
			key: "_getListeners",
			value: function _getListeners(event) {
				if (_typeof(this._listeners[event]) == ( true ? "undefined" : _typeof(undefined))) {
					this._listeners[event] = [];
				}
				return this._listeners[event];
			}
	
			/**
	   * add listener callback
	   * @param event
	   * @param callback
	   */
	
		}, {
			key: "addListener",
			value: function addListener(event, callback) {
				this._getListeners(event).push(callback);
			}
	
			/**
	   * trigger an event
	   * @param event
	   * @param data
	   */
	
		}, {
			key: "trigger",
			value: function trigger(event, data) {
				var listeners = this._getListeners(event);
				for (var i = 0; i < listeners.length; i++) {
					listeners[i](data);
				}
			}
		}]);
	
		return GalleryEvent;
	}();
	
	exports.default = GalleryEvent;

/***/ }
/******/ ]);
//# sourceMappingURL=galleries.map