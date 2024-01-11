import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ImageGalleries from "~/components/imageGalleries/placeDetailsGallery";
import GoogleMapEmbed from "~/components/gmaps/gmapEmbed";
import { api } from "~/utils/api";
import AppLayout from "~/components/layout/AppLayout";
import { th } from "@faker-js/faker";



const PlaceDetail = () => {

  const { query } = useRouter();
  let place_id = '';
  if (typeof query.place_id === 'string') {
    place_id = query.place_id;
  } else if (Array.isArray(query.place_id)) {
    place_id = query.place_id[0] as string; // or some logic to decide which element of the array to use
  }
  const placeData = api.places.getPlaceById.useQuery({ placeId: place_id });


  //   const { place }: { place: number } = api.places.place.useQuery({ place_id });

  const gallerySlides:lightBoxSlide[] = [
    { src: "https://source.unsplash.com/random/640x480" },
    { src: "https://source.unsplash.com/random/640x480" },
    { src: "https://source.unsplash.com/random/640x480" },
  ];


  console.log(query);
  //   console.log(place.id);
  return (
    <AppLayout pageTitle={"CoinSpotter - Place " + place_id}>
      <div className="p-4 shadow-md shadow-primary-focus">
        <div className="mx-auto w-full max-w-[992px]">
          {/* Contenido del contenedor */}
          <div className="b-radius flex flex-col content-center items-center justify-center gap-4 text-center md:flex-row">
            <div className="map-btn">
              <img
                className="roundElement"
                src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"
                alt=""
              />
            </div>
            <h1 className="w-1/3">Nombre del Lugar</h1>
          </div>
          <hr className="largeHeaderHr" />
          <ImageGalleries slides={gallerySlides} />

          <hr className="largeHeaderHr" />

          <div className="mx-auto my-16 flex h-auto w-full max-w-[992px] flex-col rounded-3xl shadow-sm shadow-neutral md:w-full md:flex-row">
            <div className="text-light neutral-focus flex flex-col justify-center p-4 md:w-[40%]">
              <div className="map-btn flex justify-center py-4">
                <img
                  className="roundElement-button"
                  src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"
                  alt=""
                />
              </div>
              <h1 className="mb-4 font-bold md:text-xl">
                Place ID: {place_id}
              </h1>
              <p className="text-md mb-4 max-h-screen grow-[999] basis-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores obcaecati minima officiis saepe qui tempore nam laborum exercitationem illo pariatur facilis minus iure deserunt, at eos! Et, sed. Minima?
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores obcaecati minima officiis saepe qui tempore nam laborum exercitationem illo pariatur facilis minus iure deserunt, at eos! Et, sed. Minima?
               
              </p>
              {/* <h3 className="mb-2 text-xl font-bold">Address: .........</h3> */}
            </div>
            <div className="w-full">
              <GoogleMapEmbed latitude={33} longitude={4} />
            </div>
          </div>
        </div>

        {
          JSON.stringify(placeData.data)
        }

        {/* Resto del contenido de la página */}
      </div>
    </AppLayout>
  );
};

export default PlaceDetail;
