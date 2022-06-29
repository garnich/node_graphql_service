import fetch from 'node-fetch';
import { MICROSERVICIES } from '../constants';

const resolvers = {
	Query: {
		async getArtists () {
			const response = await fetch(MICROSERVICIES.ARTIST, {method: 'GET'});
			const data = await response.json();

			return data.items
		},
		async getArtist (_: any, { id }: { id: string }) {
			const response = await fetch(`${MICROSERVICIES.ARTIST}${id}`, { method: 'GET' });
			const data = await response.json();

			return data
		}
	},
	Mutation: {
		register: async (firstName: string, lastName: string, password: string, email: string ) => {
			const userData = {firstName, lastName, password, email};
		
			const response = await fetch(MICROSERVICIES.USERS, {method: 'POST', body: JSON.stringify(userData) });
			const data = await response.json();

			console.log(data);
			return data
		}
	}
};

export { resolvers };