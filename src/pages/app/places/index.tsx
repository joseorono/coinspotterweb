import React, { useState } from 'react';
import { api } from "~/utils/api";
import GoogleMapWideEmbed from '../../../components/gmaps/gmapWideEmbed';
import Link from 'next/link';
import VerifiedPlacesMap from "~/components/gmaps/VerifiedPlacesMap";
import AppLayout from "~/components/layout/AppLayout";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Place = {
  id: number;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
};

export default function PlacesIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = api.places.searchPlaces.useQuery<{ places: Place[] }>({
    query: searchQuery,
  });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleSearch = async (): Promise<void> => {
    try {
      // Realiza la búsqueda aquí
      await searchResults.refetch();
    } catch (error) {
      console.error("Error al buscar lugares:", error);
    }
  };

  const handlePlaceSelect = (place: Place) => {
    // Al seleccionar un lugar, muestra el mapa si tiene información de latitud y longitud
    if (place.latitude && place.longitude) {
      setSelectedPlace(place);
    }
  };

  return (
    <AppLayout pageTitle="Places">
      <div className="mt-[20px] flex flex-col justify-center md:flex-row md:justify-start">
        <div style={{ flex: 1, maxWidth: "600px", marginRight: "20px" }}>
          <h1 className="mb-[5px] p-2 text-center md:text-start">
            Explora Lugares
          </h1>
          {/* <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar lugares..."
            style={{ padding: "8px", fontSize: "16px", width: "80%" }}
          />
          <button
            onClick={() => handleSearch()}
            style={{ marginLeft: "10px", padding: "8px", fontSize: "16px" }}
          >
          Buscar
          </button>
        </div> */}

          <div className="flex items-center justify-center p-2 md:justify-start">
            <div className="w-4/5 rounded-lg bg-gray-900 p-5">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-bl-lg rounded-tl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-[360px] bg-white pl-2 text-base font-semibold text-gray-600 outline-0"
                  placeholder="Buscar lugares..."
                />
                <button
                  onClick={() => handleSearch()}
                  className="rounded-br-lg rounded-tr-lg bg-gray-800 p-2 font-semibold text-white transition-colors hover:bg-gray-600"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {searchResults.isLoading ? (
            <div>Cargando...</div>
          ) : searchResults.isError ? (
            <div>Error al cargar los resultados de búsqueda.</div>
          ) : (
            searchResults.data && (
              <div>
                <h3 className="mb-[5px] p-2 text-center md:text-start">
                  Resultados de la búsqueda:
                </h3>
                <ul>
                  {searchResults.data.places.map((place: Place) => (
                    // <li key={place.id} onClick={()=> handlePlaceSelect(place)}
                    //   style={{ cursor: 'pointer', marginBottom: '15px' }}>
                    //   <strong>Nombre:</strong> {place.name},{' '}
                    //   <strong>Dirección:</strong> {place.address}
                    //   <div>
                    //     <Link href={`/app/places/${place.id}`}> <button style={{ margin: '5px' }}>Ver más detalle</button>
                    //     </Link>
                    //     <button style={{ margin: '5px' }} onClick={()=> setSelectedPlace(place)}>
                    //       Ver mapa
                    //     </button>
                    //   </div>
                    // </li>

                    <li
                      className="flex justify-center p-2 md:justify-start"
                      key={place.id}
                      onClick={() => handlePlaceSelect(place)}
                    >
                      <div className="group relative mx-2 my-6 flex h-1/2 w-4/5 flex-col items-start justify-start gap-2 rounded-lg bg-gray-900 p-4 shadow-gray-800 duration-500 hover:-translate-y-2 hover:shadow-xl">
                        <div className="absolute -bottom-7 -right-7 flex h-2/5 w-1/2 cursor-pointer justify-center rounded-lg bg-gray-800 shadow-md duration-700 hover:bg-gray-700 group-hover:-translate-x-1 group-hover:-translate-y-1 md:h-[40%]">
                          <button
                            onClick={() => setSelectedPlace(place)}
                            className="text-gray-100"
                          >
                            Ver Mapa
                          </button>
                        </div>

                        <div className="w-full">
                          <div className="flex flex-row justify-between">
                            <h2 className="mb-2 text-2xl font-bold text-gray-100">
                              {place.name}
                            </h2>
                            <div>
                              <AiFillStar
                                size={40}
                                color="gold"
                                className="cursor-pointer"
                              />

                              <AiOutlineStar
                                size={40}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                          <p className="line-clamp-3 text-gray-200">
                            Dirección: {place.address}
                          </p>
                        </div>
                        <Link href={`/app/places/${place.id}`}>
                          <button className="mt-3 rounded bg-gray-800 p-2 px-3 text-gray-100 hover:bg-gray-700 md:p-4 md:px-6">
                            Ver más detalle
                          </button>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div style={{ flex: 1 }}>
          {selectedPlace &&
          selectedPlace.latitude &&
          selectedPlace.longitude ? (
            <GoogleMapWideEmbed
              height={350}
              latitude={selectedPlace.latitude}
              longitude={selectedPlace.longitude}
            />
          ) : (
            <VerifiedPlacesMap />
          )}
        </div>
      </div>
    </AppLayout>
  );
}