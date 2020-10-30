import Leaflet from 'leaflet';
import marker from "../images/marker-3.png";

const mapIcon = Leaflet.icon({
  iconUrl: marker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;