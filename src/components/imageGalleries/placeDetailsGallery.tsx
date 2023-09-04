import * as React from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


interface placeDetailsGalleryProps {
    maxWidth?: number;
    maxHeight?: number;
    aspectRatio?: string;
    margin?: string;
    includeFullscreenButton?: boolean;
    slides: lightBoxSlide[];
}

/*
    El array de Slices seria algo asi:
    [{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" }];
*/

export default function placeDetailsGallery(
    {
        maxWidth = 900,
        aspectRatio = "3 / 2",
        margin = "0 auto",
        includeFullscreenButton = false,
        slides
    }: placeDetailsGalleryProps
) {
    const [open, setOpen] = React.useState(false);

    const inline = {
        style: {
          width: "100%",
          maxWidth: maxWidth,
          aspectRatio: aspectRatio,
          margin: margin,
        },
    };

    
    
    return (
        <>  
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                inline={inline}
                plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            {
                includeFullscreenButton ? 
                (<button type="button" onClick={() => setOpen(true)}>
                    See Full-Size Pictures
                </button>) : null
            }
        </>
    );
}

