import React, { FormEvent, useState, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { FiPlus } from "react-icons/fi";

import Sidebar from "../components/Sidebar";

import "../styles/screens/newhouse.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import { useHistory } from "react-router-dom";

// const MapIcon = L.icon({
//   iconUrl: 'mapIcon',
//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [0, -60],
// });

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({ latitude: lat, longitude: lng });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("dono", name);
    data.append("details", details);
    data.append("phonenumber", String(phonenumber));
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));

    images.forEach((image) => {
      data.append("images", image);
    });

    console.log(name, details, phonenumber, latitude, longitude, images);

    await api.post("houses", data);

    alert("Cadastro realizado com sucesso!");

    history.push("/houses/map");
  }

  return (
    <div id="screen-newhouse">
      <Sidebar />
      <main>
        <form className="form-newhouse" onSubmit={handleSubmit}>
          <div className="map">
            <Map
              center={[-23.55052, -46.633308]}
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
                  {previewImages.map((image) => {
                    return <img key={image} src={image} alt={name} />;
                  })}
                  <label htmlFor="image[]" className="new-image">
                    <FiPlus size={24} color="#D90368" />
                  </label>
                  <input
                    multiple
                    onChange={handleSelectImages}
                    type="file"
                    name="img"
                    id="image[]"
                  />
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
