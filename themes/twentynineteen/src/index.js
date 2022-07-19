const { 
    registerBlockType
} = wp.blocks;
const { 
    RichText, 
    InspectorControls, 
    ColorPalette,
    MediaUpload
} = wp.editor;
const {
    PanelBody,
    IconButton
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
        },
        background: {
            type: 'string',
            default: 'null'
        }
    },


    //built-in functions
    edit({ attributes, setAttributes }){

        const {
            title, 
            body,
            titleColor,
            bodyColor,
            background
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

        function onSelectImage(newImage) {
            setAttributes( { background: newImage.sizes.full.url } );
        }

        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={'Font Colors'}>
                    <p><strong>Select Title Color</strong></p>
                    <ColorPalette value={titleColor}
                                  onChange={ onTitleColorChange } />
                    <p><strong>Select Body Color</strong></p>
                    <ColorPalette value={bodyColor}
                                  onChange={ onBodyColorChange } />
                </PanelBody>
                <PanelBody title={'Background Image'}>
                    <p><strong>Select Background Image:</strong></p>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        type="image"
                        value={ background }
                        render={ ( { open } ) => {
                            return (<IconButton
                                onClick={ open }
                                icon="upload"
                                className="editor-media-placeholder__button is-button is-default is-large">
                                Upload Background Image
                            </IconButton>);
                        }}/>
                </PanelBody>
            </InspectorControls>,
            <div class="cta-container" style={{
                backgroundImage: `url('${background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
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
            bodyColor,
            background
        } = attributes;
        
        return (
            <div class="cta-container" style={{
                backgroundImage: `url('${background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <h2 style= { { color:titleColor } }>{ title }</h2>
                <RichText.Content tagName="p"
                                  value={ body }
                                  style= { { color:bodyColor } }/>
            </div>
        );
    }
})