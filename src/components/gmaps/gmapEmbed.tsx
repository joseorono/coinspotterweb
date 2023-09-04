import React, { FC } from 'react';


const GoogleMapEmbed: FC<GoogleMapEmbedProps> = ({
  width = 600,
  height = 450,
  locationQuery,
  latitude,
  longitude,
}) => {

    if ((!locationQuery && (!latitude || !longitude)) || (locationQuery && (latitude || longitude))) {
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
        <div className="google-maps-embed">
            <iframe
                width={width}
                height={height}
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={src}
            />
        </div>
    );
};

export default GoogleMapEmbed;