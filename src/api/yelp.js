import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dldPElDZvY2eYjAqrPS1kIezFrJJsq355ytS59pFJzgi4-vqgUjsw_YP-dWtZDikpeQRQq3pKaL6CrKpRLarTcd6Mxv4KukJZz_f8AuGj_qzdkA3tmFJHflAl2_5YnYx",
  },
});
