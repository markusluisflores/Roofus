"use client"

import Login from "@/components/login";
import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";
import { useState } from "react";

export default function Home() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <main>
      <NavBar
        openLoginModal={openLogin}
      />
      {
        isLoginOpen &&
        <Login
          closeLoginModal={closeLogin}
        />
      }

    </main>
  );
}
