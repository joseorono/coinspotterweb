import React, { useState } from 'react';
import { api } from "~/utils/api";

export default function PlacesIndex() {
    const [searchQuery, setSearchQuery] = useState('');
    const searchResults = api.places.searchPlaces.useQuery({ query: searchQuery });
  
    const handleSearch = () => {
      // Realiza la búsqueda aquí al presionar un botón o según tus necesidades
      // Puedes usar el valor de 'searchQuery' para realizar la búsqueda
    };
  
    return (
      <div>
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
                {searchResults.data.places.map((place) => (
                  <li key={place.id}>
                    <strong>Nombre:</strong> {place.name},{' '}
                    <strong>Dirección:</strong> {place.address}                   
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    );
  }