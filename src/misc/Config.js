const BASE_API = "https://api.tvmaze.com/";

export const getApi = async (queryString) => {
  try {
    const results = await fetch(`${BASE_API + queryString}`).then((results) =>
      results.json()
    );
    return results;
  } catch (e) {
    console.log(e);
  }
};
