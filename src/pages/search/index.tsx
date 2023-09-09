import { useState } from "react";
import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useTRPC } from '~/server/api/trpc';
import { searchRouter } from '~/server/api/routers/search';
import Spinner from "./spinner";
import AppLayout from "~/components/layout/AppLayout";

interface SearchResult {
  id: number;
  nombre?: string;
  name?: string;
  address?: string;
  description?: string;
  google_places_id?: string;
  profile_pic_url?: string;
}

const SearchPage = () => {
  const router = useRouter();
  const searchQuery = router.query.q as string;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data: searchResult, isLoading } = useTRPC(searchRouter.search, { query: encodedSearchQuery });

  const handleBack = () => {
    router.push("/").catch(console.error);
  };

  const [selectedProductFilter, setSelectedProductFilter] = useState("");
  const [selectedPlaceFilter, setSelectedPlaceFilter] = useState("");
  const [selectedAcceptedFilter, setSelectedAcceptedFilter] = useState("");
  const [selectedMethodFilter, setSelectedMethodFilter] = useState("");

  const handleApplyProductFilter = () => {
    // Lógica de filtrado para Productos
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
    router.push("/").catch(console.error);
    return null;
  }

  return (
    <>
    <AppLayout pageTitle="Search">
    
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Main Page
        </button>
      </div>
      <span className="text-xl">
        Showing results for: <span className="font-semibold">{searchQuery}</span>
      </span>
      <Tabs>
        <TabList>
          <Tab>All categories</Tab>
          <Tab>Places</Tab>
          <Tab>Payment Methods Accepted</Tab>
          <Tab>Payment Methods</Tab>          
        </TabList>

        <TabPanel>
          <div className="mb-4">
            <select
              value={selectedProductFilter}
              onChange={(e) => setSelectedProductFilter(e.target.value)}
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
          {isLoading ? (
            <p>Loading...</p>
          ) : searchResult && searchResult.productos.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <ul>
              {searchResult?.productos.map((producto: SearchResult) => (
                <li key={producto.id}>{producto.nombre}</li>
              ))}
            </ul>
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
          {isLoading ? (
            <p>Loading...</p>
          ) : searchResult && searchResult.places.length === 0 ? (
            <p>No places found.</p>
          ) : (
            <ul>
              {searchResult?.places.map((place: SearchResult) => (
                <li key={place.id}>{place.name}</li>
              ))}
            </ul>
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
        {isLoading ? (
          <p>Loading...</p>
        ) : searchResult && searchResult.paymentMethodsAccepted.length === 0 ? (
          <p>No payment methods accepted found.</p>
        ) : (
          <ul>
            {searchResult?.paymentMethodsAccepted.map((method: SearchResult) => (
              <li key={method.id}>{method.name}</li>
            ))}
          </ul>
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
        {isLoading ? (
          <p>Loading...</p>
        ) : searchResult && searchResult.paymentMethods.length === 0 ? (
          <p>No payment methods found.</p>
        ) : (
          <ul>
            {searchResult?.paymentMethods.map((method: SearchResult) => (
              <li key={method.id}>{method.name}</li>
            ))}
          </ul>
        )}
      </TabPanel>
      </Tabs>
      </AppLayout>
    </>
  );
};

export default SearchPage;