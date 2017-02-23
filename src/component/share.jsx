
import Component from './component.jsx';


export default class Share extends Component{
	/**
	 *
	 * @param {GalleryEvent} events
	 * @param {object} options
	 */
	constructor(events, options) {
		super();
		
		/**
		 * default options
		 */
		this.props = {};
		
		/**
		 * deep copy sub options
		 */
		const facebook = Object.assign({}, options.facebook);
		const twitter = Object.assign({}, options.twitter);
		
		/**
		 * extend options
		 */
		Object.assign(this.props, {
			className: 	"the-gallery__share",
			classNameButton: "the-gallery__share--button",
			facebook: {},
			twitter: {},
		}, options );
		Object.assign(this.props.facebook, {
			show: true,
			innerHTML: " - Facebook - ",
			className: "the-gallery__share--facebook",
		}, facebook);
		Object.assign(this.props.twitter,{
			show: true,
			innerHTML: " - Twitter - ",
			className: "the-gallery__share--twitter",
		}, twitter);
		
		/**
		 * the state
		 */
		this.state = {
			image: "",
		};
		
		console.log(this.props);
		
		this._events = events;
		
		document.body.addEventListener("onGalleryContentChange", this.onContentChange.bind(this));
		
	}
	render(){
		const _element = this.get();
		_element.className = this.props.className;
		
		if(this.props.facebook.show){
			const _fb = this.renderElement("facebook");
			_element.appendChild(_fb);
			_fb.addEventListener("click",this.onShareFacebook.bind(this));
		}
		
		if(this.props.twitter.show){
			const _t = this.renderElement("twitter");
			_element.appendChild(_t);
			_t.addEventListener('click', this.onShareTwitter.bind(this));
		}
		
		return _element;
	}
	
	onContentChange(e){
		this.state.image = e.detail;
	}
	
	renderElement(key){
		const config = this.props[key];
		const _button = document.createElement("div");
		_button.className = this.props.classNameButton+" "+config.className;
		_button.innerHTML = config.innerHTML;
		return _button;
	}
	
	onShareFacebook(){
		// TODO: how to share what?
		window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(window.location.href),
			'sharer',
			'toolbar=0,status=0,width=626,height=436'
		);
	}
	onShareTwitter(){
		window.open('https://twitter.com/share?url='+encodeURIComponent(window.location.href),
			'sharer',
			'toolbar=0,status=0,width=626,height=436'
		);
	}
}