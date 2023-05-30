import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27e2ef3875d2455a8514b5e2e496d2f2",
  },
});
