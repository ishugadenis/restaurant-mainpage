import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin:"2rem 0" }}>New technology trends have had a profound impact on lifestyle in recent years. From 
smartphones and social media to the Internet of Things and artificial intelligence, technology </p>
<button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header-img"/>
    </div>
  </div>
);

export default Header;
