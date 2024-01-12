import { favoritesRouter } from "~/server/routers/favorites";
import { trpc } from "~/server/api/trpc";
import { getSession } from "next-auth/react";
import { api } from "~/utils/api";
import { id } from "ethers";



export default function FavoritePlaces() {
    
    const {data} = api.favorites.getFavorites.useQuery();
    console.log (data);
    
}