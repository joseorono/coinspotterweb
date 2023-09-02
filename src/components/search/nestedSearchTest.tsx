import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Spinner from "./spinner";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface SearchResult {
  id: number;
  nombre?: string;
  name?: string;
  address?: string;
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

  const [productSearch, setProductSearch] = useState("");
  const [placesSearch, setPlacesSearch] = useState(""); // Estado para la búsqueda avanzada de places
  const [paymentAcceptedSearch, setPaymentAcceptedSearch] = useState(""); // Estado para la búsqueda avanzada de payment methods accepted

  const handleProductSearch = () => {
    const url = `/api/search?query=${encodeURI(productSearch)}`;
    response.mutate(url);
  };

  const handlePlacesSearch = () => {
    // Realiza una nueva búsqueda de places con el término de búsqueda avanzada
    const url = `/api/search?query=${encodeURI(placesSearch)}`;
    response.mutate(url);
  };

  const handlePaymentAcceptedSearch = () => {
    // Realiza una nueva búsqueda de payment methods accepted con el término de búsqueda avanzada
    const url = `/api/search?query=${encodeURI(paymentAcceptedSearch)}`;
    response.mutate(url);
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
    productos,
    places,
    paymentMethodsAccepted,
    paymentMethods,
  }: {
    productos: SearchResult[];
    places: SearchResult[];
    paymentMethodsAccepted: SearchResult[];
    paymentMethods: SearchResult[];
  } = response.data as {
    productos: SearchResult[];
    places: SearchResult[];
    paymentMethodsAccepted: SearchResult[];
    paymentMethods: SearchResult[];
  };

  return (
    <>
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
          <Tab>Productos</Tab>
          <Tab>Places</Tab>
          <Tab>Payment Methods Accepted</Tab>
          <Tab>Payment Methods</Tab>
        </TabList>

        <TabPanel>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Products"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
            />
            <button
              onClick={handleProductSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Search
            </button>
          </div>
          {productos.length === 0 ? (
            <p>No products found.</p>
          ) : (
            productos.map((producto: SearchResult) => (
              <div key={producto.id}>{producto.nombre}</div>
            ))
          )}
        </TabPanel>
        <TabPanel>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Places"
              value={placesSearch}
              onChange={(e) => setPlacesSearch(e.target.value)}
            />
            <button
              onClick={handlePlacesSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Search
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
            <input
              type="text"
              placeholder="Search Payment Methods Accepted"
              value={paymentAcceptedSearch}
              onChange={(e) => setPaymentAcceptedSearch(e.target.value)}
            />
            <button
              onClick={handlePaymentAcceptedSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Search
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
          {paymentMethods.length === 0 ? (
            <p>No payment methods found.</p>
          ) : (
            paymentMethods.map((method: SearchResult) => (
              <div key={method.id}>{method.name}</div>
            ))
          )}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default SearchPage;