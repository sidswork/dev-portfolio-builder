import React from "react";
import METADATA from "../data/metadata";

const Navbar = () => {
  return (
    <section className="hero is-dark is-bold has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{METADATA.HEADER}</h1>
          <h2 className="subtitle">{METADATA.SUBTITLE}</h2>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
