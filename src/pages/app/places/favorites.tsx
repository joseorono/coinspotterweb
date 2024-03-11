import React, { useState, useRef } from "react";
// import "~/components/favorites/favorites.css";
// import Modal from "./Modal";
import FavPlaceCard from "~/components/favorites/FavPlaceCard";
import { boolean, object } from "zod";
import AppLayout from "~/components/layout/AppLayout";
import BsCenteredContainer from "~/components/layout/BsCenteredContainer";

import { api } from "~/utils/api";

import { getServerAuthSession } from "~/server/auth";


import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Places, favorite_places } from "@prisma/client";
import { prisma } from "~/server/db";

 
export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  // Fetch data from external API

  let favPlaces: Places[]|null = null;
  const session = await getServerAuthSession(ctx);

  if (session) {
    const userId = session.user.id;

    const favorites = await prisma.favorite_places.findMany({
      where: {
        user: {
          id: userId,
        },
      },
    });

    const fav_ids = favorites.map((fav) => fav.place_id);

    favPlaces = await prisma.places.findMany({
      where: {
        id: { in: fav_ids },
      },
    });

  }

  return { props: { favPlaces } }
})




const FavoritesPage = ({
  favPlaces,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // ToDo: Grab Places data from props
  let favoriteCards = favPlaces;
  //let favoriteCards = [];

  const [items, setItems] = useState(favoriteCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const modalOpen = useRef(false);

  console.log(favPlaces);

  const handleOpenModal = (card: any) => {
    console.log(card);
    setSelectedCard(card);
    modalOpen.current = !modalOpen.current;
  };
  // const handleCloseModal = () => setModal(!modal);
  const handleToggleFavorite = (id: any) => {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, is_favorite: !item.is_favorite } : item
      )
    );
  };

  const handleRemoveFavorite = (res: any) => {
    console.log(res);
  };

  return (
    <AppLayout pageTitle="CoinSpotter">
      <BsCenteredContainer>
        <div className="my-16">
          <h2>Mis Favoritos</h2>
        </div>
        <div className="card-container grid gap-4 p-4 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-8">
          {items?.map((card) => (
            <FavPlaceCard
              key={card.id}
              card={card}
              modal={modalOpen.current}
              cardSelected={selectedCard}
              handleOpenModal={handleOpenModal}
              handleAddFavorite={handleToggleFavorite}
            />
          ))}
        </div>
        {/* {modal && <Modal closeModal={handleModal} cardData={items} />} */}
      </BsCenteredContainer>
    </AppLayout>
  );
};

export default FavoritesPage;
