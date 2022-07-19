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
    IconButton,
    RangeControl
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
        },
        overlayColor: {
            type: 'string',
            default: '#000000'
        },
        overlayOpacity: {
            type: 'number',
            default: 0.3
        }
    },


    //built-in functions
    edit: ({ attributes, setAttributes }) => {

        const {
            title,
            body,
            titleColor,
            bodyColor,
            background,
            overlayColor,
            overlayOpacity
        } = attributes;

        //custom functions
        function onChangeTitle(newTitle) {
            setAttributes({ title: newTitle });
        }

        function onChangeBody(newBody) {
            setAttributes({ body: newBody });
        }

        function onTitleColorChange(newColor) {
            setAttributes({ titleColor: newColor });
        }

        function onBodyColorChange(newColor) {
            setAttributes({ bodyColor: newColor });
        }

        function onSelectImage(newImage) {
            setAttributes({ background: newImage.sizes.full.url });
        }

        function onOverlayColorChange(newColor) {
            setAttributes({ overlayColor: newColor });
        }

        function onOverlayOpacityChange(newOpacity) {
            setAttributes({ overlayOpacity: newOpacity });
        }

        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title={'Font Colors'}>
                    <p><strong>Select Title Color</strong></p>
                    <ColorPalette value={titleColor}
                        onChange={onTitleColorChange} />
                    <p><strong>Select Body Color</strong></p>
                    <ColorPalette value={bodyColor}
                        onChange={onBodyColorChange} />
                </PanelBody>
                <PanelBody title={'Background Image'}>
                    <p><strong>Select Background Image:</strong></p>
                    <MediaUpload
                        onSelect={onSelectImage}
                        type="image"
                        value={background}
                        render={({ open }) => {
                            return (<IconButton
                                onClick={open}
                                icon="upload"
                                className="editor-media-placeholder__button is-button is-default is-large">
                                Upload Background Image
                            </IconButton>);
                        }} />
                    <div style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <p><strong>Overlay Color:</strong></p>
                        <ColorPalette value={overlayColor}
                            onChange={onOverlayColorChange} />
                    </div>
                    <RangeControl
                        label={'Overlay Opacity'}
                        value={overlayOpacity}
                        onChange={onOverlayOpacityChange}
                        min={0}
                        max={1}
                        step={0.1}
                    />
                </PanelBody>
            </InspectorControls>,
            <div className="cta-container" style={{
                backgroundImage: `url('${background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="cta-overlay" style={{
                    background: overlayColor, opacity: overlayOpacity
                }}></div>
                    <RichText key="editable"
                        tagName="h2"
                        placeholder="Enter Title"
                        value={title}
                        onChange={onChangeTitle}
                        style={{ color: titleColor }} />
                    <RichText key="editable"
                        tagName="p"
                        placeholder="Enter Description"
                        value={body}
                        onChange={onChangeBody}
                        style={{ color: bodyColor }} />
                
            </div>
        ]);
    },

    save: ({ attributes }) => {
        const {
            title,
            body,
            titleColor,
            bodyColor,
            background,
            overlayColor,
            overlayOpacity
        } = attributes;

        return (
            <div className="cta-container" style={{
                backgroundImage: `url('${background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="cta-overlay" style={{
                    background: overlayColor, opacity: overlayOpacity
                }}></div>
                    <h2 style={{ color: titleColor }}>{title}</h2>
                    <RichText.Content tagName="p"
                        value={body}
                        style={{ color: bodyColor }} />
                
            </div>
        );
    }
})