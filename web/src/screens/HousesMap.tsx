import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import Leaflet from 'leaflet';

import "../styles/housemap.css";
import logo from "../images/logo-2.png";

const mapIcon= Leaflet.icon({
  iconUrl:logo,
  iconSize:[58,68],
  iconAnchor:[29,68],
  popupAnchor:[170,2]
});

// interface Orphanage {
//   id:number;
//   latitude:number;
//   longitude:number;
//   name:string;
// }

const HousesMap = () => {
  return (
    <div id="housemap-container">
      <aside>        
        <Link to="/">
          <img src={logo} alt="mini Logo" />
        </Link>
        <h2>Temos várias opções de casas para você.</h2>
        <p>Diferentes casas no seu bairro.</p>        
        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
        <Link to="/create" className="new-house">
          <span>Adicionar Casa</span><FiPlus size={26} color="rgba(255 ,255,255)" />
        </Link>
      </aside>
      <Map
        center={[-23.550520, -46.633308]}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
    </div>
  );
};

export default HousesMap;
