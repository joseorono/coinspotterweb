import React from "react";
import { useRouter } from "next/router";
import ImageGalleries from "../../components/imageGalleries/placeDetailsGallery";
import GMaps from "../../components/gmaps/gmapEmbed";
import { api } from "~/utils/api";

const PlaceDetail = () => {
  const router = useRouter();
  const { place_id } = router.query;
  //   const { place }: { place: number } = api.places.place.useQuery({ place_id });

  console.log(router.query);
  //   console.log(place.id);
  return (
    <div>
      <div className="max-w-992px mx-auto w-full">
        {/* Contenido del contenedor */}
        <div className="b-radius flex flex-row items-center justify-center align-middle">
          <div className="map-btn">
            <img
              className="roundElement-button"
              src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"
              alt=""
            />
          </div>
          <h1 className="w-1/3 p-10">Nombre del Place </h1>
        </div>
        <hr className="largeHeaderHr" />
        <ImageGalleries />

        <hr className="largeHeaderHr" />

        <div className="max-w-992px mx-auto my-16 flex w-full flex-col rounded-3xl shadow-sm shadow-neutral md:w-[80%] md:flex-row">
          <div className="text-light neutral-focus content-middle flex flex-row items-center justify-center p-6 md:w-[40%] md:flex-col md:justify-center">
            <div className="flex flex-col justify-center rounded-e-3xl px-10">
              <div className="map-btn flex justify-center py-4">
                <img
                  className="roundElement-button"
                  src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"
                  alt=""
                />
              </div>
              <h1 className="mb-4 text-3xl font-bold">Place ID: {place_id}</h1>
              <p className="mb-4 text-lg">Descripción del lugar...</p>
              {/* <h3 className="mb-2 text-xl font-bold">Address: .........</h3> */}
            </div>
          </div>
          <div className="w-full">
            <GMaps latitude={3} longitude={4} />
          </div>
        </div>
      </div>

      {/* Resto del contenido de la página */}
    </div>
  );
};

export default PlaceDetail;
