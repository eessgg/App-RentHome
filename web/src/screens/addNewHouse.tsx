import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import Sidebar from "../components/Sidebar";
import marker from "../images/marker.png";
import "../styles/screens/newhouse.css";

const mapIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const addNewHouse = () => {
  return (
    <div id="screen-newhouse">
      <Sidebar />
      <main>
        <Map
          center={[-23.55052, -46.633308]}
          zoom={12}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker icon={mapIcon} position={[-23.55052, -46.633308]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <Link to={`/houses/1`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        </Map>
      </main>
    </div>
  );
};

export default addNewHouse;
