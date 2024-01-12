import React, { FC } from 'react';


const VerifiedPlacesMap: FC<GoogleMapEmbedProps> = ({
  width = "100%",
  height = "100%",
  locationQuery,
  latitude,
  longitude,
  className = "",
}) => {
    
    const apiKey = process.env.CS_GMAPS_API_KEY;    

    return (
        <div className={"google-maps-embed " + className}>          
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1q94xGgf9s3a0snwHvhK9rI_uWIHey_Y&ehbc=2E312F&noprof=1"
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