const { registerBlockType } = wp.blocks;

registerBlockType('talia/custom-cta', {
    //built-in attributes
    title: 'Call to Action', 
    description: "Custom CTA Block",
    icon: 'format-image',
    category: 'design',

    //custom attributes
    attributes: {},

    //custom functions


    //built-in functions
    edit(){},

    save(){}
})