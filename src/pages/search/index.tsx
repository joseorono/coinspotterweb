import { useRouter } from "next/router";
import useSWR from "swr";
import Spinner from "./spinner";
import Link from "next/link";

interface SearchResult {
  id: number; // Update with the actual type for your IDs
  nombre?: string; // Update with the actual properties you want to display
  name?: string;
  address?: string;
  // Add more properties as needed for other models
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
      <div>
        <h2>Productos</h2>
        {productos.length === 0 ? (
          <p>No products found.</p>
        ) : (
          productos.map((producto: SearchResult) => (
            <div key={producto.id}>{producto.nombre}</div>
          ))
        )}
      </div>
      <div>
        <h2>Places</h2>
        {places.length === 0 ? (
          <p>No places found.</p>
        ) : (
          places.map((place: SearchResult) => (
            <div key={place.id}>{place.name}</div>
          ))
        )}
      </div>
      <div>
        <h2>Payment Methods Accepted</h2>
        {paymentMethodsAccepted.length === 0 ? (
          <p>No payment methods accepted found.</p>
        ) : (
          paymentMethodsAccepted.map((method: SearchResult) => (
            <div key={method.id}>{method.name}</div>
          ))
        )}
      </div>
      <div>
        <h2>Payment Methods</h2>
        {paymentMethods.length === 0 ? (
          <p>No payment methods found.</p>
        ) : (
          paymentMethods.map((method: SearchResult) => (
            <div key={method.id}>{method.name}</div>
          ))
        )}
      </div>
    </>
  );
};

export default SearchPage;


