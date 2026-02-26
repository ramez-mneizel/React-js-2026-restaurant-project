import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import MenuCard from "../Menu/MenuCard.jsx";

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <MenuCard
        name={"papparoni"}
        description={" halal beef , salt , paprika,spicesand smoke flavoring."}
      />
      <MenuCard
        name={"chicken pizza"}
        description={" chicken , salt ,spices and potatos."}
      />
    </>
  );
}

export default LandingPage;
