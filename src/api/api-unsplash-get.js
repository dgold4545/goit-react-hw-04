import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchUnsplashData = async (
  queryWord = "",
  pageNum = "1",
  numPerPage = 10
) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: queryWord,
      page: pageNum,
      per_page: numPerPage,
      client_id: "I5dgIyFKdBc94jG-YsyhAsKGWHJ-A6OUlUiEmw1X79Q",
    },
  });

  return response.data;
};
