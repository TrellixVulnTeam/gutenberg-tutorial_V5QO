const { 
    registerBlockType
} = wp.blocks;
const { 
    RichText, 
    InspectorControls, 
    ColorPalette 
} = wp.editor;
const {
    PanelBody
} = wp.components;

registerBlockType('talia/custom-cta', {
    //built-in attributes
    title: 'Call to Action', 
    description: "Custom CTA Block",
    icon: 'format-image',
    category: 'design',

    //custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        titleColor: {
            type: 'string',
            default: '#000000'
        },
        bodyColor: {
            type: 'string',
            default: '#f0f0f0'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },


    //built-in functions
    edit({ attributes, setAttributes }){

        const {
            title, 
            body,
            titleColor,
            bodyColor
        } = attributes;

        //custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }

        function onTitleColorChange(newColor) {
            setAttributes( { titleColor: newColor } );
        }

        function onBodyColorChange(newBodyColor) {
            setAttributes( { bodyColor: newBodyColor } );
        }

        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={'Title Color'}>
                    <p><strong>Select Title Color</strong></p>
                    <ColorPalette value={titleColor}
                                  onChange={ onTitleColorChange } />
                </PanelBody>,
                <PanelBody title={'Body Color'}>
                    <p><strong>Select Body Color</strong></p>
                    <ColorPalette value={bodyColor}
                                  onChange={ onBodyColorChange } />
                </PanelBody>
            </InspectorControls>,
            <div class="cta-container">
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Enter Title"
                          value={ title }
                          onChange={ onChangeTitle }
                          style={ { color: titleColor } }/>
                <RichText key="editable"
                          tagName="p"
                          placeholder="Enter Description"
                          value={ body }
                          onChange={ onChangeBody }
                          style={ { color: bodyColor } }/>
            </div>
        ]);
    },

    save({attributes}){
        const {
            title, 
            body,
            titleColor,
            bodyColor
        } = attributes;
        
        return (
            <div class="cta-container">
                <h2 style= { { color:titleColor } }>{ title }</h2>
                <RichText.Content tagName="p"
                                  value={ body }
                                  style= { { color:bodyColor } }/>
            </div>
        );
    }
})