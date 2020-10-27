import House from "../models/House";
import imagesView from "./images_view";

export default {
  render(house: House) {
    return {
      id: house.id,
      name: house.dono,
      latitude: house.latitude,
      longitude: house.longitude,
      details: house.details,
      phonenumber: house.phonenumber,
      images: imagesView.renderMany(house.images),
    };
  },

  renderMany(houses: House[]) {
    return houses.map((house) => this.render(house));
  },
};
