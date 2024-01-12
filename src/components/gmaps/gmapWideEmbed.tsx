import React, { FC } from 'react';

// We don't require or use a fixed width because for this component we want full width
const GoogleMapWideEmbed: FC<GoogleMapEmbedProps> = ({
  height = "350px",
  locationQuery = null,
  latitude = null,
  longitude = null,
  className = "",
}) => {

    if ( !locationQuery && (!latitude || !longitude) ) {
        throw new Error("Neither 'locationQuery' nor both 'latitude' and 'longitude' provided.");
    }

    if ((locationQuery && (latitude && longitude))) {
        throw new Error("You must provide either 'locationQuery' or both 'latitude' and 'longitude', but not both.");
    }

    const apiKey = process.env.CS_GMAPS_API_KEY;
    let src = "";
    if (locationQuery) {
        src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
            locationQuery
        )}`;
    } else if (latitude && longitude) {
        src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=14`;
    } else {
        throw new Error("Neither 'locationQuery' nor both 'latitude' and 'longitude' provided.");
    }

    return (
        <div style={{"height": height}} className={"google-maps-wide-embed " + className}>
            <iframe
                
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={src}
            />
        </div>
    );
};

export default GoogleMapWideEmbed;