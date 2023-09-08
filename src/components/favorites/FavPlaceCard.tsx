import React, { useRef } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Link from "next/link";

const FavPlaceCard = ({
  handleOpenModal,
  card,
  cardSelected,
  handleAddFavorite,
  modal,
}: any) => {
  return (
    <>
      {modal && (
        <>
          <div className="fixed left-0 top-0 z-20 h-[100vh] w-full bg-[#3D3D40] opacity-10"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal-content">
              <div className="modal-card">
                <img
                  src={cardSelected.profile_pic_url}
                  alt="Imagen de la Card"
                />
                <h3>{cardSelected.name}</h3>
                <p>{cardSelected.description}</p>
              </div>
              <button
                className="close-button"
                onClick={() => {
                  handleOpenModal();
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
      <div className="card relative" key={card.id}>
        <div className="starElement" onClick={() => handleAddFavorite(card.id)}>
          {card.is_favorite ? (
            <AiFillStar size={40} color="gold" />
          ) : (
            <AiOutlineStar size={40} />
          )}
        </div>
        <div className="card-image">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"
            alt="Imagen de la Card"
            className="neutral"
          />
        </div>
        <div className="roundElement">
          <img src="https://i.pravatar.cc/300" alt="" />
        </div>
        <div className="card-content">
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
        <div className="card-button">
          <div className="map-btn">
            <img
              className="roundElement-button"
              src="https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_960_720.png"
              alt=""
            />
          </div>
          <Link href={`places/${card.id}`}>
            <button className="btn btn-secondary">Ver Detalles</button>
          </Link>
          {/* <button onClick={() => handleOpenModal(card, card.isFavorite)}>
            Ver Detalles
          </button> */}
        </div>
      </div>
    </>
  );
};

export default FavPlaceCard;
