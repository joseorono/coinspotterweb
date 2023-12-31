import { useState } from "react";
import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Spinner from "~/components/suspense/spinner";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AppLayout from "~/components/layout/AppLayout";
import SearchBar from "~/components/SearchInput";

interface SearchResult {
  id: number; // Actualiza con el tipo real para tus IDs
  nombre?: string; // Actualiza con las propiedades que desees mostrar
  name?: string;
  address?: string;
  description?: string;
  google_places_id?: string;
  profile_pic_url?: string;
  terms_policy_url?: string;
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
  const [activeTab, setActiveTab] = useState(1);
  // const [searchParams, setSearchParams] = useSearchParams();

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

  /*
  if (!encodedSearchQuery) {
    void router.push("/").catch(console.error);
    return null;
  }
  */

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
    payment_Methods_Accepted = [],
    payment_Methods = [],
  }: {
    producto: SearchResult[];
    places: SearchResult[];
    payment_Methods_Accepted: SearchResult[];
    payment_Methods: SearchResult[];
  } = response.data as {
    producto: SearchResult[];
    places: SearchResult[];
    payment_Methods_Accepted: SearchResult[];
    payment_Methods: SearchResult[];
  };

  console.log(places, payment_Methods);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getTabClassName = (tabId) => {
    return `tab tab-lifted ${activeTab === tabId ? "tab-active" : ""}`;
  };

  // const setCleanUrl = (id: string, name: string): void => {
  //   setParams({ id: id, name: name });
  // };

  // const id = params.get("id");
  // const name = params.get("name");

  return (
    <AppLayout pageTitle="CoinSpotter - Advanced Search">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="mb-4">
          <button
            onClick={handleBack}
            className="rounded block mx-auto mb-8  bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          >
            Back to Main Page
          </button>

          <SearchBar />
          
        </div>
        <span className="mb-4 text-xl">
          Showing results for:{" "}
          <span className="font-semibold">{searchQuery}</span>
        </span>
        <Tabs>
          <TabList className="flex space-x-4">
            <div className="tabs">
              <Tab
                className={getTabClassName(1)}
                onClick={() => handleClick(1)}
              >
                Producto
              </Tab>
              <Tab
                className={getTabClassName(2)}
                onClick={() => handleClick(2)}
              >
                Lugares
              </Tab>
              <Tab
                className={getTabClassName(3)}
                onClick={() => handleClick(3)}
              >
                Métodos de Pago Aceptados
              </Tab>
              <Tab
                className={getTabClassName(4)}
                onClick={() => handleClick(4)}
              >
                Métodos de Pago
              </Tab>
            </div>
          </TabList>

          <div className="mt-4"></div>

          <TabPanel>
            <div className="mb-4 text-black">
              <select
                value={selectedProductFilter}
                onChange={(e) => setSelectedProductFilter(e.target.value)}
                className="rounded border p-2 text-black"
              >
                <option value="">All Products</option>
                <option value="category1">Categoría 1</option>
                <option value="category2">Categoría 2</option>
                {/* Agregar más opciones de filtro según sea necesario */}
              </select>
              <button
                onClick={handleApplyProductFilter}
                className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
              >
                Filtrar
              </button>
            </div>
            {producto.length === 0 ? (
              <div>Ningún Producto encontrado.</div>
            ) : (
              producto.map((producto: SearchResult) => (
                <tbody key={producto.id}>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>{producto.id}</th>
                    <td>{producto.name}</td>
                    <td>
                      <Link
                        key={producto.id}
                        href={{
                          pathname: `/app/products/${producto.id}`,
                          query: {
                            id: producto.id,
                            name: producto.name,
                          },
                        }}
                      >
                        <button className="btn btn-secondary mx-2">
                          Ver Detalles
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </TabPanel>

          <TabPanel>
            <div className="mb-4">
              <select
                value={selectedPlaceFilter}
                onChange={(e) => setSelectedPlaceFilter(e.target.value)}
                className="rounded border p-2 text-black"
              >
                <option value="">Todos</option>
                <option value="place1">Lugar 1</option>
                <option value="place2">Lugar 2</option>
                {/* Agregar más opciones de filtro según sea necesario */}
              </select>
              <button
                onClick={handleApplyPlaceFilter}
                className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
              >
                Filtrar
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table text-center">
                <thead className="text-lg">
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Ubicación</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                {places.length === 0 ? (
                  <p>No places found.</p>
                ) : (
                  places.map((place: SearchResult) => (
                    <tbody key={place.id}>
                      {/* row 1 */}
                      <tr className="hover">
                        <th>{place.id}</th>
                        <td>{place.name}</td>
                        <td>{place.address}</td>
                        <td>
                          <Link
                            key={place.id}
                            href={{
                              pathname: `/app/places/${place.id}`,
                              query: {
                                id: place.id,
                                name: place.name,
                                description: place.description,
                              },
                            }}
                          >
                            <button className="btn btn-secondary mx-2">
                              Ver Detalles
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))
                )}
              </table>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mb-4">
              <select
                value={selectedAcceptedFilter}
                onChange={(e) => setSelectedAcceptedFilter(e.target.value)}
                className="rounded border p-2 text-black"
              >
                <option value="">Métodos de Pago Aceptados</option>
                <option value="method1">Method 1</option>
                <option value="method2">Method 2</option>
                {/* Agregar más opciones de filtro según sea necesario */}
              </select>
              <button
                onClick={handleApplyAcceptedFilter}
                className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
              >
                Apply Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table text-center">
                <thead className="text-lg">
                  <tr>
                    <th>#</th>
                  </tr>
                </thead>
                {payment_Methods_Accepted.length === 0 ? (
                  <p>No se encontraron métodos de pago.</p>
                ) : (
                  payment_Methods_Accepted.map(
                    (methodAccepted: SearchResult) => (
                      <tbody key={methodAccepted.id}>
                        {/* row 1 */}
                        <tr className="hover">
                          <th>{methodAccepted.id}</th>
                          <td>
                            <Link
                              key={methodAccepted.id}
                              href={{
                                pathname: `/app/methodAccepted/${methodAccepted.id}`,
                                query: {
                                  id: methodAccepted.id,
                                  name: methodAccepted.name,
                                },
                              }}
                            >
                              <button className="btn btn-secondary mx-2">
                                Ver Detalles
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    )
                  )
                )}
              </table>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mb-4">
              <select
                value={selectedMethodFilter}
                onChange={(e) => setSelectedMethodFilter(e.target.value)}
                className="rounded border p-2 text-black"
              >
                <option value="">All Payment Methods</option>
                <option value="method1">Method 1</option>
                <option value="method2">Method 2</option>
                {/* Agregar más opciones de filtro según sea necesario */}
              </select>
              <button
                onClick={handleApplyMethodFilter}
                className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
              >
                Apply Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table text-center">
                <thead className="text-lg">
                  <tr>
                    <th>#</th>
                    <th>Método de Pago</th>
                  </tr>
                </thead>
                {payment_Methods.length === 0 ? (
                  <p>No payment methods found.</p>
                ) : (
                  payment_Methods.map((method: SearchResult) => (
                    <tbody key={method.id}>
                      {/* row 1 */}
                      <tr className="hover">
                        <th>{method.id}</th>
                        <td>{method.name}</td>
                        {/* <td>
                          <Link
                            key={method.id}
                            href={{
                              pathname: `/app/method/${method.id}`,
                              query: {
                                id: method.id,
                                name: method.name,
                              },
                            }}
                          >
                            <button className="btn btn-secondary mx-2">
                              Ver Detalles
                            </button>
                          </Link>
                        </td> */}
                      </tr>
                    </tbody>
                  ))
                )}
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SearchPage;
