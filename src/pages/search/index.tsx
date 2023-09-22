import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Spinner from "./spinner";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface SearchResult {
  id: number; // Actualiza con el tipo real para tus IDs
  nombre?: string; // Actualiza con las propiedades que desees mostrar
  name?: string;
  address?: string;
  description?: string;
  google_places_id?: string;
  profile_pic_url?: string;
  // Agrega más propiedades según sea necesario para otros modelos
}

const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const SearchPage = () => {
  const router = useRouter();
  const searchQuery = router.query.q as string;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const response = useSWR(`/api/search?query=${encodedSearchQuery}`, fetchData);

  const handleBack = () => {
    router.push("/").catch(console.error);
  };

  const [selectedProductFilter, setSelectedProductFilter] = useState("");
  const [selectedPlaceFilter, setSelectedPlaceFilter] = useState("");
  const [selectedAcceptedFilter, setSelectedAcceptedFilter] = useState("");
  const [selectedMethodFilter, setSelectedMethodFilter] = useState("");

  const handleApplyProductFilter = () => {
    // Lógica de filtrado para producto
  };

  const handleApplyPlaceFilter = () => {
    // Lógica de filtrado para Places
    const filters = {
      name: selectedPlaceFilter,
      description: selectedPlaceFilter,
      address: selectedPlaceFilter,
      google_places_id: selectedPlaceFilter,
      profile_pic_url: selectedPlaceFilter,
    };

    // Filtrar resultados aquí con los filtros seleccionados
  };

  const handleApplyAcceptedFilter = () => {
    // Lógica de filtrado para Payment Methods Accepted
  };

  const handleApplyMethodFilter = () => {
    // Lógica de filtrado para Payment Methods
  };

  if (!encodedSearchQuery) {
    void router.push("/").catch(console.error);
    return null;
  }

  if (response.error) {
    console.error(response.error);
    return null;
  }

  if (!response.data) {
    return <Spinner />;
  }

  const {
    producto = [],
    places = [],
    paymentMethodsAccepted = [],
    paymentMethods = [],
  }: {
    producto: SearchResult[];
    places: SearchResult[];
    paymentMethodsAccepted: SearchResult[];
    paymentMethods: SearchResult[];
  } = response.data as {
    producto: SearchResult[];
    places: SearchResult[];
    paymentMethodsAccepted: SearchResult[];
    paymentMethods: SearchResult[];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Main Page
        </button>
      </div>
      <span className="text-xl mb-4">
        Showing results for: <span className="font-semibold">{searchQuery}</span>
      </span>
      <Tabs>
        <TabList className="flex space-x-4">
          <Tab className="bg-blue-500 p-2 rounded-lg">Producto</Tab>
          <Tab className="bg-blue-500 p-2 rounded-lg">Places</Tab>
          <Tab className="bg-blue-500 p-2 rounded-lg">Payment Methods Accepted</Tab>
          <Tab className="bg-blue-500 p-2 rounded-lg">Payment Methods</Tab>
        </TabList>
        <div className="mt-4"></div>
        <TabPanel>
          <div className="mb-4">
            <select
              value={selectedProductFilter}
              onChange={(e) => setSelectedProductFilter(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">All Products</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              {/* Agregar más opciones de filtro según sea necesario */}
            </select>
            <button
              onClick={handleApplyProductFilter}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Apply Filter
            </button>
          </div>
          {producto.length === 0 ? (
            <p>No products found.</p>
          ) : (
            producto.map((producto: SearchResult) => (
              <div key={producto.id}>{producto.nombre}</div>
            ))
          )}
        </TabPanel>
        
        <TabPanel>
          <div className="mb-4">
            <select
              value={selectedPlaceFilter}
              onChange={(e) => setSelectedPlaceFilter(e.target.value)}
            >
              <option value="">All Places</option>
              <option value="place1">Place 1</option>
              <option value="place2">Place 2</option>
              {/* Agregar más opciones de filtro según sea necesario */}
            </select>
            <button
              onClick={handleApplyPlaceFilter}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Apply Filter
            </button>
          </div>
          {places.length === 0 ? (
            <p>No places found.</p>
          ) : (
            places.map((place: SearchResult) => (
              <div key={place.id}>{place.name}</div>
            ))
          )}
        </TabPanel>

        <TabPanel>
          <div className="mb-4">
            <select
              value={selectedAcceptedFilter}
              onChange={(e) => setSelectedAcceptedFilter(e.target.value)}
            >
              <option value="">All Payment Methods Accepted</option>
              <option value="method1">Method 1</option>
              <option value="method2">Method 2</option>
              {/* Agregar más opciones de filtro según sea necesario */}
            </select>
            <button
              onClick={handleApplyAcceptedFilter}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Apply Filter
            </button>
          </div>
          {paymentMethodsAccepted.length === 0 ? (
            <p>No payment methods accepted found.</p>
          ) : (
            paymentMethodsAccepted.map((method: SearchResult) => (
              <div key={method.id}>{method.name}</div>
            ))
          )}
        </TabPanel>

        <TabPanel>
          <div className="mb-4">
            <select
              value={selectedMethodFilter}
              onChange={(e) => setSelectedMethodFilter(e.target.value)}
            >
              <option value="">All Payment Methods</option>
              <option value="method1">Method 1</option>
              <option value="method2">Method 2</option>
              {/* Agregar más opciones de filtro según sea necesario */}
            </select>
            <button
              onClick={handleApplyMethodFilter}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Apply Filter
            </button>
          </div>
          {paymentMethods.length === 0 ? (
            <p>No payment methods found.</p>
          ) : (
            paymentMethods.map((method: SearchResult) => (
              <div key={method.id}>{method.name}</div>
            ))
          )}
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default SearchPage;
