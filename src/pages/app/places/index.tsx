import React, { useState } from 'react';
import { api } from "~/utils/api";
import GoogleMapWideEmbed from '../../../components/gmaps/gmapWideEmbed';
import Link from 'next/link';
import VerifiedPlacesMap from "~/components/gmaps/VerifiedPlacesMap";

type Place = {
  id: number;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
};

export default function PlacesIndex() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = api.places.searchPlaces.useQuery<{ places: Place[] }>({ query: searchQuery });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleSearch = async () => {
    try {
      // Realiza la búsqueda aquí
      await searchResults.refetch();
    } catch (error) {
      console.error('Error al buscar lugares:', error);
    }
  };

  const handlePlaceSelect = (place: Place) => {
    // Al seleccionar un lugar, muestra el mapa si tiene información de latitud y longitud
    if (place.latitude && place.longitude) {
      setSelectedPlace(place);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ flex: 1, maxWidth: '600px', marginRight: '20px' }}>
        <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Explora Lugares</h1>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar lugares..."
            style={{ padding: '8px', fontSize: '16px', width: '80%' }}
          />
          <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '8px', fontSize: '16px' }}>
            Buscar
          </button>
        </div>

        {searchResults.isLoading ? (
          <div>Cargando...</div>
        ) : searchResults.isError ? (
          <div>Error al cargar los resultados de búsqueda.</div>
        ) : (
          searchResults.data && (
            <div>
              <h2 style={{ marginBottom: '10px' }}>Resultados de la búsqueda:</h2>
              <ul>
                {searchResults.data.places.map((place: Place) => (
                  <li key={place.id} onClick={() => handlePlaceSelect(place)} style={{ cursor: 'pointer', marginBottom: '15px' }}>
                    <strong>Nombre:</strong> {place.name},{' '}
                    <strong>Dirección:</strong> {place.address}
                    <div>
                      <Link href={`/app/places/${place.id}`}>
                          <button style={{ margin: '5px' }}>Ver más detalle</button>
                      </Link>
                      <button style={{ margin: '5px' }} onClick={() => setSelectedPlace(place)}>
                        Ver mapa
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      <div style={{ flex: 1 }}>
        {selectedPlace && selectedPlace.latitude && selectedPlace.longitude ? (
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
  );
}


