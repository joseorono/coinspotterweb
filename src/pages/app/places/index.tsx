import React, { useState } from 'react';
import { api } from "~/utils/api";
import GoogleMapWideEmbed from '../../../components/gmaps/gmapWideEmbed';

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
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>Página de lugares</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>

        {searchResults.isLoading ? (
          <div>Cargando...</div>
        ) : searchResults.isError ? (
          <div>Error al cargar los resultados de búsqueda.</div>
        ) : (
          searchResults.data && (
            <div>
              <h2>Resultados de la búsqueda:</h2>
              <ul>
                {searchResults.data.places.map((place: Place) => (
                  <li key={place.id} onClick={() => handlePlaceSelect(place)}>
                    <strong>Nombre:</strong> {place.name},{' '}
                    <strong>Dirección:</strong> {place.address}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      {selectedPlace && selectedPlace.latitude && selectedPlace.longitude && (
        <div style={{ flex: 1 }}>
          <GoogleMapWideEmbed
            height={350}
            latitude={selectedPlace.latitude}
            longitude={selectedPlace.longitude}
          />
        </div>
      )}
    </div>
  );
}