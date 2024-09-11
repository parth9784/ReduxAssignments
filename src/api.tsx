import axios from "axios";

export const fetchshow = (keyword: string) => {
  return axios
    .get("https://api.tvmaze.com/search/shows?q=" + keyword)
    .then((response) => {
      return response.data.map((item: any) => item.show);
    });
};
