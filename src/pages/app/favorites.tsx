import React, { useState, useRef } from "react";
// import "~/components/favorites/favorites.css";
// import Modal from "./Modal";
import FavPlaceCard from "../../components/favorites/FavPlaceCard";
import { boolean, object } from "zod";

// Datos de ejemplo de las cards favoritas
const favoriteCards = [
  {
    name: "name 1",
    description: "description 1",
    address: "address 1",
    latitude: 59,
    longitude: 55,
    google_places_id: "google_places_id 1",
    on_google_maps: false,
    profile_pic_url: "profile_pic_url 1",
    is_favorite: false,
    id: "1",
  },
  {
    name: "name 2",
    description: "description 2",
    address: "address 2",
    latitude: 6,
    longitude: 95,
    google_places_id: "google_places_id 2",
    on_google_maps: false,
    profile_pic_url: "profile_pic_url 2",
    is_favorite: false,
    id: "2",
  },
  {
    name: "name 3",
    description: "description 3",
    address: "address 3",
    latitude: 8,
    longitude: 84,
    google_places_id: "google_places_id 3",
    on_google_maps: false,
    profile_pic_url: "profile_pic_url 3",
    is_favorite: false,
    id: "3",
  },
  {
    name: "name 4",
    description: "description 4",
    address: "address 4",
    latitude: 93,
    longitude: 74,
    google_places_id: "google_places_id 4",
    on_google_maps: false,
    profile_pic_url: "profile_pic_url 4",
    is_favorite: false,
    id: "4",
  },
  {
    name: "name 5",
    description: "description 5",
    address: "address 5",
    latitude: 85,
    longitude: 25,
    google_places_id: "google_places_id 5",
    on_google_maps: false,
    profile_pic_url: "profile_pic_url 5",
    is_favorite: false,
    id: "5",
  },
];

const FavoritesPage = () => {
  const [items, setItems] = useState(favoriteCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const modalOpen = useRef(false);

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
    <div>
      <div className="my-16">
        <h2>Mis Favoritos</h2>
      </div>
      <div className="card-container">
        {items.map((card) => (
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
    </div>
  );
};

export default FavoritesPage;
