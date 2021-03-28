import axios from "axios";

let apiKey = "927d467b32b14cc8b467532f167af6e8";
export const topHeadline = () => (dispatch) => {
  dispatch({
    type: "HEADLINE_NEWS_LOADING",
  });
  return axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "id", //for indonesia
        apiKey: apiKey,
      },
    })
    .then((res) => {
      return dispatch({
        type: "HEADLINE_NEWS_LOADED",
        payload: res.data.articles,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const search = ({ key, sortBy, pageSize }) => (dispatch) => {
  dispatch({
    type: "LATEST_NEWS_LOADING",
  });
  dispatch({
    type: "LATEST_NEWS_LOADIMG",
  });
  return axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        q: key ? key : "indonesia",
        apiKey: apiKey,
        sortBy: sortBy ? sortBy : "publishedAt",
        pageSize,
      },
    })
    .then((res) => {
      if (sortBy === "publishedAt") {
        return dispatch({
          type: "LATEST_NEWS_LOADED",
          payload: res.data.articles,
        });
      } else if (sortBy === "popularity") {
        return dispatch({
          type: "POPULAR_NEWS_LOADED",
          payload: res.data.articles,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
