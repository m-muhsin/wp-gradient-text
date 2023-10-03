<?php
/**
 * Plugin Name:       Gradient Text
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gradient-text
 *
 * @package create-block
 */

/**
 * Enqueue block scripts.
 */
function gt_enqueue_scripts_for_blocks() {
    wp_enqueue_script( 'gt-block-filters', plugins_url( 'build/index.js', __FILE__ ), [ 'wp-block-editor', 'wp-components', 'wp-element', 'wp-hooks', 'wp-i18n' ], '1.0.0', true );
}
add_action('enqueue_block_editor_assets', 'gt_enqueue_scripts_for_blocks');

function gt_enqueue_assets_for_blocks() {
	wp_enqueue_style( 'gt-block-filters-style', plugins_url( 'build/style-index.css', __FILE__ ), [], '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'gt_enqueue_assets_for_blocks' );

function gt_after_theme_setup() {
	add_editor_style( plugins_url( 'build/style-index.css', __FILE__ ) );
}
add_action( 'after_setup_theme', 'gt_after_theme_setup' );
