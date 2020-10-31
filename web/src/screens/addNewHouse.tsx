import React, { FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent} from 'leaflet'
import { FiPlus } from "react-icons/fi";

import Sidebar from "../components/Sidebar";

import "../styles/screens/newhouse.css";
import mapIcon from "../utils/mapIcon";

// const MapIcon = L.icon({
//   iconUrl: 'mapIcon',
//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [0, -60],
// });

export default function CreateOrphanage() {
  const [position, setPosition] = useState({latitude:0, longitude:0})
  const [name, setName] = useState('')
  const [details, setDetails] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  function handleMapClick(event: LeafletMouseEvent) {
    const {lat, lng} = event.latlng;
    setPosition({latitude:lat, longitude: lng})
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const {latitude, longitude} = position;

    console.log(name, details, phonenumber, latitude, longitude);
  }

  return (
    <div id="screen-newhouse">
      <Sidebar />
      <main>
        <form className="form-newhouse" onSubmit={handleSubmit}>
          <div className="map">
            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: "100%", height: "100%" }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>
          </div>
          <div className="info">
            <fieldset>
              <legend>Dados</legend>
              <div className="input-block">
                <label htmlFor="name">Nome da Mobiliaria</label>
                <input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="about">
                  Detalhes da propriedade <span>Máximo de 100 caracteres</span>
                </label>
                <textarea
                  id="name"
                  maxLength={100}
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="phonenumber">Telefone</label>
                <input
                  id="phonenumber"
                  type="number"
                  value={phonenumber}
                  onChange={(event) => setPhonenumber(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="images">Fotos</label>

                <div className="images-container">
                  <button className="new-image" type="button">
                    <FiPlus size={24} color="#15b6d6" />
                  </button>
                </div>              
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
