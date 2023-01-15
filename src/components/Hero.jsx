import React from "react";
import PhotoGrid from "../assets/photo-grid.png";
export default function Hero() {
  return (
    <section className="hero">
      <img src={PhotoGrid} alt="" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        doloremque voluptatem possimus consequuntur ratione quis?
      </p>
    </section>
  );
}
