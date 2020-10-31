import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useParams } from "react-router-dom";

import "../styles/screens/house.css";
import marker from "../images/marker-3.png";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

const happyMapIcon = L.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

interface House {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  details: string;
  phonenumber: number;
  images: Array<{
    id:number;
    url: string;
  }>;
}

interface HouseParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<HouseParams>();
  const [house, setHouse] = useState<House>();
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`/houses/${params.id}` ).then((response) => {
      setHouse(response.data);
    });
  }, [params.id]);

  if (!house) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="screen-house">
      <Sidebar />
      <main>
        <div className="house-details">
          <div className="house-images-content">
            <img src={house.images[activeImageIndex].url} alt={house.name} />

            <div className="images">
              {house.images.map((image, index) => {
                return (
                  <button key={image.id} className={activeImageIndex === index ? 'active' : ''} type="button" onClick={() =>{
                    setActiveImageIndex(index)
                  }}>
                    <img src={image.url} alt={house.name} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="house-details-content">
            <h2>{house.name}</h2>
            <p>Detalhes: {house.details}</p>
            <p>Telefone: {house.phonenumber}</p>

            <div className="map-container">
              <Map
                center={[-23.55052, -46.633308]}
                zoom={12}
                style={{ width: "100%", height: 200 }}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  icon={happyMapIcon}
                  position={[-23.55052, -46.633308]}
                ></Marker>
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${house.latitude},${house.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
