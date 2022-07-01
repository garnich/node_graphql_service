import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IID, IGenreBase, IGenreFull } from '../../types';

const genresQueryResolver = {
    async getGenres () {
        const response = await fetch(MICROSERVICIES.GENRES, {method: 'GET'});
        const data = await response.json();

        return data.items
    },
    async getGenre (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.GENRES}${id}`, { method: 'GET' });
        const data = await response.json();

        return data
    }
};

const genresMutationResolver = {
    async createGenre (_: null, { name, description, country, year }: IGenreBase, { token }: IToken ) {
        const genreData = { name, description, country, year };

        const requestOptions = {
            method: 'POST',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(genreData),
        };
    
        const response = await fetch(MICROSERVICIES.GENRES, requestOptions);
        const data = await response.json();

        return data;
    },
    async updateGenre (_: null, { id, name, description, country, year }: IGenreFull, { token }: IToken ) {
        const genreData = { name, description, country, year };

        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(genreData),
        };
    
        const response = await fetch(`${MICROSERVICIES.GENRES}${id}`, requestOptions);
        const data = await response.json();

        return data;
    },
    async deleteGenre (_: null, { id }: IID, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.GENRES}${id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { genresQueryResolver, genresMutationResolver };
