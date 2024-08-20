<?php
/**
 * Plugin Name:       WP Gradient Text
 * Description:       A plugin to add gradient text to your WordPress site.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            @mmuhsin
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
add_action( 'enqueue_block_editor_assets', 'gt_enqueue_scripts_for_blocks' );
