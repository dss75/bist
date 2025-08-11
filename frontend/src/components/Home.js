import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import MenuSpecialties from "./MenuSpecialties";
import Hours from "./Hours";
import PracticalInfo from "./PracticalInfo";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-warmCream">
      <Header />
      <Hero />
      <About />
      <MenuSpecialties />
      <Hours />
      <Gallery />
      <PracticalInfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;