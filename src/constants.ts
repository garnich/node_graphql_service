const MICROSERVICIES = {
	JWT: 'http://localhost:3001/v1/genres',
	GENRES: 'http://localhost:3001/v1/genres/',
	ARTIST: 'http://localhost:3002/v1/artists/',
	BANDS: 'http://localhost:3003/v1/bands/',
	USERS: 'http://localhost:3004/v1/users/login/',
	REGISTER: 'http://localhost:3004/v1/users/register/',
	ALBUMS:'http://localhost:3005/v1/albums/',
	TRACKS: 'http://localhost:3006/v1/tracks/',
	FAVOURITES: {
		GET: 'http://localhost:3007/v1/favourites/',
		ADD: 'http://localhost:3007/v1/favourites/add',
		REMOVE: 'http://localhost:3007/v1/favourites/remove'
	}
  };

  const BASE_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
  };

  const TOKENT_STORE_WITHOUT_FRONT = { token: ''};

  export { MICROSERVICIES, BASE_HEADERS, TOKENT_STORE_WITHOUT_FRONT };
