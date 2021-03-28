const initialState = {
  headline_news: {
    isLoading: true,
    data: [],
  },
  latest_news: {
    isLoading: true,
    data: [],
  },
  popular_news: {
    isLoading: true,
    data: [],
  },
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "HEADLINE_NEWS_LOADING":
      return {
        ...state,
        headline_news: {
          isLoading: true,
          data: [],
        },
      };
    case "LATEST_NEWS_LOADING":
      return {
        ...state,
        latest_news: {
          isLoading: true,
          data: [],
        },
      };
    case "POPULAR_NEWS_LOADING":
      return {
        ...state,
        popular_news: {
          isLoading: true,
          data: [],
        },
      };
    case "HEADLINE_NEWS_LOADED":
      return {
        ...state,
        headline_news: {
          isLoading: false,
          data: action.payload,
        },
      };
    case "LATEST_NEWS_LOADED":
      return {
        ...state,
        latest_news: {
          isLoading: false,
          data: action.payload,
        },
      };
    case "POPULAR_NEWS_LOADED":
      return {
        ...state,
        popular_news: {
          isLoading: false,
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
