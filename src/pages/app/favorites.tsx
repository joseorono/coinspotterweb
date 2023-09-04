import React, { useState, useRef } from "react";
// import "~/components/favorites/favorites.css";
// import Modal from "./Modal";
import Card from "../../components/favorites/Card";

// Datos de ejemplo de las cards favoritas
const favoriteCards = [
  {
    id: 1,
    title: "Card 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "usdtLogo.png",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Card 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "imagen_card_2.jpg",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Card 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "imagen_card_3.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Card 4",
    description: "Descripción de la Card 4",
    image: "imagen_card_4.jpg",
    isFavorite: true,
  },
  {
    id: 5,
    title: "Card 5",
    description: "Descripción de la Card 5",
    image: "imagen_card_5.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Card 6",
    description: "Descripción de la Card 6",
    image: "imagen_card_6.jpg",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Card 7",
    description: "Descripción de la Card 7",
    image: "imagen_card_7.jpg",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Card 8",
    description: "Descripción de la Card 8",
    image: "imagen_card_8.jpg",
    isFavorite: false,
  },
  {
    id: 9,
    title: "Card 9",
    description: "Descripción de la Card 98",
    image: "imagen_card_8.jpg",
    isFavorite: false,
  },
  {
    id: 10,
    title: "Card 10",
    description: "Descripción de la Card 10",
    image: "imagen_card_8.jpg",
    isFavorite: false,
  },
];

const FavoritesPage = () => {
  const [items, setItems] = useState(favoriteCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modal, setModal] = useState(false);

  const handleOpenModal = (card:any) => {
    console.log(card);
    setSelectedCard(card);
    setModal(!modal);
  };
  // const handleCloseModal = () => setModal(!modal);
  const handleToggleFavorite = (id:any, isFavorite:boolean) => {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const handleRemoveFavorite = (res:any) => {
    console.log(res);
  };

  return (
    <div>
      <h2>Mis Favoritos</h2>
      <div className="card-container">
        {
        items.map((card) => (
            <Card
              key={card.id}
              card={card}
              modal={modal}
              cardSelected={selectedCard}
              handleOpenModal={handleOpenModal}
              handleAddFavorite={handleToggleFavorite}
            />
          )
        )
        }
      </div>
      {/* {modal && <Modal closeModal={handleModal} cardData={items} />} */}
    </div>
  );
};

export default FavoritesPage;
