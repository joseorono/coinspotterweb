"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: sessionData } = useSession();

  const handleSignButtonClick = () => {
    if (sessionData) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={handleSignButtonClick}
      >
        {sessionData ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>
    </div>
  );
}
