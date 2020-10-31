import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import "../styles/screens/housemap.css";
import logo from "../images/logo-3.png";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface House {
  id:number;
  latitude:number;
  longitude:number;
  name:string;
}

const HousesMap = () => {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    api.get('/houses').then(response => {
      console.log(response.data)
     setHouses(response.data);
    })
  }, []);
  
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
        <Link to="/houses/add" className="new-house">
          <span>Adicionar Casa</span>
          <FiPlus size={26} color="rgba(0 ,0,0)" />
        </Link>
      </aside>
      <Map
        center={[-23.55052, -46.633308]}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {houses.map(house => {
          return (
            <Marker key={house.id} icon={mapIcon} position={[house.latitude, house.longitude]}>
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {house.name}
                <Link to={`/houses/${house.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
        
      </Map>
    </div>
  );
};

export default HousesMap;
