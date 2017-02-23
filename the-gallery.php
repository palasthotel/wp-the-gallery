<?php
namespace TheGallery;

/*
Plugin Name: The perfect Gallery
Plugin URI: https://palasthotel.de
Description: Hopefully some day!
Version: 1.0
Author: Palasthotel ( in Person: Edward Bock)
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Plugin {
	
	const DOMAIN = "the-gallery";
	const JS_HANDLE = "the-gallery-js";
	const CSS_HANDLE = "the-gallery-css";
	const FILTER_CONFIG = "the_gallery_config";
	
	/**
	 * Plugin constructor.
	 */
	public function __construct() {
		
		/**
		 * base paths
		 */
		$this->dir = plugin_dir_path( __FILE__ );
		$this->url = plugin_dir_url( __FILE__ );
		
		add_action( "wp_enqueue_scripts", array( $this, "enqueue_scripts" ) );
		
	}
	
	
	/**
	 * register js scripts
	 */
	function enqueue_scripts() {
		wp_register_script( self::JS_HANDLE, $this->url . "/bundle/galleries.js", array(), 1, TRUE );
		$config = array(
			"auto"      => TRUE,
			"selectors" => array(
				"gallery" => ".gallery",
			),
			"options"   => array(
				"show_thumbs" => TRUE,
			),
		);
		wp_localize_script( self::JS_HANDLE, "TheGallery", apply_filters(self::FILTER_CONFIG, $config) );
		wp_register_style( self::CSS_HANDLE, $this->url . "/css/the-gallery.css" );
	}
	
	
}

new Plugin();