import React from "react";
import { Link } from "react-router-dom";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import L from "leaflet";

import Sidebar from "../components/Sidebar";

import mapMarkerImg from "../images/marker-3.png";
import logo from "../images/logo-3.png";
import "../styles/screens/newhouse.css";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default function CreateOrphanage() {
  const { goBack } = useHistory();

  return (
    <div id="screen-newhouse">
      <Sidebar />
      <main>
        <form className="form-newhouse">
          <div className="map">
            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: "100%", height: "100%" }}
              zoom={15}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>
          </div>
          <div className="info">
            <fieldset>
              <legend>Dados</legend>
              <div className="input-block">
                <label htmlFor="name">Nome da Mobiliaria</label>
                <input id="name" />
              </div>
              <div className="input-block">
                <label htmlFor="about">
                  Detalhes da propriedade <span>Máximo de 100 caracteres</span>
                </label>
                <textarea id="name" maxLength={100} />
              </div>
              <div className="input-block">
                <label htmlFor="phonenumber">Telefone</label>
                <input id="phonenumber" type="number" />
              </div>
              <div className="input-block">
                <label htmlFor="images">Fotos</label>
                <div className="uploaded-image"></div>
                <button className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </button>
              </div>
            </fieldset>
            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
