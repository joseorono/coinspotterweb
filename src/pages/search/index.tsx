
import { useRouter } from "next/router";
import useSWR from "swr";
import Spinner from "./spinner";

interface Producto {
  id: number;
  nombre: string;
}

const fetchProductos = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch productos");
  }

  return response.json();
};

const SearchPage = () => {
  const router = useRouter();
  const searchQuery = router.query.q as string;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const response = useSWR(`/api/search?query=${encodedSearchQuery}`, fetchProductos);

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

  const { productos }: { productos: Producto[] } = response.data as { productos: Producto[] };

  return (
    <>
      <span className="text-xl">
        Showing results for: <span className="font-semibold">{searchQuery}</span>
      </span>
      {productos.map((producto: Producto) => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
    </>
  );
};

export default SearchPage;

