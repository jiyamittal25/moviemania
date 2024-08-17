const key='fc5aad481fc4d0215f130a5b0333be12'
const baseRequestURL='https://api.themoviedb.org/3'

// back tick used no need to copy key in every link 
const requests = {
  requestNetflixOriginals: `${baseRequestURL}/discover/tv?api_key=${key}&with_networks=213`,
  requestPopular: `${baseRequestURL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${baseRequestURL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${baseRequestURL}/trending/all/day?api_key=${key}&language=en-US`,
  requestHorror: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=27`,
  requestUpcoming: `${baseRequestURL}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&page=1`,
  requestAnimation: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=16`,
  requestChildren: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&certification_country=US&certification.lte=G&with_genres=16`,
  requestRomantic: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=10749`,
  requestAction: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=28`,
  requestComedy: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=35`,
  requestScienceFiction: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=878`,
  requestDrama: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=18`,
  requestAdventure: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=12`,
  requestFantasy: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=14`,
  requestMystery: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=9648`,
  requestMusic: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=10402`,
  requestBiography: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=35`,
  requestHistorical: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=36`,
  requestWar: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=10752`,
  requestThriller: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=53`,
  requestSuperhero: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_keywords=superhero`,
  requestFamily: `${baseRequestURL}/discover/movie?api_key=${key}&language=en-US&with_genres=10751`,
  requestAnimationTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&with_genres=16`,
  requestCrimeTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&with_genres=80`,
  requestRealityTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&with_genres=10764`,
  requestFantasyTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&with_genres=10765`,
  requestScienceFictionTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&with_genres=10765`,
  requestHistoricalTvShows: `${baseRequestURL}/discover/tv?api_key=${key}&language=en-US&with_genres=36`,
};

export default requests;
