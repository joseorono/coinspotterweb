import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [productos, setProductos] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    console.log(data);

    if (Array.isArray(data.productos)) {
      setProductos(data.productos);
    } else {
      setProductos([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {productos.map((producto: any) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
    </div>
  );
};

export default SearchBar;
