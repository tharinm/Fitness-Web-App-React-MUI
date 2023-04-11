
export const exerciseOption = {
  method: "GET",
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  },
};

export const youtubeOption = {
  method: "GET",
  //url: "https://youtube-search-and-download.p.rapidapi.com/channel/about"
  headers: {
    'X-RapidAPI-Key': '108193aceamsh7ad892ae2757676p109d99jsn07e433a8a071',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

