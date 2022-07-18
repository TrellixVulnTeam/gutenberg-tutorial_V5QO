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