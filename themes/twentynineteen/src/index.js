const { registerBlockType } = wp.blocks;

registerBlockType('talia/custom-cta', {
    //built-in attributes
    title: 'Call to Action', 
    description: "Custom CTA Block",
    icon: 'format-image',
    category: 'design',

    //custom attributes
    attributes: {
        author: {
            type: 'string'
        }
    },


    //built-in functions
    edit({ attributes, setAttributes }){

        //custom functions
        function updateAuthor(event) {
            setAttributes( { author: event.target.value } );
        }

        return <input value={ attributes.author } onChange={ updateAuthor } type="text"/>;
    },

    save({attributes}){
        return <p>Author name: <i>{attributes.author}</i></p>
    }
})