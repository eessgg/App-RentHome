import React from "react";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { Link, useHistory } from "react-router-dom";
import L from "leaflet";

import "../styles/screens/house.css";
import logo from "../images/mini-logo.png";
import marker from "../images/marker-3.png";
import Sidebar from "../components/Sidebar";

const happyMapIcon = L.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <div id="screen-house">
      <Sidebar />
      <main>
        <div className="house-details">
          <div className="house-images-content">
            <img
              src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
              alt="Lar das meninas"
            />
            <div className="images">
              <button className="active" type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
              <button type="button">
                <img
                  src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                  alt="Lar das meninas"
                />
              </button>
            </div>
          </div>
          <div className="house-details-content">
            <h2>Nome da Mobiliaria</h2>
            <p>Detalhes da propriedade</p>
            <p>Telefone: 1515-1515</p>

            <div className="map-container">
              <Map
                center={[-23.55052, -46.633308]}
                zoom={12}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  icon={happyMapIcon}
                  position={[-23.55052, -46.633308]}
                ></Marker>
              </Map>

              <footer>
                <a href="/">Ver rotas no Google Maps</a>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
