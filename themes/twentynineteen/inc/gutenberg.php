<?php
/**
 * Custom gutenberg functions
 */

 function talia_gutenberg_default_colors()
 {
    add_theme_support(
        'editor-color-palette', 
        array(
            array(
                'name' => 'White',
                'slug' => 'white',
                'color' => '#ffffff'
            ),
            array(
                'name' => 'Black',
                'slug' => 'black',
                'color' => '#000000'
            ),
            array(
                'name' => 'Blue',
                'slug' => 'blue',
                'color' => '#000fff'
            ),
        )
    ); 

    add_theme_support(
        'editor-font-sizes',
        array(
            array(
                'name' => 'Normal',
                'slug' => 'normal',
                'size' => 16
            ),
            array(
                'name' => 'Large',
                'slug' => 'large',
                'size' => 24
            )
        )
    );
 }

 add_action('init', 'talia_gutenberg_default_colors');

 function talia_gutenberg_blocks()
 {
    wp_register_script('custom-cta-js', get_template_directory_uri() . '/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));
    
    wp_register_style( 'custom-cta-css', get_template_directory_uri() . '/gutenberg.css', array());

    wp_register_style( 'custom-backend-cta-css', get_template_directory_uri() . '/backend.css', array());

    register_block_type('talia/custom-cta', array(
        'editor_script' => 'custom-cta-js',
        'editor_style' => 'custom-backend-cta-css',
        'style' => 'custom-cta-css'
    ));
 }

 add_action('init', 'talia_gutenberg_blocks');
