import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ImageGalleries from "~/components/imageGalleries/placeDetailsGallery";
import GoogleMapEmbed from "~/components/gmaps/gmapEmbed";
import { api } from "~/utils/api";
import AppLayout from "~/components/layout/AppLayout";
import { th } from "@faker-js/faker";
import BsCenteredContainer from "~/components/layout/BsCenteredContainer";
import Image from 'next/image'


const PlaceDetail = () => {
  const { query } = useRouter();
  let place_id = "";
  if (typeof query.place_id === "string") {
    place_id = query.place_id;
  } else if (Array.isArray(query.place_id)) {
    place_id = query.place_id[0] as string; // or some logic to decide which element of the array to use
  }

  const requestPlace = api.places.getPlaceById.useQuery({ placeId: place_id });

  const requestPicturePlace = api.picture_places.getPicturePlaceById.useQuery({
    picturePlaceId: place_id,
  });

  async function getPicturePlaceArr(data: any): lightBoxSlide[] {
    // let results: lightBoxSlide[] = [];
    // data.forEach((element) => {});
    console.log("Tipo de Dato");
    console.log(typeof data);
    console.log(data);
    return await data.map((pic: any) => {
      console.log(pic);
      let result: lightBoxSlide = { src: "/places_pics/" + pic?.url };
      return result;
    });
  }

  let isAddressValid = requestPlace.data?.address !== null;
  let isLatitudeValid = requestPlace.data?.latitude !== null;
  let isLongitudeValid = requestPlace.data?.longitude !== null;

  //   const { place }: { place: number } = api.places.place.useQuery({ place_id });
  // const picPlacesArr: lightBoxSlide[] = requestPicturePlace.data?.map((pic) => {
  //   src: "/places_pics/" + pic.url;
  // });
  console.log(requestPicturePlace.data);

  const gallerySlides: lightBoxSlide[] =
    getPicturePlaceArr(requestPicturePlace);

  console.log(gallerySlides);

  console.log(query);
  //   console.log(place.id);
  return (
    <AppLayout pageTitle={requestPlace.data?.name + " - CoinSpotter"}>
      <BsCenteredContainer extraClasses="bg-white rounded-xl shadow-lg p-6 mx-auto text-jet">
        <div className="mx-auto w-full max-w-[992px]">
          {/* Contenido del contenedor */}
          <div className="b-radius flex flex-col content-center items-center justify-center gap-4 text-center md:flex-row">
            <div className="map-btn">
              <Image
                className="roundElement"
                width={80}
                height={80}
                src={"/places_pfp/" + requestPlace.data?.profile_pic_url}
                alt="Company Logo"
              />
            </div>
            <h1 className="w-1/3">{requestPlace.data?.name}</h1>
          </div>
          <div className="mx-auto my-8 max-w-screen-sm rounded-xl border bg-white_smoke-900 p-4 text-center text-lg text-jet-600 shadow-lg">
            {requestPlace.data?.description}
          </div>

          {(isAddressValid || isLatitudeValid || isLongitudeValid) && (
            <div className="card mx-auto my-16 w-96 border bg-white_smoke-900">
              <div className="card-body">
                <h1 className="card-title mb-4 uppercase">Como llegar</h1>
                <div className="text-sm">
                  {isAddressValid && (
                    <>
                      <b className="uppercase">Dirección: </b>
                      <span className="text-jet-600">
                        {requestPlace.data?.address?.toString()}.
                      </span>
                      <br />
                    </>
                  )}
                  {isLatitudeValid && (
                    <>
                      <b className="uppercase">Latitud: </b>
                      <span className="text-jet-600">
                        {requestPlace.data?.latitude?.toString()}
                      </span>
                      <br />
                    </>
                  )}
                  {isLongitudeValid && (
                    <>
                      <b className="uppercase">Longitud: </b>
                      <span className="text-jet-600">
                        {requestPlace.data?.longitude?.toString()}
                      </span>
                      <br />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="my-8 text-center text-jet">
            <h2 className="mb-4">Quieres delivery? Tienes preguntas?</h2>
            <a href={"tel:" + requestPlace.data?.phone_number}>
              <button className="btn btn-secondary btn-lg my-4 text-white">
                Llámalos
              </button>
            </a>
          </div>

          <hr className="largeHeaderHr" />
          <ImageGalleries slides={gallerySlides} />

          <div className="mx-auto my-16 flex h-auto w-full max-w-[992px] flex-col rounded-3xl border bg-white_smoke-900 shadow-sm shadow-neutral md:w-full md:flex-row">
            <div className="text-light neutral-focus flex flex-col justify-center p-4 md:w-[40%]">
              <div className="map-btn flex justify-center py-4">
                <Image
                  className="roundElement"
                  width={80}
                  height={80}
                  src={"/places_pfp/" + requestPlace.data?.profile_pic_url}
                  alt="Company Logo"
                />
              </div>
              <h1 className="mb-4 font-bold md:text-xl">
                {/* Place ID: {place_id} */}
              </h1>
              <p className="text-md mb-4 max-h-screen grow-[999] basis-0">
                {requestPlace.data?.description}
              </p>
              {/* <h3 className="mb-2 text-xl font-bold">Address: .........</h3> */}
            </div>
            <div className="w-full">
              {requestPlace.isSuccess &&
                (isAddressValid ? (
                  <GoogleMapEmbed locationQuery={requestPlace.data?.address} />
                ) : isLatitudeValid && isLongitudeValid ? (
                  <GoogleMapEmbed
                    latitude={requestPlace.data?.latitude?.toString()}
                    longitude={requestPlace.data?.longitude?.toString()}
                  />
                ) : (
                  <>{/* <p>Not enough information to display a map.</p> */}</>
                ))}
            </div>
          </div>
        </div>

        {/* JSON.stringify(requestPlace.data) */}

        {/* Resto del contenido de la página */}
      </BsCenteredContainer>
    </AppLayout>
  );
};

export default PlaceDetail;
