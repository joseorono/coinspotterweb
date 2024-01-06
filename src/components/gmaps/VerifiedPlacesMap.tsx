import React, { FC } from 'react';


const VerifiedPlacesMap: FC<GoogleMapEmbedProps> = ({
  width = "100%",
  height = "100%",
  locationQuery,
  latitude,
  longitude,
  className = "",
}) => {

    if ((!locationQuery && (!latitude || !longitude)) || (locationQuery && (latitude || longitude))) {
        throw new Error("You must provide either 'locationQuery' or both 'latitude' and 'longitude', but not both.");
    }

    const apiKey = process.env.CS_GMAPS_API_KEY;

    return (
        <div className={"google-maps-embed " + className}>
            {/* Replace this with your embed*/ }
            <iframe
                width={width}
                height={height}
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default VerifiedPlacesMap;