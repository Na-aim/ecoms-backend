import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://ecomsbackend.herokuapp.com/products/";
class ProductService {
  async create(product) {
    return axios.post(
      API_URL,
      {
        name: req.body.name,
        anime: req.body.anime,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        created_by: req.userId,
      },
      { headers: authHeader() }
    );
  }
  delete(product) {
    return axios.delete(API_URL + product, { headers: authHeader() });
  }
  update(product) {
    return axios.patch(
      API_URL + product_id,
      {
        name: req.body.name,
        anime: req.body.anime,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        created_by: req.userId,
      },
      { headers: authHeader() }
    );
  }
}

export default new ProductService();
